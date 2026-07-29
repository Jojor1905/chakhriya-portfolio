import type { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    title: "Design Tools & Methods",
    description:
      "Design tools, UX methods, and product frameworks for shaping and evaluating ideas.",
    sections: [
      {
        title: "Design Tools",
        iconItems: [
          {
            name: "Figma",
            icon: "/Image/icons/figma.svg",
            alt: "Figma logo",
            group: "Design Tools",
          },
          {
            name: "Notion",
            icon: "/Image/icons/notion.svg",
            alt: "Notion logo",
            group: "Design Tools",
          },
          {
            name: "Jira",
            icon: "/Image/icons/jira.svg",
            alt: "Jira logo",
            group: "Design Tools",
          },
        ],
      },
      {
        title: "UX Methods",
        textItems: [
          { name: "Design Thinking", group: "UX Methods", type: "method" },
          { name: "UX Research", group: "UX Methods", type: "method" },
          {
            name: "Point of View (POV)",
            group: "UX Methods",
            type: "method",
          },
          { name: "User Flow", group: "UX Methods", type: "method" },
          { name: "Wireframing", group: "UX Methods", type: "method" },
          { name: "Prototyping", group: "UX Methods", type: "method" },
          {
            name: "Usability Testing",
            group: "UX Methods",
            type: "method",
          },
        ],
      },
      {
        title: "Product & Business Frameworks",
        textItems: [
          {
            name: "Agile / Scrum",
            group: "Product & Business Frameworks",
            type: "framework",
          },
          {
            name: "Waterfall",
            group: "Product & Business Frameworks",
            type: "framework",
          },
          {
            name: "SWOT Analysis",
            group: "Product & Business Frameworks",
            type: "framework",
          },
          {
            name: "Business Model Canvas (BMC)",
            group: "Product & Business Frameworks",
            type: "framework",
          },
          {
            name: "Customer Journey Mapping",
            group: "Product & Business Frameworks",
            type: "framework",
          },
          {
            name: "AARRR Framework (Pirate Metrics)",
            group: "Product & Business Frameworks",
            type: "framework",
          },
          {
            name: "RICE Prioritisation",
            group: "Product & Business Frameworks",
            type: "framework",
          },
        ],
      },
    ],
  },
  {
    title: "Programming & Frameworks",
    description:
      "Core programming, development environments, and computer vision tools for technical prototyping.",
    sections: [
      {
        title: "Programming",
        iconItems: [
          {
            name: "Python",
            icon: "/Image/icons/python.svg",
            alt: "Python logo",
            group: "Programming",
          },
        ],
      },
      {
        title: "Development Tools",
        iconItems: [
          {
            name: "Git",
            icon: "/Image/icons/git.svg",
            alt: "Git logo",
            group: "Development Tools",
          },
          {
            name: "Visual Studio Code",
            icon: "/Image/icons/visual-studio-code.svg",
            alt: "Visual Studio Code logo",
            group: "Development Tools",
          },
          {
            name: "Visual Studio",
            icon: "/Image/icons/visual-studio.svg",
            alt: "Visual Studio logo",
            group: "Development Tools",
          },
        ],
      },
      {
        title: "Computer Vision",
        iconItems: [
          {
            name: "OpenCV",
            icon: "/Image/icons/opencv.svg",
            alt: "OpenCV logo",
            group: "Computer Vision",
          },
          {
            name: "Ultralytics",
            icon: "/Image/icons/ultralytics.svg",
            alt: "Ultralytics logo",
            group: "Computer Vision",
          },
          {
            name: "YOLO",
            icon: "/Image/icons/yolo.svg",
            alt: "YOLO logo",
            group: "Computer Vision",
          },
          {
            name: "Roboflow",
            icon: "/Image/icons/roboflow.svg",
            alt: "Roboflow logo",
            group: "Computer Vision",
          },
        ],
      },
    ],
  },
  {
    title: "Tech",
    description:
      "AI tools and technology areas for exploring intelligent product experiences.",
    sections: [
      {
        title: "AI Tools",
        iconItems: [
          {
            name: "ChatGPT",
            icon: "/Image/icons/openai-chatgpt.svg",
            alt: "ChatGPT logo",
            group: "AI Tools",
          },
          {
            name: "Claude",
            icon: "/Image/icons/claude.svg",
            alt: "Claude logo",
            group: "AI Tools",
          },
          {
            name: "Gemini",
            icon: "/Image/icons/gemini.svg",
            alt: "Gemini logo",
            group: "AI Tools",
          },
          {
            name: "Gemini CLI",
            icon: "/Image/icons/gemini-cli.svg",
            alt: "Gemini CLI logo",
            group: "AI Tools",
          },
          {
            name: "Lovable",
            icon: "/Image/icons/lovable.svg",
            alt: "Lovable logo",
            group: "AI Tools",
          },
          {
            name: "Kaggle",
            icon: "/Image/icons/kaggle.svg",
            alt: "Kaggle logo",
            group: "AI Tools",
          },
        ],
      },
      {
        title: "Technology Areas",
        textItems: [
          {
            name: "Generative AI",
            group: "Technology Areas",
            type: "technology",
          },
          {
            name: "Prompt Engineering",
            group: "Technology Areas",
            type: "technology",
          },
          {
            name: "AI-assisted Development",
            group: "Technology Areas",
            type: "technology",
          },
          {
            name: "Computer Vision",
            group: "Technology Areas",
            type: "technology",
          },
          {
            name: "Object Detection",
            group: "Technology Areas",
            type: "technology",
          },
          {
            name: "Model Training",
            group: "Technology Areas",
            type: "technology",
          },
          {
            name: "Human-in-the-loop AI",
            group: "Technology Areas",
            type: "technology",
          },
        ],
      },
    ],
  },
];
