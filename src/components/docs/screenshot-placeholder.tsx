import { ImageIcon } from "lucide-react";

interface ScreenshotPlaceholderProps {
  label?: string;
}

export function ScreenshotPlaceholder({ label }: ScreenshotPlaceholderProps) {
  return (
    <div className="my-6 rounded-2xl border-2 border-dashed border-border bg-muted/30 py-12 px-6 flex flex-col items-center justify-center text-center gap-2">
      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
        <ImageIcon className="w-5 h-5 text-muted-foreground" />
      </div>
      <p className="text-sm font-medium text-muted-foreground">Screenshot goes here</p>
      {label && <p className="text-xs text-muted-foreground/70">{label}</p>}
    </div>
  );
}
