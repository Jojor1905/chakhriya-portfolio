import Image from "next/image";
import { ArrowDownIcon } from "@/components/icons/arrow-icons";
import { ActivityList } from "@/components/activity/activity-list";
import { CertificateSlider } from "@/components/certificate/certificate-slider";
import { ContactSection } from "@/components/contact/contact-section";
import { EducationTimeline } from "@/components/education/education-timeline";
import { HeroHeading } from "@/components/hero/hero-heading";
import { HeroPortrait } from "@/components/hero/hero-portrait";
import { HeroScene } from "@/components/hero/hero-scene";
import { SkyAtmosphere } from "@/components/hero/sky-atmosphere";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
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
        <div className="hero" aria-labelledby="hero-title">
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
                <ArrowDownIcon className="arrow-icon" aria-hidden="true" />
              </a>
            </div>
            <HeroPortrait />
          </HeroScene>
        </div>

        <div className="portfolio-atmosphere">
          <section
          className="section about"
          id="about"
          aria-labelledby="about-title"
          >
            <SectionAtmosphere tone="mist" />
            <div className="section-container">
              <StaggerGroup className="about__content" delay={0.02}>
                <StaggerItem distance={16}><p className="about__label">{about.kicker}</p></StaggerItem>
                <StaggerItem distance={24}><h2 id="about-title">{about.title.base} <span className="about__title-accent">{about.title.accent}</span></h2></StaggerItem>
                {about.body.map((paragraph) => <StaggerItem distance={18} key={paragraph}><p className="about__body">{paragraph}</p></StaggerItem>)}
              </StaggerGroup>
            </div>
          </section>

          <ProfileSummary items={profileSummary} />

          <EducationTimeline education={education} />

        <section
          className="section skills"
          id="skills"
          aria-labelledby="skills-title"
        >
          <SectionAtmosphere tone="structured" />
          <div className="section-container">
            <Reveal className="section-heading skills__heading" as="header" distance={24}>
              <h2 id="skills-title">{skills.title}</h2>
              <p>{skills.subtitle}</p>
            </Reveal>
            <StaggerGroup className="skills__grid">
              {skillGroups.map((group) => (
                <StaggerItem key={group.title}><SkillCard group={group} /></StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section
          className="section selected-work"
          id="projects"
          aria-labelledby="work-title"
        >
          <SectionAtmosphere tone="quiet" />
          <div className="section-container">
            <Reveal className="section-heading selected-work__heading" as="header" distance={24}>
              <h2 id="work-title">{work.title}</h2>
              <p>{work.intro}</p>
            </Reveal>

            <ProjectGallery projects={latestProjects} />
          </div>
        </section>

        <section
          className="section internship"
          id="internship"
          aria-labelledby="internship-title"
        >
          <SectionAtmosphere tone="mist" />
          <div className="section-container">
            <div className="section-heading internship__heading">
              <Reveal as="div" distance={18}>
                <p className="section-kicker">{internshipExperience.kicker}</p>
                <h2 id="internship-title">{internshipExperience.title}</h2>
              </Reveal>
              <Reveal className="internship__meta" as="div" distance={18} delay={0.06}>
                <p className="internship__period">{internshipPeriod}</p>
              </Reveal>
              <div className="internship__intro">
                <Reveal className="internship__logo-frame" as="div" axis="x" distance={-24}>
                  <Image
                    className="internship__logo"
                    src="/Image/icons/allmass.png"
                    alt="Allmass Idea logo"
                    width={1200}
                    height={630}
                  />
                </Reveal>
                <Reveal as="div" axis="x" distance={24} delay={0.08}>
                  <p>{internshipExperience.intro}</p>
                </Reveal>
              </div>
            </div>

            <ProjectGallery projects={internshipProjects} />
          </div>
        </section>

        <section
          className="section activities"
          id="activity"
          aria-labelledby="activities-title"
        >
          <SectionAtmosphere tone="mist" />
          <div className="section-container">
            <Reveal className="section-heading" as="header" distance={24}>
              <p className="section-kicker">{activities.kicker}</p>
              <h2 id="activities-title">{activities.title}</h2>
              <p>{activities.intro}</p>
            </Reveal>
            <ActivityList activities={activityItems} />
          </div>
        </section>

        <section
          className="section achievements"
          id="certificate"
          aria-labelledby="achievements-title"
        >
          <SectionAtmosphere tone="airy" />
          <div className="section-container">
            <Reveal className="achievements__intro" as="div" distance={24}>
              <p className="section-kicker">{achievements.kicker}</p>
              <h2 id="achievements-title">{achievements.title}</h2>
              <p>{achievements.note}</p>
            </Reveal>
            <Reveal as="div" distance={0} delay={0.08} scale={0.985}>
              <CertificateSlider certificates={certificates} />
            </Reveal>
          </div>
        </section>

          <ContactSection contact={contact} footer={footer} />
        </div>
      </main>
    </>
  );
}
