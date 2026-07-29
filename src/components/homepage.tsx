import Image from "next/image";
import { ActivityList } from "@/components/activity/activity-list";
import { CertificateSlider } from "@/components/certificate/certificate-slider";
import { ContactSection } from "@/components/contact/contact-section";
import { EducationTimeline } from "@/components/education/education-timeline";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroPortrait } from "@/components/hero/hero-portrait";
import { HeroScene } from "@/components/hero/hero-scene";
import { SkyAtmosphere } from "@/components/hero/sky-atmosphere";
import { FloatingClouds } from "@/components/motion/floating-clouds";
import { Reveal } from "@/components/motion/reveal";
import { SectionAtmosphere } from "@/components/layout/section-atmosphere";
import { ProfileSummary } from "@/components/profile-summary";
import { ProjectGallery } from "@/components/project/project-gallery";
import { SkillCard } from "@/components/skills/skill-card";
import { activities as activityItems } from "@/content/activities";
import { certificates } from "@/content/certificates";
import { contactDetails } from "@/content/contact";
import { education } from "@/content/education";
import { internshipExperience } from "@/content/internship";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import type { Dictionary } from "@/content/types";
import { SiteHeader } from "./site-header";

type HomePageProps = {
  dictionary: Dictionary;
};

const floatingClouds = [
  {
    id: "internship-boundary",
    src: "/Image/atmosphere/cloud3.png",
    className: "floating-cloud--internship",
    size: "clamp(20rem, 31vw, 36rem)",
    aspectRatio: "4 / 3",
    opacity: 0.58,
    depth: 0.74,
    pointer: 12,
  },
  {
    id: "projects-edge",
    src: "/Image/atmosphere/cloud.png",
    className: "floating-cloud--projects",
    size: "clamp(14rem, 20vw, 22rem)",
    aspectRatio: "1 / 1",
    opacity: 0.3,
    depth: 0.35,
    pointer: 7,
    mobile: false,
  },
  {
    id: "contact-dusk",
    src: "/Image/atmosphere/cloud4.png",
    className: "floating-cloud--contact",
    size: "clamp(30rem, 50vw, 64rem)",
    aspectRatio: "11 / 6",
    opacity: 0.5,
    depth: 0.64,
    pointer: 13,
  },
] as const;

