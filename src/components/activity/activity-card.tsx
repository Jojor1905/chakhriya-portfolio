import Image from "next/image";
import Link from "next/link";
import type { Activity } from "@/types/activity";

type ActivityCardProps = {
  activity: Activity;
  index: number;
};

export function ActivityCard({ activity, index }: ActivityCardProps) {
  const cardClassName = [
    "activity-card",
    index % 2 === 1 ? "activity-card--media-right" : "",
    activity.href ? "activity-card--linked" : "",
    "reveal__item",
  ]
    .filter(Boolean)
    .join(" ");
  const imageFit = activity.imageFit ?? "cover";

  return (
    <article className={cardClassName}>
      <div
        className={`activity-card__media${
          activity.image ? "" : " activity-card__media--placeholder"
        }`}
      >
        {activity.image ? (
          <Image
            src={activity.image}
            alt={activity.imageAlt}
            fill
            className={`activity-card__image activity-card__image--${imageFit}`}
            sizes="(max-width: 899px) calc(100vw - 40px), (max-width: 1504px) 46vw, 690px"
          />
        ) : (
          <span className="activity-card__placeholder-label">
            Activity image
          </span>
        )}
      </div>

      <div className="activity-card__content">
        <div className="activity-card__meta">
          <p>{activity.category}</p>
          <p>{activity.year}</p>
        </div>

        <h3>{activity.title}</h3>
        <p className="activity-card__organiser">
          <span>Organiser</span>
          {activity.organiser}
        </p>
        <p className="activity-card__summary">
          {activity.cardSummary ?? activity.summary}
        </p>

        <dl className="activity-card__details">
          <div className="activity-card__detail activity-card__detail--role">
            <dt>Role</dt>
            <dd>{activity.role}</dd>
          </div>
          <div className="activity-card__detail">
            <dt>Contribution</dt>
            <dd>{activity.cardContribution ?? activity.contribution}</dd>
          </div>
          <div className="activity-card__detail">
            <dt>Outcome / Key learning</dt>
            <dd>{activity.cardOutcome ?? activity.outcome}</dd>
          </div>
        </dl>

        {activity.skills?.length ? (
          <ul className="activity-card__skills" aria-label="Skills and methods">
            {activity.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        ) : null}

        {activity.href ? (
          <Link
            className="activity-card__link"
            href={activity.href}
            aria-label={`View activity: ${activity.title}`}
          >
            View activity <span aria-hidden="true">↗</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
