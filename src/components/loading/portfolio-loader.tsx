"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./portfolio-loader.module.css";

type PortfolioLoaderProps = {
  children: ReactNode;
};

const MINIMUM_DISPLAY_MS = 1600;
const EXIT_DURATION_MS = 520;
const FALLBACK_TIMEOUT_MS = 4000;

export function PortfolioLoader({ children }: PortfolioLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    const startedAt = performance.now();
    let hasFinished = false;
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;

    const finish = () => {
      if (hasFinished) return;
      hasFinished = true;
      window.clearInterval(progressTimer);

      const remainingTime = Math.max(
        0,
        MINIMUM_DISPLAY_MS - (performance.now() - startedAt),
      );

      exitTimer = window.setTimeout(() => {
        setProgress(100);
        setIsLeaving(true);
        removeTimer = window.setTimeout(() => setIsVisible(false), EXIT_DURATION_MS);
      }, remainingTime);
    };

    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(88, current + 7));
    }, 130);

    const fallbackTimer = window.setTimeout(finish, FALLBACK_TIMEOUT_MS);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <>
      {children}
      {isVisible ? (
        <div
          className={`${styles.loader}${isLeaving ? ` ${styles.leaving}` : ""}`}
          aria-label="Preparing portfolio"
          role="status"
        >
          <div className={styles.haze} aria-hidden="true" />
          <div className={styles.cloudScene} aria-hidden="true">
            <div className={styles.cloudShadow} />
            <div className={styles.cloud}>
              <span className={`${styles.lobe} ${styles.lobeOne}`} />
              <span className={`${styles.lobe} ${styles.lobeTwo}`} />
              <span className={`${styles.lobe} ${styles.lobeThree}`} />
              <span className={`${styles.lobe} ${styles.lobeFour}`} />
              <span className={`${styles.lobe} ${styles.lobeFive}`} />
              <span className={styles.base} />
              <span className={styles.highlight} />
            </div>
          </div>
          <p className={styles.label}>
            Preparing the atmosphere <span>{progress}%</span>
          </p>
        </div>
      ) : null}
    </>
  );
}
