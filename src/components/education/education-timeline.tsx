"use client";

import { EducationItem } from "@/components/education/education-item";
import { SectionAtmosphere } from "@/components/layout/section-atmosphere";
import { Reveal, StaggerGroup, StaggerItem, motionTokens } from "@/components/motion/reveal";
import { motion, useReducedMotion } from "motion/react";
import type { EducationSection } from "@/types/education";

type EducationTimelineProps = {
  education: EducationSection;
};

export function EducationTimeline({
  education,
}: EducationTimelineProps) {
  const reduced = useReducedMotion();
  return (
    <section
      className="section education"
      id="education"
      aria-labelledby="education-title"
    >
      <SectionAtmosphere tone="mist" />
      <div className="section-container education__container">
        <Reveal className="section-heading education__heading" as="header" distance={motionTokens.headingDistance}>
          <p className="section-kicker">{education.label}</p>
          <h2 id="education-title">{education.title}</h2>
          <p>{education.subtitle}</p>
        </Reveal>

        <div className="education-timeline">
          <motion.span
            className="education-timeline__motion-line"
            aria-hidden="true"
            initial={reduced ? false : { scaleY: 0 }}
            whileInView={reduced ? undefined : { scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <StaggerGroup
            className="education-timeline__list"
            aria-label="Education milestones"
            as="ol"
          >
            {education.items.map((item) => (
              <StaggerItem as="li" key={`${item.institution}-${item.startYear}`} distance={motionTokens.paragraphDistance}>
                <EducationItem item={item} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
