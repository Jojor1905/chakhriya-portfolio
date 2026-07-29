export type ProjectSection = {
  title: string;
  body?: string;
  steps?: string[];
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  }>;
  points?: string[];
  subsections?: Array<{
    title: string;
    body: string;
    additionalBody?: string;
    points?: string[];
    steps?: string[];
    promptGroups?: Array<{
      title: string;
      points: string[];
    }>;
  }>;
  personas?: Array<{
    title: string;
    body: string;
  }>;
  impactPoints?: Array<{
    title: string;
    body: string;
  }>;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  year?: string;
  summary: string;
  tagline?: string;
  coverImage: string;
  coverAlt: string;
  mediaFit?: "cover" | "contain";
  coverFrameless?: boolean;
  video?: string;
  figmaUrl?: string;
  figmaAriaLabel?: string;
  role: string;
  timeline: string;
  tools: string[];
  focus?: string;
  skills?: string[];
  sections: ProjectSection[];
  featured: boolean;
  modalOnly?: boolean;
  overviewTitle?: string;
  overviewBody?: string;
  experienceType?: "internship" | "academic" | "personal";
  organisation?: string;
  contextLabel?: string;
};
