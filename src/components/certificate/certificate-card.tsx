import Image from "next/image";
import type { Certificate } from "@/types/certificate";

type CertificateCardProps = {
  certificate: Certificate;
  isActive: boolean;
  onPreview: (certificate: Certificate) => void;
};

export function CertificateCard({
  certificate,
  isActive,
  onPreview,
}: CertificateCardProps) {
  return (
    <article
      className="certificate-card"
      data-active={isActive ? "" : undefined}
      aria-current={isActive ? "true" : undefined}
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
            sizes="(max-width: 620px) 84vw, (max-width: 900px) 78vw, 60vw"
          />
        </button>
      </div>
    </article>
  );
}
