"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type WheelEvent,
} from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons/arrow-icons";
import { CertificateCard } from "@/components/certificate/certificate-card";
import { CertificatePreview } from "@/components/certificate/certificate-preview";
import type { Certificate } from "@/types/certificate";

type CertificateSliderProps = {
  certificates: Certificate[];
};

export function CertificateSlider({
  certificates,
}: CertificateSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef(0);
  const programmaticIndexRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewCertificate, setPreviewCertificate] =
    useState<Certificate | null>(null);

  const commitActiveIndex = useCallback((index: number) => {
    if (index === activeIndexRef.current) {
      return;
    }

    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const scrollToIndex = useCallback(
    (requestedIndex: number, behavior?: ScrollBehavior) => {
      const track = trackRef.current;

      if (!track || certificates.length === 0) {
        return;
      }

      const cards = Array.from(
        track.querySelectorAll<HTMLElement>(".certificate-card"),
      );
      const index = Math.min(
        Math.max(requestedIndex, 0),
        certificates.length - 1,
      );
      const card = cards[index];

      if (!card) {
        return;
      }

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const left =
        card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;

      programmaticIndexRef.current = index;
      commitActiveIndex(index);
      track.scrollTo({
        left,
        behavior: behavior ?? (reducedMotion ? "auto" : "smooth"),
      });
    },
    [certificates.length, commitActiveIndex],
  );

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>(".certificate-card"),
    );
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    const programmaticIndex = programmaticIndexRef.current;

    if (programmaticIndex !== null) {
      const targetCard = cards[programmaticIndex];

      if (targetCard) {
        const targetCenter =
          targetCard.offsetLeft + targetCard.offsetWidth / 2;

        if (Math.abs(targetCenter - trackCenter) <= 2) {
          programmaticIndexRef.current = null;
        }
      }

      return;
    }

    let closestIndex = activeIndexRef.current;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - trackCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    commitActiveIndex(closestIndex);
  }, [commitActiveIndex]);

  const requestActiveUpdate = useCallback(() => {
    if (scrollFrameRef.current) {
      return;
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = 0;
      updateActiveIndex();
    });
  }, [updateActiveIndex]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const centerActiveCard = () => {
      scrollToIndex(activeIndexRef.current, "auto");
    };
    const resizeObserver = new ResizeObserver(centerActiveCard);
    resizeObserver.observe(track);
    const initialFrame = window.requestAnimationFrame(centerActiveCard);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(initialFrame);

      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [scrollToIndex]);

  const scrollByCard = (direction: -1 | 1) => {
    scrollToIndex(activeIndexRef.current + direction);
  };

  const handleTrackKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    }
  };

  const handleTrackWheel = (event: WheelEvent<HTMLDivElement>) => {
    programmaticIndexRef.current = null;

    if (
      event.shiftKey &&
      Math.abs(event.deltaY) > Math.abs(event.deltaX)
    ) {
      event.preventDefault();
      event.currentTarget.scrollBy({
        left: event.deltaY,
        behavior: "auto",
      });
    }
  };

  return (
    <div className="certificate-slider reveal__item">
      <div
        className="certificate-slider__track"
        ref={trackRef}
        role="region"
        aria-label="Certificates"
        aria-roledescription="carousel"
        tabIndex={0}
        onScroll={requestActiveUpdate}
        onKeyDown={handleTrackKeyDown}
        onWheel={handleTrackWheel}
        onPointerDown={() => {
          programmaticIndexRef.current = null;
        }}
      >
        {certificates.map((certificate, index) => (
          <CertificateCard
            certificate={certificate}
            isActive={index === activeIndex}
            key={certificate.id}
            onPreview={setPreviewCertificate}
          />
        ))}
      </div>

      <div className="certificate-slider__navigation">
        <p className="certificate-slider__index" aria-live="polite">
          {activeIndex + 1} / {certificates.length}
        </p>

        <div
          className="certificate-slider__dots"
          role="group"
          aria-label="Choose certificate"
        >
          {certificates.map((certificate, index) => (
            <button
              type="button"
              key={certificate.id}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to certificate ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="certificate-slider__arrows">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous certificates"
          >
            <ArrowLeftIcon className="arrow-icon" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={activeIndex === certificates.length - 1}
            aria-label="Next certificates"
          >
            <ArrowRightIcon className="arrow-icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      <CertificatePreview
        certificate={previewCertificate}
        onClose={() => setPreviewCertificate(null)}
      />
    </div>
  );
}
