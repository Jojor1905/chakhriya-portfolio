"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";

type RevealProps = ComponentPropsWithoutRef<"section"> & {
  as?: "aside" | "div" | "section";
  delay?: number;
  initial?: boolean;
  stagger?: boolean;
  variant?: "fade-in" | "fade-up" | "slide-left" | "slide-right" | "scale-soft";
};

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

export function Reveal({
  as = "section",
  children,
  className,
  delay = 0,
  initial = false,
  stagger = false,
  variant = "fade-up",
  style,
  ...props
}: RevealProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const safeDelay = Math.min(Math.max(delay, 0), 800);
  const revealStyle: RevealStyle = {
    ...style,
    "--reveal-delay": `${safeDelay}ms`,
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || initial || !("IntersectionObserver" in window)) {
      section.dataset.revealState = "visible";
      return;
    }

    const bounds = section.getBoundingClientRect();
    const isAlreadyVisible =
      bounds.top < window.innerHeight && bounds.bottom > 0;

    if (isAlreadyVisible) {
      section.dataset.revealState = "visible";
      return;
    }

    section.dataset.revealState = "waiting";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        section.dataset.revealState = "visible";
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [initial]);

  const classes = [
    "reveal",
    `reveal--${variant}`,
    initial ? "reveal--initial" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const setSectionRef = (element: HTMLElement | null) => {
    sectionRef.current = element;
  };
  const revealProps = {
    className: classes,
    "data-reveal-stagger": stagger ? "" : undefined,
    style: revealStyle,
    ...props,
  };

  if (as === "aside") {
    return (
      <aside ref={setSectionRef} {...revealProps}>
        {children}
      </aside>
    );
  }

  if (as === "div") {
    return (
      <div ref={setSectionRef} {...revealProps}>
        {children}
      </div>
    );
  }

  return (
    <section ref={setSectionRef} {...revealProps}>
      {children}
    </section>
  );
}
