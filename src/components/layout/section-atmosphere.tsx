"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export type SectionAtmosphereTone = "mist" | "structured" | "quiet" | "airy" | "dusk";

export function SectionAtmosphere({ tone }: { tone: SectionAtmosphereTone }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [compact, setCompact] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const travel = (tone === "quiet" ? 20 : 56) * (compact ? 0.5 : 1);
  const horizontalTravel = (tone === "quiet" ? 12 : 28) * (compact ? 0.5 : 1);
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-travel / 2, travel / 2]);
  const x = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [horizontalTravel / 2, -horizontalTravel / 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [1, 1, 1] : [0.72, 1, 0.76]);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className={`section-atmosphere section-atmosphere--${tone}`} ref={ref} aria-hidden="true">
      <motion.span className="section-atmosphere__sky" style={{ y, x, opacity }} />
      <motion.span className="section-atmosphere__haze" style={{ y, x, opacity }} />
      {tone !== "quiet" && <span className="section-atmosphere__grain" />}
    </div>
  );
}
