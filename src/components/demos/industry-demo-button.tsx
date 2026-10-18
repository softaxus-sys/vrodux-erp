"use client";

import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DemoPlayer } from "@/components/demos/demo-player";
import type { DemoVideo } from "@/lib/demos";

/** "See Demo for X" button that plays the industry's demo video in a dialog. */
export function IndustryDemoButton({ video, label }: { video: DemoVideo; label: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">
          <PlayCircle className="w-4 h-4 mr-2" />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto p-3 sm:p-6">
        <DialogTitle className="pr-6 leading-snug">{video.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {video.description || `${video.title} demo video`}
        </DialogDescription>
        <DemoPlayer video={video} />
      </DialogContent>
    </Dialog>
  );
}
