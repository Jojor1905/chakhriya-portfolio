"use client";

import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons/arrow-icons";
import { CertificateCard } from "@/components/certificate/certificate-card";
import { CertificatePreview } from "@/components/certificate/certificate-preview";
import type { Certificate } from "@/types/certificate";

type CertificateSliderProps = {
  certificates: Certificate[];
};

type CertificatePosition = "active" | "previous" | "next" | "hidden";

function getCertificatePosition(
  index: number,
  activeIndex: number,
  certificateCount: number,
): CertificatePosition {
  if (index === activeIndex) {
    return "active";
  }

  if (certificateCount < 2) {
    return "hidden";
  }

  if (index === (activeIndex - 1 + certificateCount) % certificateCount) {
    return "previous";
  }

  if (index === (activeIndex + 1) % certificateCount) {
    return "next";
  }

  return "hidden";
}

export function CertificateSlider({
  certificates,
}: CertificateSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const swipeRef = useRef<{ pointerId: number; startX: number } | null>(null);
  const dragOffsetRef = useRef(0);
  const suppressClickRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [previewCertificate, setPreviewCertificate] =
    useState<Certificate | null>(null);

  const goToIndex = useCallback((requestedIndex: number) => {
    if (certificates.length === 0) {
      return;
    }

    setActiveIndex(
      (requestedIndex + certificates.length) % certificates.length,
    );
  }, [certificates.length]);

  const moveBy = (direction: -1 | 1) => {
    goToIndex(activeIndex + direction);
  };

  const handleTrackKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveBy(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveBy(1);
    }
  };

  const resetDrag = () => {
    swipeRef.current = null;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    setIsDragging(false);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      !event.isPrimary ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return;
    }

    swipeRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
    };
    suppressClickRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const swipe = swipeRef.current;

    if (!swipe || swipe.pointerId !== event.pointerId) {
      return;
    }

    const maxOffset = Math.min(event.currentTarget.clientWidth * 0.14, 96);
    const nextOffset = Math.max(
      -maxOffset,
      Math.min(maxOffset, event.clientX - swipe.startX),
    );

    dragOffsetRef.current = nextOffset;
    setDragOffset(nextOffset);

    if (Math.abs(nextOffset) > 6) {
      setIsDragging(true);
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const swipe = swipeRef.current;

    if (!swipe || swipe.pointerId !== event.pointerId) {
      return;
    }

    const completedOffset = dragOffsetRef.current;
    const swipeThreshold = Math.max(
      36,
      Math.min(event.currentTarget.clientWidth * 0.08, 72),
    );

    suppressClickRef.current = Math.abs(completedOffset) > 8;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    resetDrag();

    if (Math.abs(completedOffset) >= swipeThreshold) {
      moveBy(completedOffset < 0 ? 1 : -1);
    }
  };

  const trackStyle = {
    "--certificate-drag-offset": `${dragOffset}px`,
  } as CSSProperties;

  return (
    <div className="certificate-slider reveal__item">
      <div
        className="certificate-slider__track"
        ref={trackRef}
        role="region"
        aria-label="Certificates"
        aria-roledescription="carousel"
        tabIndex={0}
        data-dragging={isDragging ? "true" : undefined}
        style={trackStyle}
        onKeyDown={handleTrackKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={resetDrag}
        onClickCapture={(event) => {
          if (suppressClickRef.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClickRef.current = false;
          }
        }}
      >
        {certificates.map((certificate, index) => {
          const position = getCertificatePosition(
            index,
            activeIndex,
            certificates.length,
          );

          return (
            <CertificateCard
              certificate={certificate}
              isActive={position === "active"}
              position={position}
              key={certificate.id}
              onPreview={setPreviewCertificate}
            />
          );
        })}
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
              onClick={() => goToIndex(index)}
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
            onClick={() => moveBy(-1)}
            disabled={certificates.length < 2}
            aria-label="Previous certificate"
          >
            <ArrowLeftIcon className="arrow-icon" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => moveBy(1)}
            disabled={certificates.length < 2}
            aria-label="Next certificate"
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
