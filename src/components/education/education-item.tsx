import Image from "next/image";
import type { EducationItem as EducationItemData } from "@/types/education";

type EducationItemProps = {
  item: EducationItemData;
};

export function EducationItem({
  item,
}: EducationItemProps) {
  const period = `${item.startYear} – ${
    item.current ? "Present" : item.endYear
  }`;

  return (
    <li className="education-timeline__item">
      <div className="education-timeline__content">
        <p className="education-timeline__period">{period}</p>
        <div className="education-timeline__institution education-institution">
          <Image
            className={`education-timeline__logo education-timeline__logo--${item.logoVariant}`}
            src={item.logo}
            alt={item.logoAlt}
            width={item.logoWidth}
            height={item.logoHeight}
          />
          <div>
            <h3>{item.institution}</h3>
            <p className="education-timeline__location">{item.location}</p>
          </div>
        </div>

        <dl className="education-timeline__details">
          {item.programme ? (
            <div>
              <dt>Programme</dt>
              <dd>{item.programme}</dd>
            </div>
          ) : null}
          {item.faculty ? (
            <div>
              <dt>Faculty</dt>
              <dd>{item.faculty}</dd>
            </div>
          ) : null}
          {item.major ? (
            <div>
              <dt>Major</dt>
              <dd>{item.major}</dd>
            </div>
          ) : null}
          <div className="education-timeline__gpa">
            <dt>{item.gpaLabel}</dt>
            <dd>{item.gpa}</dd>
          </div>
        </dl>
      </div>

      <span
        className="education-timeline__dot"
        aria-hidden="true"
      />
    </li>
  );
}
