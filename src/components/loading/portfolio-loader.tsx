"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { CloudCurtainScene, type CloudCurtainPhase } from "@/components/cloud-lab/cloud-lab";
import styles from "./portfolio-loader.module.css";

const SESSION_KEY = "portfolio-loader-seen";
const ENTRANCE_MS = 460;
const SETTLE_MS = 600;
const OPENING_MS = 1050;
const HAZE_EXIT_MS = 360;
const RETURN_OPENING_MS = 260;
const REDUCED_OPENING_MS = 180;
const FALLBACK_MS = 3500;

export function PortfolioLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<CloudCurtainPhase>("entering");
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

    let waitingTimer = 0;
    let openingTimer = 0;
    let completeTimer = 0;
    let fallbackTimer = 0;
    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      window.clearTimeout(waitingTimer);
      window.clearTimeout(openingTimer);
      window.clearTimeout(fallbackTimer);
      setPhase("complete");
      completeTimer = window.setTimeout(() => setVisible(false), reducedMotion ? 120 : HAZE_EXIT_MS);
    };

    const entrance = seen || reducedMotion ? 40 : ENTRANCE_MS;
    const settle = seen || reducedMotion ? 0 : SETTLE_MS;
    const opening = seen ? RETURN_OPENING_MS : reducedMotion ? REDUCED_OPENING_MS : OPENING_MS;

    waitingTimer = window.setTimeout(() => setPhase("waiting"), entrance);
    openingTimer = window.setTimeout(() => setPhase("opening"), entrance + settle);
    const exitTimer = window.setTimeout(finish, entrance + settle + opening);
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
      window.clearTimeout(waitingTimer);
      window.clearTimeout(openingTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(completeTimer);
      reduceQuery.removeEventListener("change", onMotionChange);
      mobileQuery.removeEventListener("change", onMobileChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={styles.loader}
      data-phase={phase}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className={styles.sky} aria-hidden="true" />
      <div className={styles.canvas} aria-hidden="true">
        {webgl && (
          <Canvas
            camera={{ position: [0, 0.08, 9], fov: 32, near: 0.1, far: 40 }}
            dpr={mobile || reduced ? [1, 1.25] : [1, 1.5]}
            frameloop={reduced || !pageVisible ? "demand" : "always"}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          >
            <CloudCurtainScene phase={phase} mobile={mobile} reducedMotion={reduced} />
          </Canvas>
        )}
      </div>
      <span className={styles.haze} aria-hidden="true" />
      <p className={styles.label}>Loading portfolio</p>
    </div>
  );
}
