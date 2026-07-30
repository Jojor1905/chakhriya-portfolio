"use client";

import { useEffect, useState, type ReactNode } from "react";

type PortfolioLoaderProps = {
  children: ReactNode;
};

const MINIMUM_DISPLAY_MS = 1400;
const EXIT_DURATION_MS = 520;
const FALLBACK_TIMEOUT_MS = 4000;

export function PortfolioLoader({ children }: PortfolioLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    const startedAt = performance.now();
    let hasFinished = false;

    const finish = () => {
      if (hasFinished) return;
      hasFinished = true;
      window.clearInterval(progressTimer);

      const remainingTime = Math.max(
        0,
        MINIMUM_DISPLAY_MS - (performance.now() - startedAt),
      );

      window.setTimeout(() => {
        setProgress(100);
        setIsLeaving(true);
        window.setTimeout(() => setIsVisible(false), EXIT_DURATION_MS);
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
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <>
      {children}
      {isVisible ? (
        <div
          className={`portfolio-loader${isLeaving ? " portfolio-loader--leaving" : ""}`}
          aria-label="Preparing portfolio"
          role="status"
        >
          <div className="portfolio-loader__haze" aria-hidden="true" />
          <div className="loader-cloud-scene" aria-hidden="true">
            <div className="loader-cloud-shadow" />
            <div className="loader-cloud">
              <span className="loader-cloud__lobe loader-cloud__lobe--one" />
              <span className="loader-cloud__lobe loader-cloud__lobe--two" />
              <span className="loader-cloud__lobe loader-cloud__lobe--three" />
              <span className="loader-cloud__lobe loader-cloud__lobe--four" />
              <span className="loader-cloud__lobe loader-cloud__lobe--five" />
              <span className="loader-cloud__base" />
              <span className="loader-cloud__highlight" />
            </div>
          </div>
          <p className="portfolio-loader__label">
            Preparing the atmosphere <span>{progress}%</span>
          </p>
        </div>
      ) : null}
    </>
  );
}
