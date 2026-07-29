import Image from "next/image";
import type { SkillGroup } from "@/types/skill";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <article className="skills__card reveal__item">
      <h3>{group.title}</h3>
      <p>{group.description}</p>

      <div className="skill-card__sections">
        {group.sections.map((section) => (
          <section
            className="skill-card__section"
            aria-label={section.title}
            key={section.title}
          >
            <h4>{section.title}</h4>

            {section.iconItems && (
              <ul
                className="skill-card__icons"
                aria-label={`${section.title} tools`}
              >
                {section.iconItems.map((item) => (
                  <li
                    className="skill-card__icon-item reveal__icon"
                    key={item.name}
                  >
                    <span className="skill-card__icon-frame">
                      <Image
                        className="skill-card__icon"
                        src={item.icon}
                        alt={item.alt}
                        width={36}
                        height={36}
                        unoptimized
                      />
                    </span>
                    <span className="skill-card__icon-label">{item.name}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.textItems && (
              <ul
                className="skill-card__chips"
                aria-label={`${section.title} text skills`}
              >
                {section.textItems.map((item) => (
                  <li
                    className={`skill-card__chip skill-card__chip--${item.type}`}
                    key={item.name}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
