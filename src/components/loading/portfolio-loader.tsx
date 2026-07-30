"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { CloudMotion, DEFAULT_CONTROLS } from "@/components/cloud-lab/cloud-lab";
import styles from "./portfolio-loader.module.css";

const SESSION_KEY = "portfolio-loader-seen";
const INTRO_MS = 1300;
const REDUCED_INTRO_MS = 300;
const EXIT_MS = 360;
const FALLBACK_MS = 3500;

export function PortfolioLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [webgl, setWebgl] = useState(false);
  const finished = useRef(false);
  const initialSessionState = useRef<boolean | null>(null);

  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotion = reduceQuery.matches;
    const seen = initialSessionState.current ?? (() => {
      try {
        return window.sessionStorage.getItem(SESSION_KEY) === "true";
      } catch {
        return false;
      }
    })();
    initialSessionState.current = seen;
    const initialStateFrame = window.requestAnimationFrame(() => {
      const canvas = document.createElement("canvas");
      setWebgl(Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl")));
      setReduced(reducedMotion);
      setMobile(mobileQuery.matches);
      setPageVisible(!document.hidden);
    });

    let exitTimer = 0;
    let fallbackTimer = 0;
    let removalTimer = 0;
    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      window.clearTimeout(exitTimer);
      window.clearTimeout(fallbackTimer);
      setLeaving(true);
      removalTimer = window.setTimeout(
        () => setVisible(false),
        reducedMotion ? 160 : EXIT_MS,
      );
    };

    const duration = seen ? 80 : reducedMotion ? REDUCED_INTRO_MS : INTRO_MS;
    exitTimer = window.setTimeout(finish, duration);
    fallbackTimer = window.setTimeout(() => {
      if (finished.current) return;
      finished.current = true;
      setVisible(false);
    }, FALLBACK_MS);

    try {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Storage is optional: the timers above always reveal the page safely.
    }

    const onMotionChange = () => setReduced(reduceQuery.matches);
    const onMobileChange = () => setMobile(mobileQuery.matches);
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    reduceQuery.addEventListener("change", onMotionChange);
    mobileQuery.addEventListener("change", onMobileChange);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(initialStateFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(removalTimer);
      reduceQuery.removeEventListener("change", onMotionChange);
      mobileQuery.removeEventListener("change", onMobileChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${styles.loader}${leaving ? ` ${styles.leaving}` : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className={styles.canvas} aria-hidden="true">
        {webgl && (
          <Canvas
            camera={{ position: [0, 0.08, 9], fov: 32, near: 0.1, far: 40 }}
            dpr={mobile || reduced ? [1, 1.25] : [1, 1.5]}
            frameloop={reduced || !pageVisible ? "demand" : "always"}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          >
            <CloudMotion controls={DEFAULT_CONTROLS} mobile={mobile} reducedMotion={reduced} />
          </Canvas>
        )}
      </div>
      <p className={styles.label}>Loading portfolio</p>
    </div>
  );
}
