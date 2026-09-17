import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { ScreenshotPlaceholder } from "@/components/docs/screenshot-placeholder";

const SCREENSHOT_PATTERN = /^\[screenshot(?::\s*(.*))?\]$/i;
const INLINE_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders `[label](href)` spans inline within a line of plain text. */
function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  INLINE_LINK_PATTERN.lastIndex = 0;
  while ((match = INLINE_LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={key++}
        href={match[2]}
        className="text-brand-500 font-medium hover:underline"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : text;
}

/**
 * Renders the same lightweight markdown-style body format used by the site's
 * blog articles (##, ###, -, 1., blank lines), plus two docs-only additions:
 * a line of exactly `[screenshot: label]` renders the screenshot placeholder,
 * and `[label](href)` inline in a paragraph or list item renders a link.
 */
export function MarkdownLite({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const blocks: React.ReactNode[] = [];
  let listBuffer: { type: "ul" | "ol"; items: string[] } | null = null;

  const flushList = (key: string) => {
    if (!listBuffer) return;
    const ListTag = listBuffer.type;
    blocks.push(
      <ListTag
        key={key}
        className={listBuffer.type === "ul" ? "list-disc pl-5 mb-4 space-y-1" : "list-decimal pl-5 mb-4 space-y-1"}
      >
        {listBuffer.items.map((item, i) => (
          <li key={i} className="text-muted-foreground leading-relaxed">
            {renderInline(item)}
          </li>
        ))}
      </ListTag>
    );
    listBuffer = null;
  };

  lines.forEach((rawLine, i) => {
    const line = rawLine.trim();
    const key = `b-${i}`;

    const screenshotMatch = line.match(SCREENSHOT_PATTERN);
    if (screenshotMatch) {
      flushList(`${key}-list`);
      blocks.push(<ScreenshotPlaceholder key={key} label={screenshotMatch[1]} />);
      return;
    }

    if (line.startsWith("## ")) {
      flushList(`${key}-list`);
      blocks.push(
        <h2 key={key} className="text-2xl font-semibold mt-8 mb-4">
          {line.slice(3)}
        </h2>
      );
      return;
    }

    if (line.startsWith("### ")) {
      flushList(`${key}-list`);
      blocks.push(
        <h3 key={key} className="text-xl font-semibold mt-6 mb-3">
          {line.slice(4)}
        </h3>
      );
      return;
    }

    if (line.startsWith("- ")) {
      if (!listBuffer || listBuffer.type !== "ul") {
        flushList(`${key}-list`);
        listBuffer = { type: "ul", items: [] };
      }
      listBuffer.items.push(line.slice(2));
      return;
    }

    if (/^\d+\.\s/.test(line)) {
      if (!listBuffer || listBuffer.type !== "ol") {
        flushList(`${key}-list`);
        listBuffer = { type: "ol", items: [] };
      }
      listBuffer.items.push(line.replace(/^\d+\.\s/, ""));
      return;
    }

    flushList(`${key}-list`);

    if (line === "") {
      blocks.push(<div key={key} className="h-2" />);
      return;
    }

    blocks.push(
      <p key={key} className="text-muted-foreground leading-relaxed mb-3">
        {renderInline(line)}
      </p>
    );
  });

  flushList("final-list");

  return <Fragment>{blocks}</Fragment>;
}
