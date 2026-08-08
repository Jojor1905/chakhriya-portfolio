import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "my-day-app",
    title: "My Day App",
    category: "UX/UI Design · UX Research",
    year: "2025",
    summary:
      "A friendly and personalised cycle-tracking application designed to make health tracking feel simpler, more comfortable, and emotionally engaging.",
    tagline:
      "A personalised menstrual health-tracking experience that uses emotional design, customisable themes, and clear user journeys to encourage consistent daily use.",
    coverImage: "/Image/project/mydayapp/My_day_app.webp",
    coverAlt:
      "My Day App mobile screens showing a personalised menstrual health-tracking experience",
    mediaFit: "contain",
    coverFrameless: true,
    figmaUrl:
      "https://www.figma.com/design/xGKsLIgdGDuyTU7jFI8y5k/MyDay_Appilcation?node-id=0-1&t=NiGF4MwSGbb6L5NB-1",
    figmaAriaLabel: "Open the My Day App Figma design in a new tab",
    role: "UX/UI Designer",
    timeline: "1 Week · November 2025",
    focus: "UX Research, Emotional Design, Mobile UI",
    tools: ["Figma"],
    skills: [
      "Figma",
      "UX/UI Design",
      "UX Research",
      "Emotional Design",
      "Mobile App Design",
      "Progressive Disclosure",
      "Gamification",
      "Design Systems",
      "User Flow",
      "Prototyping",
      "Personalisation",
      "Health Tech",
    ],
    featured: true,
    modalOnly: true,
    experienceType: "academic",
    overviewTitle: "Project Overview",
    overviewBody:
      "My Day App is a menstrual health-tracking concept designed to make personal health management feel less clinical, less complicated, and easier to use consistently. The project combines clear health information with emotional design, customisable pet themes, and goal-based personalisation. Users can shape the experience around their needs, whether they want to track their cycle, prepare for pregnancy, or monitor pregnancy-related information.",
    sections: [
      {
        title: "The Problem",
        body: "Many menstrual cycle-tracking applications present health information through interfaces that feel complex, formal, or emotionally distant. This can make users feel overwhelmed and reduce their motivation to record information consistently. When users stop logging their data, the application becomes less helpful and cannot provide a clear picture of their cycle or health patterns. The design challenge was therefore not only to display information, but also to create an experience that users would feel comfortable returning to.",
      },
      {
        title: "The Solution",
        body: "My Day App uses emotional design and personalisation to transform routine health tracking into a friendlier daily experience. It is not presented as a medical diagnostic tool.",
        points: [
          "Customisable pet-themed interfaces",
          "Optional dark mode for visual comfort",
          "Goal-based onboarding",
          "Simplified health questions",
          "Clear cycle-status summaries",
          "Visual calendar tracking",
          "Gamification and emotional encouragement",
        ],
        steps: ["Track Period", "Try to Conceive", "Track Pregnancy"],
        subsections: [
          {
            title: "Goal-aware experience",
            body: "The interface adapts its content and recommendations according to the selected goal.",
          },
        ],
      },
      {
        title: "UX Research & Design Direction",
        body: "The project focused on reducing cognitive load and making health tracking feel more approachable. Information is revealed gradually instead of presenting every health question and feature at once.",
        points: [
          "Progressive Disclosure",
          "Aesthetic-Usability Effect",
          "Personalisation",
          "Emotional Design",
          "Recognition Rather Than Recall",
          "Clear Visual Hierarchy",
          "Consistent Feedback",
        ],
        subsections: [
          {
            title: "Design objective",
            body: "Create a cycle-tracking experience that feels supportive and personal without hiding important health information.",
          },
        ],
      },
      {
        title: "Onboarding & Personalisation",
        body: "The onboarding experience begins by asking users what they want to achieve with the application. Rather than assuming that every user has the same objective, the application offers goal options such as cycle tracking, preparing for pregnancy, and pregnancy tracking. It then asks essential health questions—including birth year and cycle regularity—through choice-based controls that minimise typing and reduce effort.",
        points: [
          "One clear question at a time",
          "Choice-based answers",
          "Minimal text input",
          "Visible progress",
          "Plain and friendly language",
          "Content adapted to the selected goal",
        ],
        images: [
          {
            src: "/Image/project/mydayapp/Onboarding.png",
            alt: "My Day App onboarding screens showing goal selection and health questions",
            width: 1178,
            height: 348,
            caption:
              "Goal-based onboarding designed to personalise the experience while reducing cognitive load.",
          },
        ],
        subsections: [
          {
            title: "UX Principle: Progressive Disclosure",
            body: "The flow introduces only the information needed for the current decision, helping users move forward without feeling overwhelmed.",
          },
        ],
      },
      {
        title: "Dashboard & Gamification",
        body: "The dashboard presents the user’s current cycle status through friendly visual summaries rather than dense medical information. Users can select pet-inspired themes—such as dog, cat, or bird—to create a stronger emotional connection with the application. The dashboard also uses light gamification and status updates to encourage regular check-ins without making the experience feel competitive or judgmental.",
        points: [
          "Current cycle-status summary",
          "Personalised visual theme",
          "Emotional encouragement",
          "Accessible overview of daily information",
          "Clear priority actions",
        ],
        images: [
          {
            src: "/Image/project/mydayapp/DashboardGamification.png",
            alt: "My Day App dashboard with cycle status and customisable pet theme",
            width: 632,
            height: 446,
            caption:
              "A personalised dashboard combining cycle status, emotional design, and lightweight gamification.",
          },
        ],
        subsections: [
          {
            title: "UX Principle: Aesthetic-Usability Effect",
            body: "A calm visual language helps the product feel approachable while preserving clear, useful daily information.",
          },
        ],
      },
      {
        title: "Tracking & Calendar",
        body: "The calendar allows users to understand cycle information over time through simple visual markers and status indicators. Instead of requiring users to interpret complicated charts, the design uses recognisable calendar patterns and clear visual states to communicate important dates and recorded symptoms. The tracking flow is designed to make daily logging quick and repeatable.",
        points: [
          "Cycle dates",
          "Symptom logging",
          "Visual status indicators",
          "Historical tracking",
          "Simplified daily updates",
          "Easy recognition of patterns",
        ],
        images: [
          {
            src: "/Image/project/mydayapp/TrackingCalendar.png",
            alt: "My Day App cycle-tracking calendar with visual status indicators",
            width: 843,
            height: 433,
            caption:
              "A calendar-based tracking experience designed for quick daily updates and clear pattern recognition.",
          },
        ],
      },
      {
        title: "Design System",
        body: "A consistent design system was created to support a calm, friendly, and recognisable mobile experience. It defines colour roles, typography hierarchy, buttons and input states, cards and containers, spacing rules, status colours, dark and light theme behaviour, and reusable mobile components. The system helps maintain consistency across onboarding, dashboard, calendar, and tracking flows.",
        images: [
          {
            src: "/Image/project/mydayapp/DesignSystem.png",
            alt: "My Day App design system showing colours, typography, and UI components",
            width: 766,
            height: 131,
            caption:
              "The My Day App design system establishes consistent colours, typography, components, and interaction states.",
          },
        ],
      },
      {
        title: "Iconography & Emotional Design",
        body: "The iconography was designed to make health-related actions easy to recognise while preserving the application’s friendly personality. Pet-themed visual elements are emotional touchpoints rather than pure decoration: they help the experience feel less formal and encourage users to return regularly.",
        points: [
          "Stroke weight",
          "Visual scale",
          "Corner treatment",
          "Colour usage",
          "Meaning",
          "Interaction states",
        ],
        images: [
          {
            src: "/Image/project/mydayapp/Iconography.png",
            alt: "My Day App iconography and pet-themed visual elements",
            width: 874,
            height: 657,
            caption:
              "Friendly and consistent iconography supports recognition while reinforcing the application’s emotional identity.",
          },
        ],
      },
      {
        title: "Key Learning",
        body: "This project strengthened my understanding of how emotional design can support usability and long-term engagement. I learned that health applications need more than accurate information: they must also help users feel safe, understood, and motivated to interact with the product consistently.",
        points: [
          "Structuring personalised onboarding",
          "Applying Progressive Disclosure",
          "Designing reusable mobile components",
          "Balancing emotional visuals with clear information",
          "Creating goal-based user journeys",
          "Maintaining consistency through a design system",
          "Communicating sensitive health information carefully",
        ],
        subsections: [
          {
            title: "Closing statement",
            body: "My Day App demonstrates how thoughtful UX and emotional design can make routine health tracking feel more supportive, approachable, and personal.",
          },
        ],
      },
    ],
  },
  {
    slug: "skin-analysis-line-oa",
    title: "Wela AI Skincare Prototype",
    shortTitle: "Wela",
    category: "AI Prototype Development · Skincare",
    year: "2026",
    summary:
      "A working prototype that connects AI-assisted skin analysis with personalised skincare recommendations.",
    coverImage: "/Image/project/skincare/Skincare1.png",
    coverAlt:
      "Wela prototype screens showing image submission, skin analysis results, and skincare recommendations",
    mediaFit: "contain",
    figmaUrl:
      "https://www.figma.com/design/BsvwxxlCfFjCeoorvKcg1f/Skincare-flow?node-id=0-1&t=qCgvdS8ScJ6qGrms-1",
    figmaAriaLabel: "Open the AI Skin Analysis Figma design in a new tab",
    githubLinks: [
      {
        url: "https://github.com/Jojor1905/wela-liff-prototype",
        label: "View LIFF Prototype",
        ariaLabel: "Open Wela LIFF Prototype on GitHub",
      },
      {
        url: "https://github.com/Jojor1905/wela-skin-ai",
        label: "View AI Repository",
        ariaLabel: "Open Wela Skin AI repository on GitHub",
      },
    ],
    role: "Front-end, Back-end, and AI Prototype Developer",
    timeline: "Prototype & Learning Project · 2026",
    tools: [
      "Front-end Prototype Development",
      "Back-end Prototype Development",
      "FastAPI",
      "REST API",
      "AI Model Training",
      "Computer Vision",
      "Image Analysis",
      "LINE LIFF",
      "ChatGPT Codex CLI",
    ],
    featured: true,
    experienceType: "internship",
    organisation: "Allmass Idea",
    contextLabel: "Allmass Idea Internship Project",
    overviewTitle: "Project Overview",
    overviewBody:
      "Wela is an AI-assisted skincare prototype that explores how skin analysis can be connected with personalised skincare recommendations through a working digital system. In this project, I focused on building the prototype across multiple technical parts, including the front end, back end, AI model training, and API integration. The project was also an important hands-on learning experience for me. I used ChatGPT Codex CLI to explore unfamiliar technologies, understand implementation approaches, debug issues, and gradually connect each part of the system into a functional prototype.",
    sections: [
      {
        title: "What I Built",
        subsections: [
          {
            title: "Front-end Prototype",
            body: "Built the front-end prototype for the user flow, including image submission, questionnaire input, analysis results, and product recommendation screens.",
          },
          {
            title: "AI Model Training",
            body: "Experimented with training an AI model for the prototype to analyse facial images and identify selected skin concerns.",
          },
          {
            title: "Back-end Prototype",
            body: "Developed a lightweight back-end prototype to receive image data, communicate with the AI model, and return structured analysis results.",
          },
          {
            title: "API Integration",
            body: "Connected the front end, back end, AI analysis, and recommendation flow through APIs to create an end-to-end prototype system.",
          },
        ],
      },
      {
        title: "Development Approach",
        body: "I developed the prototype step by step, starting from the core system flow and then connecting each part of the application. This project gave me the opportunity to learn how front-end development, back-end services, AI model experimentation, and API integration work together in a single prototype. Because several parts of the implementation were new to me, I relied on hands-on testing and iterative learning with ChatGPT Codex CLI to better understand the technical workflow and improve the prototype over time.",
      },
      {
        title: "System Workflow",
        body: "The prototype connects the user interface, back-end service, AI analysis model, questionnaire data, and recommendation logic into one end-to-end workflow.",
        images: [
          {
            src: "/Image/project/skincare/wela-flow.png",
            alt: "Wela prototype workflow connecting image submission, questionnaire data, back-end processing, AI analysis, and skincare recommendations",
            width: 1055,
            height: 1491,
            caption:
              "Prototype system workflow — from image submission and AI analysis to personalised skincare recommendations.",
          },
        ],
      },
      {
        title: "AI-assisted Development",
        body: "ChatGPT Codex CLI played an important role in my learning and development process throughout this project. I used it to explore technical approaches, understand unfamiliar concepts, debug implementation issues, and learn how to connect the front end, back end, and AI workflow into a working prototype.",
      },
      {
        title: "Tools & Technologies",
        subsections: [
          {
            title: "Development",
            body: "Technical work used to connect the application into a functional prototype.",
            points: [
              "Front-end Prototype Development",
              "Back-end Prototype Development",
              "FastAPI",
              "REST API",
            ],
          },
          {
            title: "AI",
            body: "Experimentation used to support the prototype's image-analysis workflow.",
            points: ["AI Model Training", "Computer Vision", "Image Analysis"],
          },
          {
            title: "Platform",
            body: "Platform used to connect the prototype with a LINE-based experience.",
            points: ["LINE LIFF"],
          },
          {
            title: "AI-assisted Development",
            body: "AI-assisted tool used for technical learning, experimentation, and debugging.",
            points: ["ChatGPT Codex CLI"],
          },
        ],
      },
      {
        title: "Key Learning",
        body: "This project helped me understand how different technical components — front-end development, back-end services, AI models, and APIs — can work together within a functional prototype. It also strengthened my ability to learn unfamiliar technologies independently, solve implementation problems through experimentation, and use AI-assisted tools to support the development process.",
      },
    ],
  },
  {
    slug: "sketch2spec",
    title: "Sketch2Spec",
    contextLabel: "SCG Industry Challenge",
    category: "PropTech · AI Concept",
    year: "2026",
    summary:
      "An AI-assisted concept exploring how rough floor-plan sketches can be transformed into clearer digital representations for design and material-planning use.",
    coverImage: "/Image/project/SCG/SCG-1.png",
    coverAlt: "Sketch2Spec project concept presentation",
    mediaFit: "contain",
    role: "UX/UI Designer & Product Concept Developer",
    timeline: "Academic / Industry Challenge Project · 2026",
    tools: [
      "Figma",
      "FigJam",
      "Python",
      "Computer Vision",
      "GroundingDINO",
      "SAM",
      "YOLO",
      "Three.js",
      "AI-assisted research tools",
    ],
    featured: true,
    experienceType: "academic",
    overviewTitle: "Project Overview",
    overviewBody:
      "Sketch2Spec is an AI-assisted PropTech concept developed for an SCG Industry Challenge. The project explores how rough two-dimensional floor-plan sketches could be interpreted and transformed into clearer digital representations to support design exploration and material-planning activities.",
    sections: [
      {
        title: "Problem / Challenge",
        body: "Early floor-plan sketches can be incomplete, inconsistent, or difficult for non-specialists to interpret. Turning those early ideas into structured visual information may require additional effort and can make design discussions or material-planning exploration harder to communicate clearly.",
      },
      {
        title: "Project Objective",
        body: "The project explored how a more approachable digital concept could help people move from a rough spatial idea toward a clearer representation. The goal was to make early design exploration easier to understand while keeping the concept focused on support, review, and communication rather than automated certainty.",
      },
      {
        title: "Proposed Solution",
        body: "Sketch2Spec combines AI-assisted image interpretation, computer vision, and digital visualisation to explore how rough floor-plan inputs could become clearer, editable-looking digital outputs. The concept focuses on making spatial ideas more tangible for discussion, design exploration, and material-planning use without exposing a detailed processing sequence.",
        images: [
          {
            src: "/Image/project/SCG/SCG2.png",
            alt: "Project concept",
            width: 815,
            height: 428,
            caption: "Project concept",
          },
        ],
      },
      {
        title: "Key Features / Concept Highlights",
        body: "The concept was framed around an understandable, user-centred workspace rather than a technical tool for specialists.",
        points: [
          "AI-assisted interpretation of rough floor-plan inputs",
          "Clearer digital visualisation for early spatial exploration",
          "A review-oriented approach that keeps people in control of the concept",
          "Material-planning exploration presented through a more tangible visual context",
          "Plain-language interface direction for people without complex design software experience",
        ],
        images: [
          {
            src: "/Image/project/SCG/SCG3.png",
            alt: "Prototype overview",
            width: 1883,
            height: 937,
            caption: "Prototype overview",
          },
        ],
      },
      {
        title: "My Role and Contribution",
        body: "I helped shape the concept from the initial problem framing through to its UX/UI direction and visual communication. My work focused on making the technical idea understandable as a user-centred product concept.",
        points: [
          "Product concept development",
          "UX/UI design",
          "Problem framing and user research",
          "Interface prototyping",
          "AI and computer-vision research",
          "Visual communication and presentation design",
        ],
      },
      {
        title: "Design and Development Approach",
        body: "The approach combined product thinking with UX/UI exploration and high-level AI research. I focused on clarifying the problem, considering where computer vision could support the concept, and translating the opportunity into an interface direction that communicates system intent, user control, and visual hierarchy without depending on a detailed technical workflow.",
      },
      {
        title: "Tools & Technologies",
        body: "Figma, FigJam, Python, Computer Vision, GroundingDINO, SAM, YOLO, Three.js, and AI-assisted research tools were used to support concept development, design exploration, and technology research.",
      },
      {
        title: "Outcome / Key Learning",
        body: "The project strengthened my experience in connecting product thinking, UX/UI design, and emerging AI technologies within an industry-focused challenge. It also helped me practise framing technical possibilities responsibly, designing for review and clarity, and presenting a complex concept in a concise, user-centred way.",
      },
    ],
  },
  {
    slug: "kombatx-ai",
    title: "KombatX.ai",
    category: "Sports analytics · Dashboard",
    year: "2025",
    summary:
      "Elevating Muay Thai into a world-class, data-driven sport through AI and computer vision.",
    coverImage: "/projects/kombatx-ai.svg",
    coverAlt:
      "KombatX.ai sports analytics dashboard with match timelines and performance panels",
    video: "/videos/projects/kombatx-preview.mp4",
    figmaUrl:
      "https://www.figma.com/design/mYrgs4ChCUfCzLrhAyGH06/Konbatx.ai?node-id=0-1&t=g8KJOTv5NYIXX7yt-1",
    role: "UX/UI Designer & AI Data Integrator",
    timeline: "Academic Project · 2025",
    tools: ["Figma", "Python", "YOLO", "MediaPipe", "React", "Tailwind CSS"],
    featured: true,
    experienceType: "internship",
    organisation: "Allmass Idea",
    contextLabel: "Allmass Idea Internship Project",
    overviewTitle: "Project Overview",
    sections: [
      {
        title: "The Challenge & Vision",
        subsections: [
          {
            title: "Problem",
            body: "Although Muay Thai is internationally recognised, scoring and performance analysis still rely heavily on human observation. This can contribute to subjective judging debates and limits the precise, actionable performance insights available to coaches and fighters.",
          },
          {
            title: "Vision",
            body: "KombatX.ai explores how computer vision can extract combat data from fight footage and transform it into understandable performance insights. The concept aims to support Muay Thai’s evolution into a modern, measurable sports experience similar to the data-led presentation used in major international sports.",
          },
        ],
      },
      {
        title: "Behind the AI: Data Pipeline & Training",
        body: "A central part of my role was connecting raw visual data with the final user experience.",
        images: [
          {
            src: "/Image/project/kombat/kombat1.png",
            alt: "KombatX.ai fight detection interface displayed across laptop and mobile screens",
            width: 1030,
            height: 677,
          },
          {
            src: "/Image/project/kombat/kombat2.png",
            alt: "KombatX.ai visual identity reference showing the colour palette, logo, and typography",
            width: 2274,
            height: 4703,
          },
        ],
        subsections: [
          {
            title: "Data Collection & Sourcing",
            body: "Collected and reviewed authentic Muay Thai fight footage from broadcast and stadium environments to expose the model to varied lighting, camera angles, movement patterns, and real competition conditions.",
          },
          {
            title: "Data Processing & Annotation",
            body: "Prepared and annotated visual data for object-detection experiments, including targets such as gloves, heads, and body areas. The workflow also considered ways to reduce irrelevant detections, such as referees and background elements.",
          },
          {
            title: "Pose Estimation",
            body: "Used MediaPipe Pose to extract 33 body landmarks and explore real-time skeletal tracking. These coordinates supported experiments involving movement, posture, and joint-angle analysis.",
          },
          {
            title: "AI Model Training",
            body: "Explored how pose landmarks, object detection, and calculated joint angles could be used to classify Muay Thai techniques—including punches, kicks, knees, and elbows—and support strike-analysis concepts such as attempted versus landed attacks.",
          },
        ],
      },
      {
        title: "UX/UI Design Process & Brand Identity",
        subsections: [
          {
            title: "Brand Direction",
            body: "Developed a dark and neon-orange visual direction to communicate speed, energy, impact, and modern sports technology. The design intentionally moved away from traditional decorative patterns to position KombatX.ai as a contemporary, globally relevant sports product.",
          },
          {
            title: "Logo Design",
            body: "Designed the “K” emblem to communicate forward movement, agility, and impact while remaining suitable for digital dashboards and broadcast applications.",
          },
          {
            title: "Typography",
            body: "Selected Bebas Neue for prominent headings and data points because its condensed structure supports strong visual hierarchy and high-impact sports communication.",
          },
          {
            title: "Information Architecture",
            body: "Structured the experience as a progressive story:",
          },
        ],
        points: [
          "High-impact Hero introduction",
          "Problem and vision",
          "AI detection demonstration",
          "Performance insights",
          "Analytics dashboard",
        ],
      },
      {
        title: "Designing for Three Key Personas",
        personas: [
          {
            title: "Coaches & Fighters",
            body: "Designed Strike Analytics and Hit Points modules to help users review weapon usage, target distribution, opponent tendencies, and tactical patterns. These insights could support training analysis and round-by-round decision-making.",
          },
          {
            title: "Judges & Officials",
            body: "Designed objective reference metrics such as attempted and landed strikes to explore how technology could support—not replace—professional judging and reduce ambiguity during post-fight review.",
          },
          {
            title: "Fans & Broadcasters",
            body: "Created visually digestible performance metrics and match-overview modules that could be adapted for live broadcasts, helping audiences understand fight momentum and athlete performance more easily.",
          },
        ],
      },
      {
        title: "Impact & Value for Thailand",
        impactPoints: [
          {
            title: "Modernising a National Heritage",
            body: "KombatX.ai demonstrates how Thailand’s national sport could be supported by modern analytics while respecting its cultural identity and competitive traditions.",
          },
          {
            title: "Supporting Fairness & Transparency",
            body: "Computer-vision metrics could provide additional reference data for fight analysis and review, supporting clearer discussion around performance and scoring.",
          },
          {
            title: "Developing World-Class Athletes",
            body: "Structured performance data could help coaches and training camps identify patterns, measure progress, and develop more targeted training strategies.",
          },
        ],
      },
    ],
  },
  {
    slug: "shade-route-map",
    title: "Shade Route Map",
    contextLabel: "KAIT International Program 2026",
    category: "Smart Navigation · AI Product",
    year: "2026",
    summary:
      "A shade-aware navigation concept for Bangkok University that recommends walking routes based on sunlight, shade coverage, and travel efficiency.",
    coverImage: "/Image/project/shaderoute/map1.png",
    coverAlt:
      "Shade Route Map interface showing a campus route with shade-aware navigation details",
    role: "UX/UI, route intelligence, and environmental comfort",
    timeline: "KAIT International Program · 2026",
    tools: ["Mapbox API", "SunCalc", "Gemini API"],
    featured: true,
    modalOnly: true,
    experienceType: "academic",
    overviewTitle: "Project Overview",
    overviewBody:
      "Shade Route Map is a smart campus navigation concept designed to help students and pedestrians choose more comfortable walking routes inside Bangkok University. Instead of focusing only on distance, the system also considers sunlight exposure, shade coverage, and real-time environmental conditions to recommend the most suitable route.",
    sections: [
      {
        title: "The Problem",
        body: "Traditional navigation tools usually optimise for time and distance, but they do not consider how hot or uncomfortable a walking route can be. For students walking across campus, direct sunlight can significantly affect comfort, energy, and the daily experience. This project explores how navigation can become more human-centred by integrating shade awareness into route recommendations.",
      },
      {
        title: "The Solution",
        body: "The system generates multiple route options and evaluates them based on shadow coverage, walking time, and route efficiency. Users can compare the fastest route, the most shaded route, and an optimal route that balances comfort with travel time.",
        points: ["Fastest Route", "Most Shaded Route", "Optimal Route"],
      },
      {
        title: "Technologies & Tools",
        body: "This concept combines mapping, solar-position analysis, and AI-assisted reasoning to create a more context-aware walking experience.",
        images: [
          {
            src: "/Image/project/shaderoute/map2.png",
            alt: "Shade Route Map technology overview showing mapping, solar analysis, and AI-assisted route reasoning",
            width: 1610,
            height: 902,
          },
        ],
        subsections: [
          {
            title: "Mapbox API",
            body: "Used for map rendering, route generation, distance calculation, and navigation-related spatial data.",
          },
          {
            title: "SunCalc",
            body: "Used to calculate real-time sun position, including sun altitude and azimuth, to estimate shadow conditions.",
          },
          {
            title: "Gemini API",
            body: "Used as an intelligent support layer for route analysis and personalised shade-aware recommendations.",
          },
        ],
      },
      {
        title: "Workflow / System Logic",
        body: "The workflow begins when a user enters a start location and destination. The system requests route options from Mapbox, then combines route geometry with real-time time and location data. SunCalc estimates sun position, while the shadow-calculation module checks building and tree data along each route segment. After evaluating the amount of shade available on each route, the system ranks the options and returns three recommendations: the fastest route, the most shaded route, and the optimal balanced route.",
        images: [
          {
            src: "/Image/project/shaderoute/map3.png",
            alt: "Shade Route Map workflow diagram from route request to shade-aware recommendations",
            width: 1562,
            height: 898,
          },
        ],
      },
      {
        title: "Use Case / User Journey",
        body: "The use case focuses on a student or pedestrian who wants to travel across campus more comfortably. The user searches for a destination, the system calculates multiple route options, performs shade analysis using time and environmental context, and then displays route recommendations. The user can review these options and choose the route that best fits their needs before starting navigation.",
        images: [
          {
            src: "/Image/project/shaderoute/map4.png",
            alt: "Shade Route Map user journey showing destination search, route analysis, and route selection",
            width: 1426,
            height: 896,
          },
        ],
      },
      {
        title: "Design / UX Value",
        body: "This project emphasises human-centred navigation. Instead of treating all users the same, it acknowledges that comfort, heat exposure, and walking experience are important decision factors. The concept aims to transform campus navigation from a purely functional utility into a more adaptive and user-aware experience.",
      },
      {
        title: "Outcome / Key Learning",
        body: "This project demonstrates how environmental data, mapping technology, and AI can be combined to improve everyday mobility. It also reflects an interest in designing intelligent systems that balance technical logic with real human needs.",
      },
    ],
  },
];

export const routableProjects = projects.filter((project) => !project.modalOnly);

export function getProject(slug: string) {
  return routableProjects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = routableProjects.findIndex((project) => project.slug === slug);

  return {
    previous:
      routableProjects[
        (index - 1 + routableProjects.length) % routableProjects.length
      ],
    next: routableProjects[(index + 1) % routableProjects.length],
  };
}
