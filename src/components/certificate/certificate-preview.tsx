"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import type { Certificate } from "@/types/certificate";

type CertificatePreviewProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

export function CertificatePreview({
  certificate,
  onClose,
}: CertificatePreviewProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !certificate) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!dialog.open) {
      dialog.showModal();
    }

    return () => {
      document.body.style.overflow = previousOverflow;

      if (dialog.open) {
        dialog.close();
      }
    };
  }, [certificate]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  };

  return (
    <dialog
      className="certificate-preview"
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={onClose}
      aria-label={
        certificate
          ? `Certificate preview: ${certificate.title}`
          : "Certificate preview"
      }
    >
      {certificate ? (
        <div className="certificate-preview__content">
          <div className="certificate-preview__header">
            <button
              className="certificate-preview__close"
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close certificate preview"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="certificate-preview__image-frame">
            <Image
              src={certificate.image}
              alt={certificate.imageAlt}
              fill
              sizes="90vw"
              className="certificate-preview__image"
            />
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
