export const site = {
  name: "Keisuke Shigenaga",
  role: "Full-Stack Software Engineer",
  tagline: "Precision in Routine, Clarity in Execution.",
  bio: "Full Stack Software Engineer with 5+ years of experience in Java, C#/.NET, PHP, and Modern Frontend Frameworks (React, Vue.js). Currently based in Vancouver and authorized to work in Canada.",
  strengths: [
    "Specialized in modernizing legacy systems and optimizing high-availability financial platforms, with a proven ability to lead technical QA initiatives.",
    "Committed to writing clean, maintainable code using SOLID principles and industry best practices.",
    "Mastered Vue.js within a week to lead the migration of a mission-critical disaster response system, delivering the project under an accelerated 3-month deadline.",
  ],
  email: "kshigenaga5@gmail.com",
  social: {
    github: "https://github.com/monaka-13",
    linkedin: "https://www.linkedin.com/in/keisuke-shigenaga-501848342/",
    leetcode: "https://leetcode.com/u/yjSibJwSam/",
  },
} as const;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["Vue.js", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Java",
      "C#",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQL Server",
    ],
  },
  {
    title: "Framework / Libraries",
    items: [
      "Spring Boot",
      "Spring MVC",
      ".NET Core",
      "Vue.js (2/3)",
      "React",
      "CakePHP",
    ],
  },
  {
    title: "Cloud / DevOps",
    items: [
      "AWS basics(EC2, S3, Lambda, RDS, CloudWatch etc.)",
      "Jenkins",
      "Git",
      "Vagrant",
    ],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server"],
  },
  {
    title: "Others",
    items: [
      "Agile/Scrum",
      "JUnit",
      "Unit Testing",
      "Postman",
      "Cognitive Flexibility",
      "Root Cause Analysis",
    ],
  },
];

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  date: string;
  location?: string;
  techniques: string[];
  /** Short overview shown on the card (about 200-300 Japanese characters) */
  summary: string;
  /** Long, detailed accomplishments shown in the dialog as bullet points */
  details: string[];
};

