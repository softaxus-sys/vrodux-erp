"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

/** next/image that swaps to a local fallback if the remote image fails to load. */
export function FallbackImage({
  fallbackSrc,
  src,
  alt,
  ...rest
}: ImageProps & { fallbackSrc: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <Image
      {...rest}
      src={failed ? fallbackSrc : src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
