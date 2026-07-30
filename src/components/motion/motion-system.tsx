"use client";

import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const motionTokens = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: 0.72,
  stagger: 0.09,
  headingDistance: 24,
  paragraphDistance: 18,
  cardDistance: 24,
  sideDistance: 24,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  distance?: number;
  delay?: number;
  axis?: "x" | "y";
  scale?: number;
  as?: "div" | "section" | "aside" | "header" | "article" | "footer";
};

export function Reveal({ children, distance = motionTokens.paragraphDistance, delay = 0, axis = "y", scale, as = "div", ...props }: RevealProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [ready, setReady] = useState(false);
  const Component = motion[as];
  const initial = axis === "x" ? { opacity: 0, x: distance, scale } : { opacity: 0, y: distance, scale };
  const visible = axis === "x" ? { opacity: 1, x: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 };

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return <Component ref={ref} {...props} initial={false} animate={reduced || !ready ? visible : inView ? visible : initial} transition={{ duration: motionTokens.duration, delay, ease: motionTokens.ease }}>{children}</Component>;
}

const groupVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: motionTokens.stagger, delayChildren: 0.04 } } };

export function StaggerGroup({ children, className, delay = 0.04, as = "div", "aria-label": ariaLabel }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "ol"; "aria-label"?: string }) {
  const reduced = useReducedMotion();
  const divRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const divInView = useInView(divRef, { once: true, amount: 0.2 });
  const listInView = useInView(listRef, { once: true, amount: 0.2 });
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);
  const variants = { ...groupVariants, visible: { transition: { staggerChildren: motionTokens.stagger, delayChildren: delay } } };
  const animate = reduced || !ready || divInView || listInView ? "visible" : "hidden";

  return as === "ol" ? <motion.ol ref={listRef} className={className} aria-label={ariaLabel} variants={variants} initial={false} animate={animate}>{children}</motion.ol> : <motion.div ref={divRef} className={className} aria-label={ariaLabel} variants={variants} initial={false} animate={animate}>{children}</motion.div>;
}

export function StaggerItem({ children, className, distance = motionTokens.cardDistance, axis = "y", as = "div" }: { children: ReactNode; className?: string; distance?: number; axis?: "x" | "y"; as?: "div" | "li" }) {
  const hidden = axis === "x" ? { opacity: 0, x: distance } : { opacity: 0, y: distance };
  const visible = axis === "x" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };
  const variants = { hidden, visible: { ...visible, transition: { duration: motionTokens.duration, ease: motionTokens.ease } } };
  return as === "li" ? <motion.li className={className} variants={variants}>{children}</motion.li> : <motion.div className={className} variants={variants}>{children}</motion.div>;
}
