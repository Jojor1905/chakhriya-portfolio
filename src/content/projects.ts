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
    title: "AI Skin Analysis & Commerce Platform",
    shortTitle: "AI Skin Analysis",
    category: "AI-assisted Commerce · Beauty Tech",
    year: "2026",
    summary:
      "A personalised beauty-commerce concept connecting AI-assisted skin analysis with skincare and wellness recommendations.",
    coverImage: "/Image/project/skincare/Skincare1.png",
    coverAlt:
      "AI skin analysis and personalised skincare recommendation interface",
    mediaFit: "contain",
    figmaUrl:
      "https://www.figma.com/design/A3r6uKZJD8ZaCNnFQ9DFCP/Skincare?node-id=662-4785&p=f&t=qRPKCArRJqhKrBZk-0",
    figmaAriaLabel: "Open the AI Skin Analysis Figma design in a new tab",
    role: "UX/UI Designer & AI Product Researcher",
    timeline: "Allmass Idea Internship · 2026",
    tools: [
      "Figma",
      "UX/UI Design",
      "User Flow",
      "Beauty Tech",
      "AI-assisted Commerce",
      "Computer Vision",
      "Recommendation Systems",
      "LINE OA",
      "PDPA-aware Design",
      "Lean Business Strategy",
      "Customer Experience",
      "CAC / LTV",
      "Mobile-first Design",
    ],
    featured: true,
    experienceType: "internship",
    organisation: "Allmass Idea",
    contextLabel: "Allmass Idea Internship Project",
    overviewTitle: "Project Overview",
    overviewBody:
      "This project explores a personalised Beauty Tech and commerce platform that connects AI-assisted skin analysis with skincare, wellness, and product recommendations. Rather than treating AI analysis as a standalone feature, the concept uses it as the starting point of a guided customer journey—from understanding skin concerns to reviewing suitable products and making informed purchase decisions. The experience was designed for delivery through LINE OA or a dedicated mobile application, reducing the need for users to install or learn a complex new system.",
    sections: [
      {
        title: "The Business Challenge",
        body: "Beauty and skincare businesses often face high customer-acquisition costs, low trust in generic recommendations, and difficulty maintaining long-term customer relationships. Customers may also feel overwhelmed by product choices or uncertain about which products match their skin concerns. The project explores how AI-assisted analysis, understandable explanations, and a guided commerce flow could help businesses create a more relevant and engaging customer experience.",
      },
      {
        title: "Three-Phase Lean Business Strategy",
        subsections: [
          {
            title: "Phase 1 — Market Penetration & Cash Flow",
            body: "The proposed first phase begins by recommending and selling established skincare brands through the platform rather than manufacturing a private-label product immediately. This low-risk approach is designed to test customer demand, reduce initial manufacturing and inventory risk, and collect consented behavioural and preference data.",
            points: [
              "Could generate early revenue",
              "Could identify frequently requested skin concerns and product categories",
            ],
          },
          {
            title: "Phase 2 — Private Label & Brand Equity",
            body: "After building a trusted user base and understanding recurring customer needs, the business could explore private-label products through qualified OEM partners. Product direction would be informed by aggregated user needs and feedback rather than relying only on assumptions or general market trends.",
            points: [
              "Potentially improved gross margins",
              "Stronger brand identity and more differentiated products",
              "Product development informed by real customer patterns",
            ],
          },
          {
            title: "Phase 3 — Cross-Selling & Customer Lifetime Value",
            body: "The ecosystem could extend beyond skincare into relevant wellness, nutrition, supplements, and healthy-lifestyle recommendations. Through API or partner integrations, the platform could connect users with external products and services without operating its own logistics fleet. This phase explores how relevant cross-selling could increase customer lifetime value while keeping the operating model relatively lean.",
          },
        ],
      },
      {
        title: "AI as a Commerce Engine",
        body: "The AI concept is designed not only to analyse skin but also to support personalisation, product discovery, and the customer journey.",
        subsections: [
          {
            title: "Guided Analysis",
            body: "Users provide a facial image through LINE OA or the application. The system then explores visible skin-related patterns and presents the results using understandable, non-alarming language. The concept is not presented as a medical diagnostic tool.",
          },
          {
            title: "Personalised Recommendations",
            body: "Analysis results can be connected with product attributes, user preferences, budget, and routine requirements to provide more relevant recommendations. Recommendations should explain why a product may be relevant rather than only displaying a product list.",
          },
          {
            title: "Commerce Automation",
            body: "The concept creates a guided journey from analysis to recommendation and checkout, reducing friction and supporting service availability beyond normal sales hours. It is not designed to replace professional medical advice or guarantee sales.",
          },
          {
            title: "Technical Direction",
            body: "The proposed technical direction explores YOLO-based computer-vision experiments, image processing, facial-region analysis, and recommendation logic. No real-time performance or accuracy claims are made without measured results.",
          },
        ],
      },
      {
        title: "UX/UI Design Process",
        body: "I was responsible for translating the product and business concept into a clear mobile-first user experience and interactive Figma prototype. The design focused on helping users feel informed and supported rather than judged by the skin-analysis results.",
        subsections: [
          {
            title: "Target Users",
            body: "The primary users include people who want understandable skincare guidance, feel overwhelmed by product options, prefer mobile-first or LINE-based services, want recommendations that consider their needs and routines, and may be cautious about sharing facial images.",
          },
          {
            title: "User Journey",
            body: "The proposed journey moves through the following steps.",
            steps: [
              "Enter through LINE OA or the mobile application",
              "Review consent and privacy information",
              "Upload or capture a facial image",
              "Wait for analysis",
              "Review understandable skin insights",
              "Explore recommended products",
              "Compare product information",
              "Add products to cart or continue to consultation",
              "Review progress in future sessions",
            ],
          },
          {
            title: "Trust-Centred Interface",
            body: "The interface was designed with clear explanations, visible progress states, friendly language, and user control over each step. The design avoids overly negative language about appearance and does not present cosmetic concerns as medical conditions.",
          },
          {
            title: "Product-Led Commerce",
            body: "Product recommendations were positioned as part of the main experience, not as an unrelated advertisement after the analysis. The UI explains the connection between each recommendation and the user’s stated needs or observed patterns.",
          },
          {
            title: "Prototype",
            body: "The interactive prototype documents the proposed mobile flow, including consent, analysis, recommendations, and commerce touchpoints.",
          },
        ],
      },
      {
        title: "Trust, Privacy & PDPA",
        body: "Facial images and skin-analysis information may involve sensitive personal data. The concept therefore includes privacy and consent as core product requirements rather than optional legal text. Designed with PDPA-aware consent and data-handling principles.",
        points: [
          "Explicit consent before image processing",
          "Clear explanation of why the image is required",
          "Defined data-retention period",
          "Ability to withdraw consent",
          "Secure image transmission and storage",
          "Restricted internal access",
          "Deletion controls",
          "No secondary data use without permission",
          "Clear distinction between cosmetic guidance and medical diagnosis",
        ],
      },
      {
        title: "Business Metrics & Growth Logic",
        body: "These are proposed metrics to validate, not achieved results.",
        subsections: [
          {
            title: "Customer Acquisition Cost",
            body: "Measure whether the interactive analysis experience helps attract users more efficiently than conventional product advertising.",
          },
          {
            title: "Conversion Rate",
            body: "Measure how many users move from analysis to product-detail views, cart actions, and completed purchases.",
          },
          {
            title: "Customer Lifetime Value",
            body: "Track whether personalised follow-up, routine recommendations, and cross-category offerings increase repeat engagement and purchasing over time.",
          },
          {
            title: "Retention",
            body: "Evaluate whether users return to monitor changes, update routines, or review new recommendations.",
          },
          {
            title: "Recommendation Acceptance",
            body: "Measure whether users understand and engage with the recommended products, rather than only viewing the analysis result.",
          },
        ],
      },
      {
        title: "Competitive Advantage",
        body: "The proposed competitive advantage is not only the AI scan itself but the combination of a convenient LINE-based or mobile experience, understandable analysis, personalised product recommendations, consented longitudinal user history, commerce integration, potential wellness and nutrition expansion, and a feedback loop between user needs and future product development. As the platform learns from consented user interactions, it could provide a more continuous and personalised experience than one-time generic recommendation tools.",
      },
      {
        title: "My Role & Key Learning",
        body: "My role focused on UX/UI design, product-flow planning, and connecting the AI concept with the business and commerce experience. This project strengthened my ability to connect user needs, AI capabilities, commercial goals, and privacy requirements within one product concept. I learned that a successful AI product requires more than a technically interesting feature: it also needs a clear customer journey, user trust, a realistic business model, measurable validation goals, and careful communication of the system’s limitations.",
        points: [
          "Defining the target-user journey",
          "Structuring the skin-analysis flow",
          "Designing the recommendation and commerce experience",
          "Creating the mobile UI prototype in Figma",
          "Considering trust, consent, and PDPA-related requirements",
          "Aligning the user experience with business goals",
          "Discussing ideas and improvements with the internship team",
        ],
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
        title: "Challenge",
        body: "Floor-plan sketches can be incomplete, inconsistent, or difficult to prepare for further digital use. This may create additional effort when converting early design ideas into structured visual information.",
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
        title: "Proposed Solution",
        body: "The concept combines AI-assisted image interpretation, computer vision, and digital visualisation to explore a more accessible way of converting rough floor-plan inputs into usable digital outputs.",
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
        title: "My Contribution",
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
        title: "Tools & Technologies",
        body: "Figma, FigJam, Python, Computer Vision, GroundingDINO, SAM, YOLO, Three.js, and AI-assisted research tools.",
      },
      {
        title: "Outcome / Key Learning",
        body: "The project strengthened my experience in combining product thinking, UX/UI design, and emerging AI technologies within an industry-focused challenge. It also helped me practise presenting a complex technical concept in a clear and user-centred way.",
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
