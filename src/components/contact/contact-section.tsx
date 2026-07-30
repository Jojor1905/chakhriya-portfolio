import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons/arrow-icons";
import { SectionAtmosphere } from "@/components/layout/section-atmosphere";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { contactDetails } from "@/content/contact";
import type { Dictionary } from "@/content/types";

type ContactSectionProps = {
  contact: Dictionary["contact"];
  footer: Dictionary["footer"];
};

export function ContactSection({ contact, footer }: ContactSectionProps) {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <SectionAtmosphere tone="dusk" />
      <div className="section-container">
        <div className="contact-section__top">
          <Reveal className="contact-section__heading" as="header" distance={24}>
            <p className="section-kicker">{contact.kicker}</p>
            <h2 id="contact-title">{contact.title}</h2>
            <p>{contact.body}</p>
          </Reveal>

          <StaggerGroup className="contact-section__actions" delay={0.08}>
            <StaggerItem distance={18}>
              <a
              className="contact-action"
              href={`mailto:${contactDetails.email}`}
              aria-label="Email Chakhriya Korada"
            >
              <Image
                className="contact-action__icon"
                src="/Image/icons/gmail.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
              <span className="contact-action__content">
                <span className="contact-action__label">Gmail</span>
                <span className="contact-action__detail">
                  {contactDetails.email}
                </span>
              </span>
              <ArrowUpRightIcon className="contact-action__arrow arrow-icon" aria-hidden="true" />
              </a>
            </StaggerItem>

            <StaggerItem distance={18}>
              <a
              className="contact-action"
              href={contactDetails.phoneHref}
              aria-label="Call Chakhriya Korada"
            >
              <svg
                className="contact-action__icon contact-action__phone-icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M6.6 3.75h2.76l1.38 4.14-1.9 1.9a15.38 15.38 0 0 0 5.3 5.3l1.9-1.9 4.14 1.38v2.76a1.92 1.92 0 0 1-2.08 1.91A16.5 16.5 0 0 1 4.69 5.83 1.92 1.92 0 0 1 6.6 3.75Z" />
              </svg>
              <span className="contact-action__content">
                <span className="contact-action__label">Phone</span>
                <span className="contact-action__detail">
                  {contactDetails.phone}
                </span>
              </span>
              <ArrowUpRightIcon className="contact-action__arrow arrow-icon" aria-hidden="true" />
              </a>
            </StaggerItem>

            <StaggerItem distance={18}>
              <a
              className="contact-action"
              href={contactDetails.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Chakhriya Korada’s LinkedIn profile in a new tab"
            >
              <Image
                className="contact-action__icon contact-action__linkedin-icon"
                src="/Image/icons/linkedin.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
              <span className="contact-action__content">
                <span className="contact-action__label">LinkedIn</span>
                <span className="contact-action__detail">View my profile</span>
              </span>
              <ArrowUpRightIcon className="contact-action__arrow arrow-icon" aria-hidden="true" />
              </a>
            </StaggerItem>

            <StaggerItem distance={18}>
              <a
                className="contact-action"
                href={contactDetails.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Chakhriya Korada’s GitHub profile"
              >
                <Image
                  className="contact-action__icon contact-action__github-icon"
                  src="/Image/icons/github.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
                <span className="contact-action__content">
                  <span className="contact-action__label">GitHub</span>
                  <span className="contact-action__detail">View my projects</span>
                </span>
                <ArrowUpRightIcon className="contact-action__arrow arrow-icon" aria-hidden="true" />
              </a>
            </StaggerItem>
          </StaggerGroup>
        </div>

        <Reveal className="contact-section__footer" as="footer" distance={18} delay={0.14}>
          <div className="contact-section__footer-top">
            <a className="contact-section__back-to-top" href="#top">
              {footer.backToTop} <ArrowUpRightIcon className="arrow-icon" aria-hidden="true" />
            </a>
          </div>
          <div className="contact-section__footer-meta-row">
            <span className="contact-section__monogram" aria-hidden="true">
              CK
            </span>
            <div className="contact-section__footer-meta">
              <p>{footer.note}</p>
              <p>{footer.location}</p>
              <p>{footer.status}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
