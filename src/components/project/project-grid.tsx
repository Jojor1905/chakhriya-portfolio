"use client";

import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
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
    <StaggerGroup className="project-grid" delay={0.02}>
      {projects.map((project) => (
        <StaggerItem key={project.slug}>
          <ProjectCard
            project={project}
            returnTo={returnTo}
            onSelect={onProjectSelect}
            videoPlaybackEnabled={videoPlaybackEnabled}
          />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
