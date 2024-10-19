"use client";
import { cn } from "@/lib/utils";
import { motion, type Transition } from "framer-motion";

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
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

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn(
          "absolute aspect-square bg-zinc-500 bg-gradient-to-l from-border via-yellow-500 to-border",
          className,
        )}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
          background: [
            "linear-gradient(to left, #27272a, #16a34a, #27272a)",
            "linear-gradient(to left, #27272a, #ef4444, #27272a)",
            "linear-gradient(to left, #27272a, #a855f7, #27272a)",
            "linear-gradient(to left, #27272a, #16a34a, #27272a)",
          ],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}
