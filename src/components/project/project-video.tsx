"use client";

import { useEffect, useRef } from "react";

type ProjectVideoProps = {
  src: string;
  poster: string;
  label: string;
  decorative?: boolean;
  playbackEnabled?: boolean;
  playbackMode?: "viewport" | "immediate";
};

export function ProjectVideo({
  src,
  poster,
  label,
  decorative = false,
  playbackEnabled = true,
  playbackMode = "viewport",
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !playbackEnabled) {
      if (video) {
        video.pause();

        if (playbackMode === "immediate") {
          video.currentTime = 0;
        }
      }

      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    if (playbackMode === "immediate") {
      let isActive = true;

      const startPlayback = () => {
        if (!isActive || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
          return;
        }

        video.play()?.catch(() => undefined);
      };

      video.addEventListener("loadeddata", startPlayback);
      video.addEventListener("canplay", startPlayback);
      video.load();
      startPlayback();

      return () => {
        isActive = false;
        video.removeEventListener("loadeddata", startPlayback);
        video.removeEventListener("canplay", startPlayback);
        video.pause();
        video.currentTime = 0;
      };
    }

    let isInViewport = false;

    const startPlayback = () => {
      if (!isInViewport) {
        return;
      }

      video.play()?.catch(() => undefined);
    };

    const updatePlayback = (isVisible: boolean) => {
      isInViewport = isVisible;

      if (isVisible) {
        startPlayback();
        return;
      }

      video.pause();
    };

    const isVisibleOnInitialPaint = () => {
      const bounds = video.getBoundingClientRect();

      return (
        bounds.bottom > 0 &&
        bounds.right > 0 &&
        bounds.top < window.innerHeight &&
        bounds.left < window.innerWidth
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => updatePlayback(entry.isIntersecting),
      { root: null, threshold: 0 },
    );

    observer.observe(video);
    video.addEventListener("canplay", startPlayback);
    updatePlayback(isVisibleOnInitialPaint());

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", startPlayback);
      video.pause();
    };
  }, [playbackEnabled, playbackMode]);

  return (
    <video
      ref={videoRef}
      className="project-video"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload={playbackMode === "immediate" ? "auto" : "metadata"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      tabIndex={decorative ? -1 : undefined}
    >
      Your browser does not support the project preview video. {label}
    </video>
  );
}
