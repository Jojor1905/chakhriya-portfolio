export type SkillIconItem = {
  name: string;
  icon: string;
  alt: string;
  group: string;
};

export type SkillTextItem = {
  name: string;
  group: string;
  type: "method" | "framework" | "technology";
};

export type SkillSection = {
  title: string;
  iconItems?: SkillIconItem[];
  textItems?: SkillTextItem[];
};

export type SkillGroup = {
  title: string;
  description: string;
  sections: SkillSection[];
};
