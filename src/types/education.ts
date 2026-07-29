export type EducationItem = {
  institution: string;
  location: string;
  startYear: number;
  endYear?: number;
  programme?: string;
  faculty?: string;
  major?: string;
  gpa: string;
  gpaLabel: "GPA" | "Cumulative GPA";
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoVariant: "school" | "university";
  current: boolean;
};

export type EducationSection = {
  label: string;
  title: string;
  subtitle: string;
  items: EducationItem[];
};
