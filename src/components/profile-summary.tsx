import { Reveal } from "@/components/motion/reveal";
import { SectionAtmosphere } from "@/components/layout/section-atmosphere";
import type { Dictionary } from "@/content/types";

type ProfileSummaryProps = {
  items: Dictionary["profileSummary"];
};

export function ProfileSummary({ items }: ProfileSummaryProps) {
  return (
    <Reveal
      className="profile-summary"
      aria-label="Profile summary"
      as="aside"
    >
      <SectionAtmosphere tone="quiet" />
      <div className="section-container">
        <dl>
          {items.map((item) => (
            <div
              className="profile-summary__item reveal__item"
              key={item.label}
            >
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}
