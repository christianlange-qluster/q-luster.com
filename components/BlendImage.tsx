"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  /** Tailwind aspect-* class, e.g. "aspect-[16/9]". */
  aspect?: string;
  /** Wrapper max-width class, e.g. "max-w-4xl". */
  maxWidth?: string;
  /** next/image sizes string. */
  sizes?: string;
  className?: string;
  /** Slight reveal animation on scroll. */
  animate?: boolean;
};

/**
 * Image renderer for AI/render assets that ship with a black background.
 *
 * Blending strategy:
 *  - mix-blend-mode: screen turns near-black pixels fully transparent against
 *    the dark navy page bg, so the rectangular black backdrop disappears.
 *  - mask-image radial-gradient feathers the outer edges so the bounding box
 *    isn't visible even when the image has bright pixels near the corners.
 *  - A subtle contrast/saturation bump compensates for the screen-blend wash.
 *  - The wrapper carries its OWN bg-bg fill so the screen blend has a known
 *    opaque backdrop even while the framer-motion fade-in animation creates a
 *    stacking context on the wrapper (which would otherwise isolate the blend
 *    from the page bg and briefly render the black backdrop opaque).
 *
 * Result: the asset reads as a glowing render that lives natively on the page,
 * not a pasted-in black rectangle.
 */
export function BlendImage({
  src,
  alt,
  aspect = "aspect-[16/9]",
  maxWidth = "max-w-4xl",
  sizes = "(max-width: 1024px) 95vw, 1024px",
  className = "",
  animate = true,
}: Props) {
  const blendStyle: CSSProperties = {
    mixBlendMode: "screen",
    WebkitMaskImage:
      "radial-gradient(ellipse 80% 85% at center, #000 55%, transparent 100%)",
    maskImage:
      "radial-gradient(ellipse 80% 85% at center, #000 55%, transparent 100%)",
    filter: "contrast(1.05) saturate(1.05)",
  };

  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`relative bg-bg ${aspect} ${maxWidth} mx-auto w-full ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
        style={blendStyle}
      />
    </Wrapper>
  );
}
