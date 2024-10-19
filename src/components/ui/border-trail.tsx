"use client";
import { cn } from "@/lib/utils";
import { motion, useTime, useTransform, type Transition } from "framer-motion";
import { useEffect, useState } from "react";

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  //   className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 10,
    ease: "linear",
  };

  const className = `bg-gradient-to-l from-border via-yellow-500 to-border`;
  const className2 = `bg-gradient-to-l from-border via-red-500 to-border`;
  const className3 = `bg-gradient-to-l from-border via-purple-500 to-border`;

  return (
    <>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
        <motion.div
          className={cn("absolute aspect-square bg-zinc-500", className)}
          style={{
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            ...style,
          }}
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [1, 0, 0, 1, 0, 0, 1],
          }}
          transition={{
            ...(transition ?? BASE_TRANSITION),
          }}
          onAnimationComplete={onAnimationComplete}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
        <motion.div
          className={cn("absolute aspect-square bg-zinc-500", className2)}
          style={{
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            ...style,
          }}
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 0, 0, 1, 0, 0],
          }}
          transition={{
            ...(transition ?? BASE_TRANSITION),
            delay: delay,
          }}
          onAnimationComplete={onAnimationComplete}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
        <motion.div
          className={cn("absolute aspect-square bg-zinc-500", className3)}
          style={{
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            ...style,
          }}
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 0, 1, 0, 0, 1, 0],
          }}
          transition={{
            ...(transition ?? BASE_TRANSITION),
            delay: delay,
          }}
          onAnimationComplete={onAnimationComplete}
        />
      </div>
    </>
  );
}
