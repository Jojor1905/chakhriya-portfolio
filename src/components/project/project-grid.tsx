import type { Project } from "@/types/project";
import { ProjectCard } from "./project-card";

type ProjectGridProps = {
  projects: Project[];
  returnTo?: string;
  onProjectSelect?: (project: Project, trigger: HTMLButtonElement) => void;
  videoPlaybackEnabled?: boolean;
};

export function ProjectGrid({
  projects,
  returnTo = "/",
  onProjectSelect,
  videoPlaybackEnabled = true,
}: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          returnTo={returnTo}
          onSelect={onProjectSelect}
          videoPlaybackEnabled={videoPlaybackEnabled}
        />
      ))}
    </div>
  );
}
