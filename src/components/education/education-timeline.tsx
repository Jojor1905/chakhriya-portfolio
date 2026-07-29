import { EducationItem } from "@/components/education/education-item";
import { SectionAtmosphere } from "@/components/layout/section-atmosphere";
import { Reveal } from "@/components/motion/reveal";
import type { EducationSection } from "@/types/education";

type EducationTimelineProps = {
  education: EducationSection;
};

export function EducationTimeline({
  education,
}: EducationTimelineProps) {
  return (
    <Reveal
      className="section education"
      id="education"
      aria-labelledby="education-title"
      stagger
    >
      <SectionAtmosphere tone="mist" />
      <div className="section-container education__container">
        <header className="section-heading education__heading reveal__heading">
          <p className="section-kicker">{education.label}</p>
          <h2 id="education-title">{education.title}</h2>
          <p>{education.subtitle}</p>
        </header>

        <div className="education-timeline">
          <ol
            className="education-timeline__list"
            aria-label="Education milestones"
          >
            {education.items.map((item) => (
              <EducationItem
                item={item}
                key={`${item.institution}-${item.startYear}`}
              />
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}