export type PersonalProjectItem = {
  id: string;
  title: string;
  githubUrl: string;
  techniques: string[];
  /** Short overview shown on the card */
  summary: string;
  /** Long, detailed accomplishments shown in the dialog as bullet points */
  details: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-0",
    company: "AZing Co., Ltd.",
    role: "Full Stack Software Engineer",
    date: "Jan 2020 – Jun 2024 ",
    location: "Tokyo, Japan",
    techniques: [],
    summary: "Worked as aTechnical consultant",
    details: [
      "Technical consultant deployed to major enterprise clients across finance and public sectors.",
    ],
  },
  {
    id: "exp-1",
    company: "TOPPAN Edge Inc.",
    role: "Backend Tech Lead / Systems Engineer",
    date: "Jan 2023 – Jun 2024",
    location: "Tokyo, Japan",
    techniques: [
      "C#",
      "ASP.NET Core",
      "React",
      "AWS CloudWatch",
      "AWS Lambda",
      "MySQL",
      "Power Platform",
    ],
    summary:
      "An unified platform for managing administrative tasks like address changes online. It allows users to update info across banks, insurance, and utilities simultaneously, ensuring efficiency and accuracy. As a full-stack engineer supporting 30+ banks and 10,000 users, I managed tech migrations, streamlined fault investigations, and achieved seamless team knowledge sharing.",
    details: [
      "Led Tier-3 technical support for a high-volume financial platform connecting 30+ banks and 10,000+ users. Reduced MTTR by 40% by implementing structured logging in ASP.NET Core and unique Transaction IDs for rapid defect isolation in AWS CloudWatch.",
      "Directed end-to-end development for large-scale sales promotion campaigns, successfully managing a 30% traffic surge. Acted as a technical bridge to stakeholders, translating complex logic into business roadmaps.",
      "Optimized a hybrid data environment (AWS Batch & Windows Task Scheduler) to synchronize data between AWS RDS (MySQL) and on-premise SQL Server. Identified and resolved legacy bugs, ensuring 100% data consistency for user restoration.",
      "Enhanced team productivity by developing internal knowledge tools using Power Platform (Power Automate, Power Apps). Enabled non-technical members to perform self-service data analysis via a shared SQL knowledge base, fostering a data-driven culture.",
      "Managed regulatory system updates regarding government API changes for address/postal formats. Re-aligned application logic under tight deadlines to prevent financial transaction failures.",
      "Oversaw QA and code reviews for new features, focusing on long-term maintainability. Leveraged production feedback to plan and implement next-phase system optimizations.",
    ],
  },
  {
    id: "exp-2",
    company: "NTT DATA Group Corporation",
    role: "R&D Engineer / Technical Architect",
    date: "May 2022 – Dec 2022",
    location: "Tokyo, Japan",
    techniques: ["C#", ".NET Core", "Power Automate", "OutSystems", "OSS"],
    summary:
      "Evaluated the viability of code-gen platforms like OutSystems and .NET. Identified architectural risks by using decompilation for reverse engineering. Concluded that while useful for internal tools, they pose scalability risks for core systems, prioritizing long-term stability over short-term velocity.",
    details: [
      "Benchmarked enterprise and open-source ecosystems to align technology adoption with specific business needs, ensuring a data-driven approach to tool selection.",
      "Evaluated the technical viability of code-generation platforms, including OutSystems (C#/.NET based), by auditing generated source code to identify architectural bottlenecks and maintainability risks.",
      "Demonstrated deep technical insight by manually analyzing abstracted development environments, identifying the gap between “functional” code and enterprise-grade maintainability.",
      "Provided strategic recommendations on business model alignment, concluding that while automated platforms excel in rapid tooling, they required fundamental shifts in business strategy to ensure long-term scalability.",
    ],
  },
  {
    id: "exp-3",
    company: "INFOCOM CORPORATION",
    role: "Full Stack Software Engineer",
    date: "Dec 2021 – Apr 2022",
    location: "Tokyo, Japan",
    techniques: ["Vue.js 3", "Java", "Spring Boot", "MySQL", "AWS"],
    summary:
      "Spearheaded a legacy system migration by adopting Vue 3, achieving proficiency in one week and delivering core features under a tight timeline. Managed API integrations, audited Java backends to resolve critical defects, and prototyped UI components to ensure high velocity and system stability.",
    details: [
      "Modernized a legacy disaster response system using Vue.js 3, delivering the highest volume of features within a tight 3-month agile timeline.",
      "Mastered Vue 3 within one week to lead the frontend migration, achieving full proficiency despite no prior experience with the modern JavaScript framework.",
      "Proposed UI layout optimizations by translating design mockups into functional Vue.js components, acting as a technical bridge between design and engineering teams.",
      "Integrated APIs by defining JSON schemas with backend teams, ensuring seamless communication and data integrity through comprehensive Postman test suites.",
      "Resolved complex defects in Java backend code by performing deep-dive audits, providing actionable refactoring proposals to prevent critical system failures.",
    ],
  },
  {
    id: "exp-4",
    company: "INFOCOM CORPORATION",
    role: "Software Engineer",
    date: "Jan 2021 – Mar 2022",
    location: "Tokyo, Japan",
    techniques: ["CakePHP", "PostgreSQL", "AWS"],
    summary:
      "Orchestrated a CakePHP 2 to 4 migration for a custom CMS, ensuring parity by auditing undocumented legacy code. Leveraged Java patterns to master the ORM, developed utility functions for version gaps, and authored the team playbook to standardize the roadmap and ensure long-term stability.",
    details: [
      "Led the architectural upgrade of a customized CMS from CakePHP 2 to 4, ensuring 100% feature parity by auditing undocumented legacy source code.",
      'Authored the "Migration Playbook" for a 6-person team, establishing coding standards and a roadmap that prevented architectural drift throughout the transition.',
      "Accelerated development velocity by applying Java design patterns to PHP/ORM environments, enabling rapid mastery of a new tech stack and complex business logic.",
      "Streamlined the migration process by translating complex business requirements into high-security technical tasks, maintaining system integrity during the full-cycle implementation.",
    ],
  },
  {
    id: "exp-5",
    company: "AZing Co., Ltd.",
    role: "Java Software Engineer",
    date: "Apr 2020 – Jan 2021",
    location: "Tokyo, Japan",
    techniques: [
      "Java",
      "Liferay",
      "PostgreSQL",
      "Vagrant",
      "CentOS",
      "SCSS",
      "Freemarker",
    ],
    summary:
      "Led the shift from custom builds to a scalable enterprise portal by developing reusable Java components. Prioritized maintainability via SOLID principles and JUnit testing, while ensuring clarity through PlantUML. My full-stack expertise optimized deployment and team-wide productivity.",
    details: [
      "Led the technical transition of a web portal service from client-specific builds to a scalable enterprise product, enabling the company to shift from a service-based to a product-based business model.",
      "Developed reusable Java components on the Liferay platform, reducing deployment time for new manufacturing and academic clients.",
      "Architected complex workflows and system specifications using PlantUML and Figma, ensuring technical clarity and cross-team alignment before implementation.",
      "Managed full-stack environments, including Vagrant/CentOS setup, PostgreSQL database management, and frontend customization with SCSS and Freemarker.",
      "Reduced testing phase duration by 30% by implementing automated JUnit tests and refactoring legacy logic into decoupled, testable modules.",
    ],
  },
];

