import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/navigation/back-link";
import { ProjectCaseStudy } from "@/components/project/project-case-study";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { en } from "@/content/en";
import {
  getAdjacentProjects,
  getProject,
  routableProjects,
} from "@/content/projects";

export function generateStaticParams() {
  return routableProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <>
      <SiteHeader nav={en.nav} />
      <main id="top">
        <article className="case-study">
          <BackLink className="case-study__back" />
          <ProjectCaseStudy project={project} headingId="project-title" />

          <nav className="project-pagination" aria-label="Project pagination">
            <Link href={`/projects/${previous.slug}`} rel="prev">
              <span>Previous project</span>
              <strong>← {previous.title}</strong>
            </Link>
            <Link href={`/projects/${next.slug}`} rel="next">
              <span>Next project</span>
              <strong>{next.title} →</strong>
            </Link>
          </nav>
        </article>
      </main>
      <SiteFooter footer={en.footer} />
    </>
  );
}
