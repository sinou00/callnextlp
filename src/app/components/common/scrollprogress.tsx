"use client";

import clsx from "clsx";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div
        ref={ref}
        className={clsx(
          "fixed inset-x-0 top-0 z-30 h-px origin-left bg-gradient-to-r from-[#F9D689] via-[#F9D689] to-[#F9D689]",
          className
        )}
        style={{ scaleX: scrollYProgress }}
        {...props}
      />
    );
  }
);

ScrollProgress.displayName = "ScrollProgress";