export const personalProjects: PersonalProjectItem[] = [
  {
    id: "proj-1",
    title: "Portfolio",
    githubUrl: "https://github.com/monaka-13/Portfolio",
    techniques: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "Architected a scalable portfolio using React/TypeScript, emphasizing a data-driven information hierarchy to deliver dense technical content without compromising UX. Maximized development velocity through an AI-integrated workflow, utilizing LLMs for rapid prototyping, complex debugging. Established a clean architecture by decoupling data models from UI components, ensuring high reusability and a foundation that supports content expansion, such as automated project ingestion.",
    details: [
      "Designed an information hierarchy using technology tags and detailed modals to enable recruiters to quickly extract key technical competencies.",
      "Implemented a modern tech stack featuring React and TypeScript, leveraging AI-assisted workflows to accelerate development from conception to deployment.",
      "Optimized mobile responsiveness and legibility by implementing advanced scroll controls and dynamic layout adjustments within UI components.",
      "Decoupled data structures from the UI layer to enhance maintainability, ensuring the architecture supports seamless content updates and future scalability.",
      "Engineered granular, reusable UI components to provide a flexible foundation for expanding the portfolio with future project or case study modules.",
    ],
  },
  {
    id: "proj-2",
    title: "AI Agent News",
    githubUrl: "https://github.com/monaka-13/ai-agent-news",
    techniques: [
      "NestJS",
      "TypeScript",
      "OpenAI API",
      "Jina Reader",
      "REST API",
    ],
    summary:
      "Architected a high-performance TypeScript and NestJS API designed to automate corporate communication workflows. The engine integrates OpenAI and Jina Reader APIs to transform raw text or URLs into structured, PR-ready JSON content. Built with a focus on maintainability and security, the system features a decoupled pipeline for content retrieval and LLM processing, ensuring consistent output across diverse data sources.",
    details: [
      "Engineered a unified content-drafting pipeline that standardizes data from disparate sources, raw text or public URLs, into consistent, structured JSON outputs including summaries, email templates, and key insights.",
      "Integrated the Jina Reader HTTP API to separate content retrieval from generation logic, opting for a managed extraction service over fragile HTML scraping to ensure long-term system reliability.",
      "Established a clean, modular architecture using NestJS, separating API contracts, business logic, and experimental modules (e.g., PR-agent scaffolding) to support future scalability and team collaboration.",
      "Ensured production-readiness by delivering comprehensive setup documentation, environment-driven configurations, and a full test suite to maintain API stability during iterative evolution.",
    ],
  },
  {
    id: "proj-3",
    title: "Slipe",
    githubUrl: "https://github.com/monaka-13/slipe-react",
    techniques: [
      "React",
      "JavaScript",
      "CSS Modules",
      "Custom Rule Engine",
      "Functional Components",
    ],
    summary:
      "A web-based implementation of the strategic board game Slipe on a 5x5 grid. The project focuses on non-trivial game logic such as directional slide movement, turn-aware validation, and win-condition checks, while keeping UI feedback intuitive through real-time move hints and contextual status messaging.",
    details: [
      "Implements a directional 'slide-to-edge' movement algorithm: pieces do not move one cell at a time, but continue in straight lines until they hit an obstacle or board boundary, requiring deterministic traversal logic for each direction.",
      "Applies a two-phase validation flow for robust UX: (1) selection validation by turn and piece ownership, then (2) targeting validation by dynamically computing legal destinations and blocking illegal states tied to star-piece protection rules.",
      "Refactors state architecture from cell-centric storage to a normalized piece-cell relationship with unique IDs, improving maintainability for piece tracking and reducing render-side complexity.",
      "Introduces hint and feedback mechanisms that visualize legal moves and provide contextual turn messages, helping users understand complex board constraints without reading external rules.",
      "Organizes code by responsibilities (Game, Board, Piece, RuleEngine, Config), separating pure game rules from rendering concerns to keep logic testable and easier to evolve.",
      "As an early-career engineer transitioning from object-oriented Java to component-based frontend architecture, the primary challenge was adopting a fundamentally different design mindset. I addressed this by applying clean-code principles learned from a Java mentor (clear responsibilities, small composable units, and explicit boundaries), which enabled me to complete the project independently. This learning foundation later translated directly into delivery speed in production: despite no prior commercial Vue experience, I ramped up on Vue within one week during a modernization project and delivered the highest feature volume in the team at that stage.",
    ],
  },
];
