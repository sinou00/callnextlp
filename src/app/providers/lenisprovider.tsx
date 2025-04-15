"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust scrolling speed
      lerp: 0.1, // Smooth interpolation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup when unmounting
    };
  }, []);

  return null; // No visible UI
};

export default LenisProvider;
