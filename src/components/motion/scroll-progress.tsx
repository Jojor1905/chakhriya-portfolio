"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const progress = progressRef.current;

    if (!progress) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;

      if (reducedMotion.matches) {
        progress.style.transform = "scaleX(0)";
        return;
      }

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0
          ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
          : 0;

      progress.style.transform = `scaleX(${scrollProgress})`;
    };

    const requestProgressUpdate = () => {
      if (animationFrame || reducedMotion.matches) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    const handleMotionPreference = () => {
      if (reducedMotion.matches) {
        progress.style.transform = "scaleX(0)";
        return;
      }

      requestProgressUpdate();
    };

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestProgressUpdate);
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      reducedMotion.removeEventListener("change", handleMotionPreference);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={progressRef} />
    </div>
  );
}
