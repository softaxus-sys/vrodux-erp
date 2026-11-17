"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AlertCircle, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, trackEvent } from "@/lib/utils";
import { formatDuration, YOUTUBE_CHANNEL_URL, type DemoVideo } from "@/lib/demos";

/** How long the site player may take to load metadata, or to recover from buffering, before we offer help. */
const SLOW_LOAD_MS = 10_000;
const SLOW_BUFFER_MS = 8_000;
const YT_ORIGIN = "https://www.youtube-nocookie.com";

type Mode = "native" | "youtube";
type FallbackTrigger = "auto" | "overlay" | "link";

const MEDIA_ERRORS: Record<number, string> = {
  1: "aborted",
  2: "network",
  3: "decode",
  4: "src_not_supported",
};

/**
 * Native player + chapter list. No autoplay; chapter clicks seek and play.
 *
 * If the site video cannot load (some networks cannot reach our media), the visitor gets a
 * retry button and a YouTube version of the same demo, shown here without leaving the page.
 * Every failure and fallback is sent to analytics so we can see how often it happens.
 */
export function DemoPlayer({ video, startAt }: { video: DemoVideo; startAt?: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bufferTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playedRef = useRef(false);
  const slowReportedRef = useRef(false);

  const [mode, setMode] = useState<Mode>("native");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [slow, setSlow] = useState(false);
  const [failed, setFailed] = useState(false);
  const [notice, setNotice] = useState("");
  const [yt, setYt] = useState({ start: 0, autoplay: false });
  const { chapters, youtubeId, youtubeSynced } = video;

  const track = useCallback(
    (action: string, extra: Record<string, string | number | boolean> = {}) =>
      trackEvent(action, { demo_slug: video.slug, ...extra }),
    [video.slug],
  );

  const clearTimers = useCallback(() => {
    if (loadTimer.current) clearTimeout(loadTimer.current);
    if (bufferTimer.current) clearTimeout(bufferTimer.current);
    loadTimer.current = null;
    bufferTimer.current = null;
  }, []);

  const armLoadTimer = useCallback(() => {
    if (loadTimer.current) clearTimeout(loadTimer.current);
    loadTimer.current = setTimeout(() => {
      const el = ref.current;
      if (el && el.readyState < 1) {
        setSlow(true);
        if (!slowReportedRef.current) {
          slowReportedRef.current = true;
          track("demo_video_slow", { stage: "load", seconds: SLOW_LOAD_MS / 1000 });
        }
      }
    }, SLOW_LOAD_MS);
  }, [track]);

  // Start watching the site player as soon as it appears (the dialog opens on a click, so this means intent to watch).
  useEffect(() => {
    if (mode !== "native") return;
    armLoadTimer();
    return clearTimers;
  }, [mode, armLoadTimer, clearTimers]);

  const syncActive = useCallback(() => {
    const t = ref.current?.currentTime ?? 0;
    let idx = -1;
    for (let i = 0; i < chapters.length; i++) {
      if (chapters[i].start <= t) idx = i;
      else break;
    }
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  }, [chapters]);

  // Open at the requested second (still paused: no autoplay).
  const onLoadedMetadata = useCallback(() => {
    if (loadTimer.current) clearTimeout(loadTimer.current);
    setSlow(false);
    setFailed(false);
    const el = ref.current;
    if (el && startAt && startAt < (el.duration || Infinity)) {
      el.currentTime = startAt;
    }
  }, [startAt]);

  const onPlaying = useCallback(() => {
    if (bufferTimer.current) clearTimeout(bufferTimer.current);
    setSlow(false);
    if (!playedRef.current) {
      playedRef.current = true;
      track("demo_video_play", { mode: "native" });
    }
  }, [track]);

  // Buffering that does not recover soon is worth a prompt, not a silent spinner.
  const onWaiting = useCallback(() => {
    if (bufferTimer.current) clearTimeout(bufferTimer.current);
    bufferTimer.current = setTimeout(() => {
      setSlow(true);
      if (!slowReportedRef.current) {
        slowReportedRef.current = true;
        track("demo_video_slow", { stage: "buffering", seconds: SLOW_BUFFER_MS / 1000 });
      }
    }, SLOW_BUFFER_MS);
  }, [track]);

  const switchToYouTube = useCallback(
    (trigger: FallbackTrigger) => {
      if (!youtubeId) return;
      const el = ref.current;
      // Carry the viewer's place across only when the YouTube cut has the same timeline.
      const at = youtubeSynced ? Math.floor(el?.currentTime || startAt || 0) : 0;
      el?.pause();
      clearTimers();
      setYt({ start: at, autoplay: trigger !== "auto" });
      setNotice(
        trigger === "auto"
          ? "The video did not load here, so we switched to the YouTube version."
          : "",
      );
      setSlow(false);
      setFailed(false);
      setMode("youtube");
      track("demo_fallback_youtube", { trigger });
    },
    [youtubeId, youtubeSynced, startAt, clearTimers, track],
  );

  const onError = useCallback(() => {
    const el = ref.current;
    const code = el?.error?.code ?? 0;
    clearTimers();
    track("demo_video_error", {
      error: MEDIA_ERRORS[code] ?? "unknown",
      network_state: el?.networkState ?? -1,
      has_youtube: !!youtubeId,
    });
    // A hard failure with a YouTube copy available: go straight there rather than leave a black box.
    if (youtubeId) switchToYouTube("auto");
    else {
      setSlow(false);
      setFailed(true);
    }
  }, [clearTimers, track, youtubeId, switchToYouTube]);

  const retry = () => {
    const el = ref.current;
    if (!el) return;
    track("demo_video_retry");
    setSlow(false);
    setFailed(false);
    slowReportedRef.current = false;
    el.load();
    armLoadTimer();
  };

  const backToSitePlayer = () => {
    track("demo_back_to_site_player");
    setNotice("");
    playedRef.current = false;
    slowReportedRef.current = false;
    setMode("native");
  };

  const seekTo = (start: number, index: number) => {
    setActiveIndex(index);
    if (mode === "youtube") {
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      const send = (func: string, args: unknown[] = []) =>
        win.postMessage(JSON.stringify({ event: "command", func, args }), YT_ORIGIN);
      send("seekTo", [start, true]);
      send("playVideo");
      return;
    }
    const el = ref.current;
    if (!el) return;
    el.currentTime = start;
    el.play().catch(() => {
      /* playback blocked or interrupted; controls remain available */
    });
  };

  const youtubeWatchUrl = youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : YOUTUBE_CHANNEL_URL;
  const openOnYouTube = (location: string) => track("demo_youtube_open", { location });

  const ytSrc = youtubeId
    ? `${YT_ORIGIN}/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1` +
      `${yt.start > 0 ? `&start=${yt.start}` : ""}${yt.autoplay ? "&autoplay=1" : ""}` +
      `${typeof window !== "undefined" ? `&origin=${encodeURIComponent(window.location.origin)}` : ""}`
    : "";

  // In YouTube mode, chapters only help when its cut has the same timeline as the site video.
  const showChapters = chapters.length > 0 && (mode === "native" || youtubeSynced);

  return (
    <div>
      {mode === "native" ? (
        <div className="relative">
          <video
            ref={ref}
            src={video.videoUrl}
            controls
            preload="metadata"
            playsInline
            poster={video.posterUrl}
            onLoadedMetadata={onLoadedMetadata}
            onPlaying={onPlaying}
            onWaiting={onWaiting}
            onTimeUpdate={syncActive}
            onSeeked={syncActive}
            onError={onError}
            className="w-full aspect-video rounded-lg bg-black"
          >
            Your browser does not support HTML5 video.
          </video>

          {(slow || failed) && (
            <div
              role="status"
              aria-live="polite"
              className="absolute inset-x-3 top-3 rounded-lg border bg-background/95 p-3 text-sm shadow-lg backdrop-blur"
            >
              <p className="flex items-start gap-2 font-medium">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden />
                {failed ? "This video could not be loaded." : "This video is taking a while to load."}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Button type="button" size="sm" variant="secondary" onClick={retry}>
                  <RefreshCw className="mr-1.5 h-3.5 w-3.5" aria-hidden />
                  Try again
                </Button>
                {youtubeId ? (
                  <Button type="button" size="sm" onClick={() => switchToYouTube("overlay")}>
                    Watch on YouTube
                  </Button>
                ) : (
                  <Button type="button" size="sm" asChild>
                    <a
                      href={YOUTUBE_CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => openOnYouTube("overlay")}
                    >
                      Visit our YouTube channel
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <iframe
            ref={iframeRef}
            src={ytSrc}
            title={`${video.title} demo on YouTube`}
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full aspect-video rounded-lg bg-black"
          />
          {notice && <p className="mt-2 text-sm text-muted-foreground">{notice}</p>}
        </div>
      )}

      <p className="mt-2 text-xs text-muted-foreground">
        {mode === "native" ? (
          <>
            Video not playing?{" "}
            {youtubeId ? (
              <button
                type="button"
                onClick={() => switchToYouTube("link")}
                className="font-medium text-brand-600 underline underline-offset-4 dark:text-brand-400"
              >
                Watch on YouTube
              </button>
            ) : (
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => openOnYouTube("player_link")}
                className="font-medium text-brand-600 underline underline-offset-4 dark:text-brand-400"
              >
                Watch on our YouTube channel
              </a>
            )}
            .
          </>
        ) : (
          <>
            Can&apos;t see the video?{" "}
            <a
              href={youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => openOnYouTube("embed_link")}
              className="font-medium text-brand-600 underline underline-offset-4 dark:text-brand-400"
            >
              Open it on YouTube
            </a>
            {" "}or{" "}
            <button
              type="button"
              onClick={backToSitePlayer}
              className="font-medium text-brand-600 underline underline-offset-4 dark:text-brand-400"
            >
              go back to the site player
            </button>
            .
          </>
        )}
      </p>

      {showChapters && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">Chapters</h3>
          <ol className="max-h-56 overflow-y-auto rounded-lg border divide-y">
            {chapters.map((c, i) => (
              <li key={`${c.start}-${i}`}>
                <button
                  type="button"
                  onClick={() => seekTo(c.start, i)}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className={cn(
                    "flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    i === activeIndex && "bg-brand-500/10 font-medium text-brand-600 dark:text-brand-400",
                  )}
                >
                  <span className="w-10 shrink-0 tabular-nums text-xs text-muted-foreground">
                    {formatDuration(c.start)}
                  </span>
                  <span>{c.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
