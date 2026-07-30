import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons/arrow-icons";
import { ProjectVideo } from "@/components/project/project-video";
import type { Project } from "@/types/project";

type ProjectCaseStudyProps = {
  project: Project;
  headingId: string;
  videoPlaybackEnabled?: boolean;
  videoPlaybackMode?: "viewport" | "immediate";
};

export function ProjectCaseStudy({
  project,
  headingId,
  videoPlaybackEnabled,
  videoPlaybackMode,
}: ProjectCaseStudyProps) {
  return (
    <>
      <header className="case-study__hero">
        <div className="case-study__title">
          <div>
            <p className="section-kicker">{project.category}</p>
            <h1 id={headingId}>{project.title}</h1>
          </div>
          {project.year ? <p>{project.year}</p> : null}
        </div>
        <p className="case-study__lead">{project.tagline ?? project.summary}</p>
        <div
          className={`case-study__cover${project.coverFrameless ? " case-study__cover--frameless" : ""}`}
        >
          {project.video ? (
            <ProjectVideo
              src={project.video}
              poster={project.coverImage}
              label={`${project.title} project preview`}
              playbackEnabled={videoPlaybackEnabled}
              playbackMode={videoPlaybackMode}
            />
          ) : (
            <Image
              className={`case-study__cover-image case-study__cover-image--${project.mediaFit ?? "cover"}`}
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              sizes="(max-width: 767px) calc(100vw - 40px), 90vw"
            />
          )}
        </div>
      </header>

      <section className="case-study__summary" aria-labelledby={`${headingId}-summary`}>
        <div>
          <p className="section-kicker">Project summary</p>
          <h2 id={`${headingId}-summary`}>
            {project.overviewTitle ?? "A provisional case-study framework."}
          </h2>
          {project.overviewBody ? (
            <p className="case-study__overview-body">{project.overviewBody}</p>
          ) : null}
        </div>
        <div className="case-study__summary-details">
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{project.timeline}</dd>
            </div>
            {project.focus ? (
              <div>
                <dt>Focus</dt>
                <dd>{project.focus}</dd>
              </div>
            ) : null}
            <div>
              <dt>Tools</dt>
              <dd>{project.tools.join(", ")}</dd>
            </div>
          </dl>
          {project.skills?.length ? (
            <ul className="case-study__skill-chips" aria-label={`${project.title} skills`}>
              {project.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : null}
          {project.figmaUrl ? (
            <a
              className="case-study__figma-link"
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                project.figmaAriaLabel ??
                `Open the ${project.title} Figma design in a new tab`
              }
            >
              <Image
                className="case-study__figma-icon"
                src="/Image/icons/figma.svg"
                alt=""
                aria-hidden="true"
                width={54}
                height={80}
              />
              <span>View Figma Design</span>
              <ArrowUpRightIcon className="case-study__figma-arrow arrow-icon" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </section>

      <div className="case-study__sections">
        {project.sections.map((section, index) => {
          const sectionId = `${headingId}-section-${index}`;

          return (
            <section key={section.title} aria-labelledby={sectionId}>
              <p className="case-study__index">
                {String(index + 1).padStart(2, "0")}
                {project.overviewTitle ? " /" : null}
              </p>
              <div>
                <h2 id={sectionId}>{section.title}</h2>
                {section.body ? <p>{section.body}</p> : null}
                {section.steps ? (
                  <ol className="case-study__workflow">
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                ) : null}
                {section.images ? (
                  <div className="case-study__image-stack">
                    {section.images.map((image) => (
                      <figure className="case-study__image-wrapper" key={image.src}>
                        <Image
                          className="case-study__image"
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 120px), 60vw"
                        />
                        {image.caption ? (
                          <figcaption className="case-study__image-caption">
                            {image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                ) : null}
                {section.subsections ? (
                  <div className="case-study__subsections">
                    {section.subsections.map((subsection) => (
                      <section key={subsection.title}>
                        <h3>{subsection.title}</h3>
                        <p>{subsection.body}</p>
                        {subsection.steps ? (
                          <ol className="case-study__workflow">
                            {subsection.steps.map((step) => (
                              <li key={step}>{step}</li>
                            ))}
                          </ol>
                        ) : null}
                        {subsection.points ? (
                          <ul>
                            {subsection.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : null}
                        {subsection.promptGroups ? (
                          <div className="case-study__prompt-groups">
                            {subsection.promptGroups.map((group) => (
                              <div key={group.title}>
                                <h4>{group.title}</h4>
                                <ul>
                                  {group.points.map((point) => (
                                    <li key={point}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : null}
                        {subsection.additionalBody ? (
                          <p>{subsection.additionalBody}</p>
                        ) : null}
                      </section>
                    ))}
                  </div>
                ) : null}
                {section.points ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                {section.personas ? (
                  <div className="case-study__persona-grid">
                    {section.personas.map((persona) => (
                      <section key={persona.title}>
                        <h3>{persona.title}</h3>
                        <p>{persona.body}</p>
                      </section>
                    ))}
                  </div>
                ) : null}
                {section.impactPoints ? (
                  <div className="case-study__impact-list">
                    {section.impactPoints.map((point) => (
                      <section key={point.title}>
                        <h3>{point.title}</h3>
                        <p>{point.body}</p>
                      </section>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
