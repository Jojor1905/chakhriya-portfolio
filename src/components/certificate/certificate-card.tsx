import Image from "next/image";
import type { Certificate } from "@/types/certificate";

type CertificateCardProps = {
  certificate: Certificate;
  isActive: boolean;
  position: "active" | "previous" | "next" | "hidden";
  onPreview: (certificate: Certificate) => void;
};

export function CertificateCard({
  certificate,
  isActive,
  position,
  onPreview,
}: CertificateCardProps) {
  return (
    <article
      className="certificate-card"
      data-active={isActive ? "" : undefined}
      data-position={position}
      aria-current={isActive ? "true" : undefined}
      aria-hidden={!isActive}
      aria-label={certificate.title}
    >
      <div className="certificate-card__image-frame">
        <button
          className="certificate-card__preview"
          type="button"
          onClick={() => onPreview(certificate)}
          disabled={!isActive}
          aria-label={`Preview ${certificate.title}`}
        >
          <Image
            className="certificate-card__image"
            src={certificate.image}
            alt={certificate.imageAlt}
            fill
            draggable={false}
            sizes="(max-width: 620px) 88vw, (max-width: 1023px) 76vw, 68vw"
          />
        </button>
      </div>
    </article>
  );
}
