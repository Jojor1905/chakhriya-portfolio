import type { EducationSection } from "@/types/education";

export const education: EducationSection = {
  label: "Education",
  title: "Education Timeline",
  subtitle:
    "My academic journey in English–Mathematics and Computer Science.",
  items: [
    {
      institution: "Yothinburana School",
      location: "Bangkok",
      startYear: 2020,
      endYear: 2023,
      programme: "English–Mathematics Program",
      gpa: "3.58",
      gpaLabel: "GPA",
      logo: "/Image/icons/logo1.png",
      logoAlt: "Yothinburana School logo",
      logoWidth: 431,
      logoHeight: 638,
      logoVariant: "school",
      current: false,
    },
    {
      institution: "Bangkok University",
      location: "Pathum Thani",
      startYear: 2023,
      faculty: "School of Information Technology and Innovation",
      major: "Computer Science",
      gpa: "3.69",
      gpaLabel: "Cumulative GPA",
      logo: "/Image/icons/BULogo.svg",
      logoAlt: "Bangkok University logo",
      logoWidth: 310,
      logoHeight: 310,
      logoVariant: "university",
      current: true,
    },
  ],
};
