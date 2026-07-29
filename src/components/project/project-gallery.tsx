"use client";

import { useRef, useState } from "react";
import { ProjectGrid } from "@/components/project/project-grid";
import { ProjectModal } from "@/components/project/project-modal";
import type { Project } from "@/types/project";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedProject(project);
  };

  const handleClose = (showRestoredFocus: boolean) => {
    setSelectedProject(null);
    window.requestAnimationFrame(() => {
      const trigger = triggerRef.current;

      if (!trigger) {
        return;
      }

      if (!showRestoredFocus) {
        trigger.dataset.focusRestored = "pointer";
      }

      trigger.focus();
    });
  };

  return (
    <>
      <ProjectGrid
        projects={projects}
        onProjectSelect={handleSelect}
        videoPlaybackEnabled={!selectedProject}
      />
      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={handleClose} />
      ) : null}
    </>
  );
}
