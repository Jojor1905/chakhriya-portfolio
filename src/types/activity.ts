type ActivityBase = {
  title: string;
  category: string;
  organiser: string;
  year: string;
  role: string;
  summary: string;
  contribution: string;
  outcome: string;
  cardSummary?: string;
  cardContribution?: string;
  cardOutcome?: string;
  skills?: readonly string[];
  href?: string;
};

type ActivityWithoutImage = ActivityBase & {
  image?: undefined;
  imageAlt?: undefined;
  imageFit?: undefined;
};

type ActivityWithImage = ActivityBase & {
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};

export type Activity = ActivityWithoutImage | ActivityWithImage;