export function HomePage({ dictionary }: HomePageProps) {
  /*
   * THESIS: A portfolio that reads like a composed studio introduction, not a card catalogue.
   * OWN-WORLD: Ink field, ivory paper, muted olive annotation, serif display, and precise sans detail.
   * STORY: Recruiters meet the person first, then move through evidence of work and learning.
   * FIRST VIEWPORT: Editorial copy anchors the left; a real portrait and contour field give the right its weight.
   * FORM: A full-height, asymmetric studio plate with an original code-built atmospheric layer.
   */
  const {
    nav,
    hero,
    profileSummary,
    work,
    activities,
    achievements,
    about,
    skills,
    contact,
    footer,
  } = dictionary;
  const latestProjects = projects.filter(
    (project) => project.experienceType !== "internship",
  );
  const internshipProjects = projects.filter(
    (project) => project.experienceType === "internship",
  );
  const internshipPeriod = [
    internshipExperience.organisation,
    internshipExperience.period,
    internshipExperience.status,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <SiteHeader nav={nav} tone="dark" />
      <main id="top">
        <Reveal className="hero" aria-labelledby="hero-title" initial>
          <SkyAtmosphere />
          <HeroScene>
            <div className="hero__content">
              <p className="hero__label">{hero.label}</p>
              <HeroHeading id="hero-title" title={hero.title} />
              <p className="hero__subtitle">{hero.subtitle}</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  {hero.primaryAction}
                </a>
                <a
                  className="button button--secondary button--linkedin"
                  href={contactDetails.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Chakhriya Korada's LinkedIn profile"
                >
                  <Image
                    className="button__linkedin-logo"
                    src="/Image/icons/linkedin.svg"
                    alt=""
                    width={112}
                    height={28}
                    unoptimized
                    aria-hidden="true"
                  />
                </a>
              </div>
              <a className="hero__scroll-cue" href="#about">
                <span>Scroll to explore</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <HeroPortrait />
          </HeroScene>
        </Reveal>

        <div className="portfolio-atmosphere">
          <FloatingClouds clouds={floatingClouds} />
          <Reveal
          className="section about"
          id="about"
          aria-labelledby="about-title"
          stagger
          variant="fade-up"
          >
            <SectionAtmosphere tone="mist" motion="drift" cloudSlot="edge" />
            <div className="section-container">
              <div className="about__content reveal__heading">
                <p className="about__label">{about.kicker}</p>
                <h2 id="about-title">
                  {about.title.base}{" "}
                  <span className="about__title-accent">{about.title.accent}</span>
                </h2>
                {about.body.map((paragraph) => (
                  <p className="about__body" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <ProfileSummary items={profileSummary} />

          <EducationTimeline education={education} />

        <Reveal
          className="section skills"
          id="skills"
          aria-labelledby="skills-title"
          stagger
          variant="fade-up"
        >
          <SectionAtmosphere tone="structured" />
          <div className="section-container">
            <header className="section-heading skills__heading reveal__heading">
              <h2 id="skills-title">{skills.title}</h2>
              <p>{skills.subtitle}</p>
            </header>
            <div className="skills__grid">
              {skillGroups.map((group) => (
                <SkillCard group={group} key={group.title} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          className="section selected-work"
          id="projects"
          aria-labelledby="work-title"
          stagger
          variant="fade-in"
        >
          <SectionAtmosphere tone="quiet" />
          <div className="section-container">
            <header className="section-heading selected-work__heading reveal__heading">
              <h2 id="work-title">{work.title}</h2>
              <p>{work.intro}</p>
            </header>

            <ProjectGallery projects={latestProjects} />
          </div>
        </Reveal>

        <Reveal
          className="section internship"
          id="internship"
          aria-labelledby="internship-title"
          stagger
          variant="slide-left"
        >
          <SectionAtmosphere tone="mist" motion="drift" cloudSlot="edge" />
          <div className="section-container">
            <header className="section-heading internship__heading reveal__heading">
              <p className="section-kicker">{internshipExperience.kicker}</p>
              <h2 id="internship-title">{internshipExperience.title}</h2>
              <div className="internship__meta">
                <p className="internship__period">{internshipPeriod}</p>
              </div>
              <div className="internship__intro">
                <div className="internship__logo-frame">
                  <Image
                    className="internship__logo"
                    src="/Image/icons/allmass.png"
                    alt="Allmass Idea logo"
                    width={1200}
                    height={630}
                  />
                </div>
                <p>{internshipExperience.intro}</p>
              </div>
            </header>

            <ProjectGallery projects={internshipProjects} />
          </div>
        </Reveal>

        <Reveal
          className="section activities"
          id="activity"
          aria-labelledby="activities-title"
          stagger
          variant="slide-right"
        >
          <SectionAtmosphere tone="mist" />
          <div className="section-container">
            <header className="section-heading reveal__heading">
              <p className="section-kicker">{activities.kicker}</p>
              <h2 id="activities-title">{activities.title}</h2>
              <p>{activities.intro}</p>
            </header>
            <ActivityList activities={activityItems} />
          </div>
        </Reveal>

        <Reveal
          className="section achievements"
          id="certificate"
          aria-labelledby="achievements-title"
          stagger
          variant="scale-soft"
        >
          <SectionAtmosphere tone="airy" />
          <div className="section-container">
            <div className="achievements__intro reveal__heading">
              <p className="section-kicker">{achievements.kicker}</p>
              <h2 id="achievements-title">{achievements.title}</h2>
              <p>{achievements.note}</p>
            </div>
            <CertificateSlider certificates={certificates} />
          </div>
        </Reveal>

          <ContactSection contact={contact} footer={footer} />
        </div>
      </main>
    </>
  );
}
