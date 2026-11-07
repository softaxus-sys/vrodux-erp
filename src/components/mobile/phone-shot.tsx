"use client";

import { useState } from "react";
import Image from "next/image";
import { Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

/** A phone screenshot in a phone-shaped frame. Shows a plain placeholder if the image is not available. */
export function PhoneShot({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[2rem] border-[6px] border-neutral-900 bg-muted shadow-xl dark:border-neutral-700",
        className
      )}
    >
      {failed ? (
        <div className="flex aspect-[9/20] flex-col items-center justify-center gap-2 p-4 text-center text-muted-foreground">
          <Smartphone className="h-8 w-8" aria-hidden />
          <span className="text-xs">Screenshot coming soon</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 260px, 60vw"
          className="h-full w-full object-cover object-top"
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
