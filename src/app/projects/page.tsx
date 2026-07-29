import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project/project-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { en } from "@/content/en";
import { routableProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected product design, UX, creative technology, and AI-assisted project case studies.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader nav={en.nav} />
      <main id="top">
        <section className="projects-page" aria-labelledby="projects-title">
          <header className="projects-page__header">
            <p className="section-kicker">Project archive</p>
            <h1 id="projects-title">My Latest Projects</h1>
            <p>
              Six provisional case studies connecting product thinking, interface
              design, and technical exploration. Evidence and final artefacts will
              replace the clearly marked placeholder material as it is reviewed.
            </p>
          </header>
          <ProjectGrid projects={routableProjects} returnTo="/projects" />
        </section>
      </main>
      <SiteFooter footer={en.footer} />
    </>
  );
}
