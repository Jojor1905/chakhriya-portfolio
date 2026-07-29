"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type SyntheticEvent,
} from "react";
import { ProjectCaseStudy } from "@/components/project/project-case-study";
import type { Project } from "@/types/project";

type ProjectModalProps = {
  project: Project;
  onClose: (showRestoredFocus: boolean) => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    const scrollY = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (!dialog) {
      return;
    }

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    dialog.showModal();
    dialog.focus();
    setIsDialogOpen(true);

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }

      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;

      if (dialog.open) {
        dialog.close();
      }

      window.scrollTo({ top: scrollY, behavior: "auto" });
    };
  }, []);

  const requestClose = (showRestoredFocus: boolean) => {
    if (isClosing) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose(showRestoredFocus);
      return;
    }

    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(
      () => onClose(showRestoredFocus),
      180,
    );
  };

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    requestClose(true);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      requestClose(false);
    }
  };

  return (
    <dialog
      className={`project-modal${isClosing ? " project-modal--closing" : ""}`}
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-modal-${project.slug}-title`}
      tabIndex={-1}
    >
      <div className="project-modal__surface">
        <header className="project-modal__header">
          <p>{project.title}</p>
          <button
            className="project-modal__close"
            type="button"
            onClick={(event) => requestClose(event.detail === 0)}
            aria-label="Close modal"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </header>
        <div className="project-modal__scroll">
          <article className="case-study project-modal__case-study">
            <ProjectCaseStudy
              project={project}
              headingId={`project-modal-${project.slug}-title`}
              videoPlaybackEnabled={isDialogOpen && !isClosing}
              videoPlaybackMode="immediate"
            />
          </article>
        </div>
      </div>
    </dialog>
  );
}
