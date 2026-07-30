import Image from "next/image";
import Link from "next/link";
import { ProjectVideo } from "@/components/project/project-video";
import { getSafeInternalPath } from "@/lib/navigation";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  returnTo?: string;
  onSelect?: (project: Project, trigger: HTMLButtonElement) => void;
  videoPlaybackEnabled?: boolean;
};

export function ProjectCard({
  project,
  returnTo = "/",
  onSelect,
  videoPlaybackEnabled = true,
}: ProjectCardProps) {
  const safeReturnTo = getSafeInternalPath(returnTo);

  const content = (
    <>
      <div className="project-card__media">
        {project.video ? (
          <ProjectVideo
            src={project.video}
            poster={project.coverImage}
            label={`${project.title} project preview`}
            decorative
            playbackEnabled={videoPlaybackEnabled}
          />
        ) : (
          <Image
            className={`project-card__image project-card__image--${project.mediaFit ?? "cover"}`}
            src={project.coverImage}
            alt={project.coverAlt}
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="project-card__content">
        {project.contextLabel ? (
          <p className="project-card__context">{project.contextLabel}</p>
        ) : null}
        <div className="project-card__meta">
          <p>{project.category}</p>
          {project.year ? <p>{project.year}</p> : null}
        </div>
        <div className="project-card__title-row">
          <h3>{project.shortTitle ?? project.title}</h3>
          <span className="project-card__arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <p className="project-card__summary">{project.summary}</p>
      </div>
    </>
  );

  return (
    <article className={`project-card project-card--${project.slug}`}>
      {onSelect ? (
        <button
          className="project-card__link"
          type="button"
          onClick={(event) => onSelect(project, event.currentTarget)}
          onBlur={(event) => {
            delete event.currentTarget.dataset.focusRestored;
          }}
          aria-label={`Open ${project.title} project details`}
          aria-haspopup="dialog"
        >
          {content}
        </button>
      ) : (
        <Link
          className="project-card__link"
          href={{
            pathname: `/projects/${project.slug}`,
            query: { from: safeReturnTo },
          }}
          aria-label={`View ${project.title} case study`}
        >
          {content}
        </Link>
      )}
    </article>
  );
}
