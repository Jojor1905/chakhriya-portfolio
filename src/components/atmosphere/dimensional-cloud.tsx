"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./dimensional-cloud.module.css";

type DimensionalCloudProps = {
  id: string;
  className?: string;
  size: string;
  aspectRatio: string;
  opacity: number;
  depth?: number;
  pointer?: number;
  variant?: "mist" | "dusk";
  mobile?: boolean;
};

type CloudStyle = CSSProperties & {
  "--cloud-size": string;
  "--cloud-aspect-ratio": string;
  "--cloud-opacity": number;
};

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(value, minimum), maximum);

export function DimensionalCloud({
  id,
  className,
  size,
  aspectRatio,
  opacity,
  depth = 0.5,
  pointer = 8,
  variant = "mist",
  mobile = true,
}: DimensionalCloudProps) {
  const cloudRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cloud = cloudRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!cloud || reducedMotion.matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let isActive = !document.hidden;

    const update = () => {
      frame = 0;
      if (!isActive) return;

      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      const bounds = cloud.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const cloudCenter = bounds.top + bounds.height / 2;
      const scrollProgress = clamp(
        (cloudCenter - viewportCenter) / window.innerHeight,
        -1,
        1,
      );

      cloud.style.setProperty(
        "--cloud-scroll-y",
        `${scrollProgress * depth * -12}px`,
      );
      cloud.style.setProperty(
        "--cloud-pointer-x",
        `${finePointer.matches ? current.x * pointer : 0}px`,
      );
      cloud.style.setProperty(
        "--cloud-pointer-y",
        `${finePointer.matches ? current.y * pointer : 0}px`,
      );

      if (
        finePointer.matches &&
        (Math.abs(target.x - current.x) > 0.01 ||
          Math.abs(target.y - current.y) > 0.01)
      ) {
        schedule();
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer.matches) return;
      target.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;
      schedule();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isActive = entry.isIntersecting && !document.hidden;
        cloud.dataset.active = String(isActive);
        if (isActive) schedule();
      },
      { rootMargin: "240px 0px" },
    );

    const onVisibilityChange = () => {
      isActive = !document.hidden;
      cloud.dataset.paused = String(!isActive);
      if (isActive) schedule();
    };

    observer.observe(cloud);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    schedule();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [depth, pointer]);

  const cloudStyle: CloudStyle = {
    "--cloud-size": size,
    "--cloud-aspect-ratio": aspectRatio,
    "--cloud-opacity": opacity,
  };

  return (
    <span
      ref={cloudRef}
      className={`${styles.placement}${className ? ` ${className}` : ""}${
        mobile ? "" : " cloud--desktop-only"
      }`}
      data-cloud-id={id}
      style={cloudStyle}
      aria-hidden="true"
    >
      <span className={`${styles.scene} ${variant === "dusk" ? styles.dusk : ""}`}>
        <span className={styles.haze} />
        <span className={styles.shadow} />
        <span className={`${styles.lobe} ${styles.lobeOne}`} />
        <span className={`${styles.lobe} ${styles.lobeTwo}`} />
        <span className={`${styles.lobe} ${styles.lobeThree}`} />
        <span className={`${styles.lobe} ${styles.lobeFour}`} />
        <span className={`${styles.lobe} ${styles.lobeFive}`} />
        <span className={styles.base} />
        <span className={styles.highlight} />
      </span>
    </span>
  );
}
