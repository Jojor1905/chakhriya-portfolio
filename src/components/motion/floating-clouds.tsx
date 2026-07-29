"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  type CSSProperties,
} from "react";

type FloatingCloudConfig = {
  id: string;
  src: string;
  className: string;
  size: string;
  aspectRatio: string;
  opacity: number;
  depth: number;
  pointer: number;
  mobile?: boolean;
};

type FloatingCloudsProps = {
  clouds: readonly FloatingCloudConfig[];
};

type CloudStyle = CSSProperties & {
  "--cloud-size": string;
  "--cloud-aspect-ratio": string;
  "--cloud-opacity": number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

type DimensionalCloudProps = {
  cloud: FloatingCloudConfig;
  cloudRef: (element: HTMLSpanElement | null) => void;
  style: CloudStyle;
};

export function DimensionalCloud({
  cloud,
  cloudRef,
  style,
}: DimensionalCloudProps) {
  return (
    <span
      className={`floating-cloud ${cloud.className}${
        cloud.mobile === false ? " floating-cloud--desktop-only" : ""
      }`}
      data-cloud-id={cloud.id}
      key={cloud.id}
      ref={cloudRef}
      style={style}
    >
      <span className="dimensional-cloud">
        <span className="dimensional-cloud__haze" />
        <span className="dimensional-cloud__shadow" />
        <Image
          alt=""
          className="dimensional-cloud__image"
          fill
          sizes="(max-width: 767px) 0px, (max-width: 1440px) 34vw, 42vw"
          src={cloud.src}
        />
        <span className="dimensional-cloud__highlight" />
      </span>
    </span>
  );
}

export function FloatingClouds({ clouds }: FloatingCloudsProps) {
  const cloudRefs = useRef(new Map<string, HTMLSpanElement>());

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const activeClouds = new Set<string>();
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const pointerTarget = { x: 0, y: 0 };
    const pointerCurrent = { x: 0, y: 0 };
    let frame = 0;
    let isVisible = !document.hidden;

    const render = () => {
      frame = 0;

      if (!isVisible) {
        return;
      }

      pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.08;
      pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.08;

      cloudRefs.current.forEach((element, id) => {
        if (!activeClouds.has(id)) {
          return;
        }

        const cloud = clouds.find((item) => item.id === id);

        if (!cloud) {
          return;
        }

        const bounds = element.getBoundingClientRect();
        const viewportMidpoint = window.innerHeight / 2;
        const cloudMidpoint = bounds.top + bounds.height / 2;
        const scrollProgress = clamp(
          (cloudMidpoint - viewportMidpoint) / window.innerHeight,
          -1,
          1,
        );
        const pointerX = pointerQuery.matches
          ? pointerCurrent.x * cloud.pointer
          : 0;
        const pointerY = pointerQuery.matches
          ? pointerCurrent.y * cloud.pointer
          : 0;
        const scrollY = scrollProgress * cloud.depth * -12;

        element.style.setProperty("--cloud-pointer-x", `${pointerX}px`);
        element.style.setProperty("--cloud-pointer-y", `${pointerY}px`);
        element.style.setProperty("--cloud-scroll-y", `${scrollY}px`);
      });

      if (
        pointerQuery.matches &&
        (Math.abs(pointerTarget.x - pointerCurrent.x) > 0.01 ||
          Math.abs(pointerTarget.y - pointerCurrent.y) > 0.01)
      ) {
        schedule();
      }
    };

    const schedule = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!pointerQuery.matches || !isVisible) {
        return;
      }

      pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
      schedule();
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;

      cloudRefs.current.forEach((element) => {
        if (isVisible) {
          delete element.dataset.cloudPaused;
        } else {
          element.dataset.cloudPaused = "true";
        }
      });

      if (isVisible) {
        schedule();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLSpanElement;

          if (entry.isIntersecting) {
            activeClouds.add(element.dataset.cloudId ?? "");
            element.dataset.cloudActive = "true";
          } else {
            activeClouds.delete(element.dataset.cloudId ?? "");
            delete element.dataset.cloudActive;
          }
        });
        schedule();
      },
      { rootMargin: "240px 0px" },
    );

    cloudRefs.current.forEach((element) => observer.observe(element));
    onVisibilityChange();
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

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [clouds]);

  return (
    <div className="floating-clouds" aria-hidden="true">
      {clouds.map((cloud) => {
        const style: CloudStyle = {
          "--cloud-size": cloud.size,
          "--cloud-aspect-ratio": cloud.aspectRatio,
          "--cloud-opacity": cloud.opacity,
        };

        return (
          <DimensionalCloud
            cloud={cloud}
            cloudRef={(element) => {
              if (element) {
                cloudRefs.current.set(cloud.id, element);
              } else {
                cloudRefs.current.delete(cloud.id);
              }
            }}
            style={style}
            key={cloud.id}
          />
        );
      })}
    </div>
  );
}
