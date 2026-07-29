export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    activity: string;
    certificate: string;
    contact: string;
    menuLabel: string;
    mobileMenu: string;
    mobileMenuLabel: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    primaryAction: string;
    secondaryAction: string;
  };
  profileSummary: Array<{
    label: string;
    value: string;
  }>;
  work: {
    title: string;
    intro: string;
  };
  activities: {
    kicker: string;
    title: string;
    intro: string;
  };
  achievements: {
    kicker: string;
    title: string;
    note: string;
  };
  process: {
    kicker: string;
    title: string;
    intro: string;
    steps: Array<{
      number: string;
      title: string;
      body: string;
    }>;
  };
  capabilities: {
    kicker: string;
    title: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
  };
  about: {
    kicker: string;
    title: {
      base: string;
      accent: string;
    };
    body: [string, string];
  };
  skills: {
    label: string;
    title: string;
    subtitle: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
  };
  footer: {
    note: string;
    location: string;
    status: string;
    backToTop: string;
  };
};
