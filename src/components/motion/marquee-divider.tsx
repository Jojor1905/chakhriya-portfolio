"use client";

import { useEffect, useRef } from "react";

const marqueeItems = [
  "UX/UI Design",
  "Product Thinking",
  "AI-Assisted Development",
  "Creative Technology",
];

function MarqueeGroup() {
  return (
    <div className="motion-marquee__group">
      {Array.from({ length: 3 }, (_, repetition) =>
        marqueeItems.map((item) => (
          <span className="motion-marquee__item" key={`${repetition}-${item}`}>
            <span>{item}</span>
            <span className="motion-marquee__separator">·</span>
          </span>
        )),
      )}
    </div>
  );
}

export function MarqueeDivider() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          marquee.dataset.marqueeActive = "";
          return;
        }

        delete marquee.dataset.marqueeActive;
      },
      { threshold: 0.01 },
    );

    observer.observe(marquee);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="motion-marquee" aria-hidden="true" ref={marqueeRef}>
      <div className="motion-marquee__track">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
