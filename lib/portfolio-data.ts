export const site = {
  name: "Keisuke Shigenaga",
  role: "Full-Stack Software Engineer",
  tagline: "Mastering the machine through strategic insight.",
  bio: "Full Stack Software Engineer with 5+ years of hands-on experience specializing in Java, C#/.NET, and Modern Frontend Frameworks (Vue 3, React), currently based in Vancouver, BC. Proven track record in modernizing legacy systems, optimizing high-availability financial platforms, and leading technical QA initiatives. Expert in writing clean, maintainable code based on SOLID principles and navigating complex hybrid cloud environments. Successfully mastered Vue 3 within two weeks to lead the migration of a mission-critical disaster system, meeting an accelerated 3-month launch deadline. Nowadays, expanding AI skills to enhance development capabilities.",
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
    summary:
      "Strategic technical consultant deployed to major enterprise clients across finance and public sectors.",
    details: [],
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
      "Incident Management & Observability: Led Tier-3 technical support for a high-concurrency financial platform connecting 30+ major banks. Reduced MTTR and inquiry resolution time by 40% by implementing structured logging in ASP.NET Core and embedding unique Transaction/User IDs into AWS CloudWatch, enabling rapid defect isolation in production.",
      "System Ownership & Business Alignment: Directed the end-to-end development and operation of sales promotion campaign systems. Presented technical roadmaps to non-technical business stakeholders, translating complex logic into business value. Successfully managed a 30% traffic surge during peak campaigns, contributing to new user acquisition and re-engagement.",
      "Data Lifecycle & Migration: Orchestrated a hybrid data environment (AWS Batch & Windows Task Scheduler) to manage critical data flows between AWS RDS (MySQL) and on-premise SQL Server. Audited and rectified legacy scheduler specifications to ensure 100% data consistency during inactiveto-active user restoration.",
      "Crisis Resolution: Led the emergency technical response to government API updates regarding address/postal code format changes. Re-aligned application logic with external postal verification systems under tight deadlines, preventing potential financial losses and failed transactions.",
      "QA Leadership & Strategic Improvement: Oversaw comprehensive testing and code reviews for new features, focusing on long-term maintainability and exception handling. Managed the planning and implementation of next-phase system optimizations based on production feedback.",
      "Internal Tooling & Knowledge Management: Developed a custom internal CRUD tool using Power Platform to centralize technical and specification knowledge. Improved team-wide productivity by enabling non-technical members to safely query data structures via a shared SQL knowledge base, fostering a culture of self-service data analysis.",
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
      "Architectural Auditing & Reverse Engineering: Evaluated the technical viability of code-generation platforms (OutSystems, .NET-based) for enterprise-scale integration. Used decompilation tools to audit the quality of generated code, identifying architectural bottlenecks and maintainability risks inherent in abstracted development environments.",
      "Technology Governance & Strategy: Led a comparative study to determine the boundaries between native development and automated platforms. Concluded that while such platforms excel at rapid internal tooling, they posed scalability risks for core systems—a strategic insight that prioritized longterm system stability over short-term velocity.",
      "Comparative Analysis: Benchmarked enterprise and open-source ecosystems to align technology adoption with specific business needs, ensuring a data-driven approach to tool selection.",
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
      "Modernization & Tech Selection: Spearheaded the migration of a legacy disaster response system. Led the initial feasibility study to adopt Vue 3 (Composition API) over Vue 2, ensuring long-term maintainability. Despite no prior Vue experience, achieved full proficiency within one week and delivered the highest volume of features under a tight 3-month agile timeline.",
      "API Lifecycle Management: Orchestrated API integration by defining JSON schemas with backend teams. Rigorously validated endpoints using Postman, creating comprehensive test suites that ensured data integrity and seamless frontend-backend communication.",
      "Cross-Stack Bug Resolution: Performed deep-dive audits of Java backend code to resolve complex defects. Identified and documented root causes such as edge-case logic errors and potential NullPointerExceptions, providing actionable refactoring proposals that prevented critical system failures during the migration.",
      "Agile UX Prototyping: Acted as a technical bridge with the design team by rapidly translating mockups into functional Vue components. Proposed UI layout optimizations based on disaster-response usability requirements, maintaining high project velocity through proactive prototyping.",
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
      "Legacy Framework Migration (CakePHP 2 to 4): Orchestrated a large-scale architectural upgrade of a customized CMS. Navigated significant breaking changes by auditing legacy source code to reconstruct deprecated functions where no official documentation existed, ensuring 100% feature parity.",
      "Architectural Gap Analysis: Despite being early in my career and new to PHP, leveraged deep Java logic patterns to rapidly master CakePHP's internal routing and ORM. Developed custom utility functions to bridge the gap between framework versions, maintaining the integrity of the core business logic.",
      "Technical Governance & Documentation: Authored the primary 'Migration Playbook' for a 6- person engineering team. Established the migration roadmap and coding standards that served as the operational baseline, preventing architectural drift and ensuring consistency across the entire transition process.",
      "Full-Cycle Involvement: Participated in the project from the planning phase through to final implementation, translating high-level business requirements into technical migration tasks for a secure, enterprise-grade portal system.",
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
      "Product Development & Standardization: Contributed to the strategic transition of a web portal service from customized client-specific builds to a scalable enterprise product. Developed reusable Java components on the Liferay platform, enabling rapid deployment for manufacturing and academic clients.",
      "Core Java Engineering: Mastered Clean Code and SOLID principles through intensive pair programming with senior architects. Focused on long-term maintainability by implementing rigorous JUnit testing and refactoring legacy logic into decoupled, testable modules.",
      "System Design & Documentation: Spearheaded the creation of technical specifications using PlantUML, ensuring architectural clarity before implementation. This disciplined approach to documentation resolved complex logic requirements and established a streamlined development workflow for the team.",
      "Full-Stack Implementation: Managed the end-to-end stack including Vagrant/CentOS environments, PostgreSQL data persistence, and frontend customization using SCSS and Freemarker. Applied a 'think first, code later' philosophy to optimize personal and team-wide productivity.",
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
      "Developed a high-performance portfolio site using React and TypeScript to demonstrate professional engineering proficiency. Engineered a responsive UI with decoupled card-and-dialog components for seamless cross-platform consistency while showcasing complex project details and AI integrations.",
    details: [
      "Designed a strategic information hierarchy featuring overview cards with technology tags and separate detailed modals to enable recruiters to grasp key points efficiently.",
      "Demonstrated professional-grade proficiency and immediate readiness in non-commercial tech stacks by leveraging React, TypeScript, and AI-assisted programming.",
      "Optimized readability across all devices by implementing scroll control and layout width optimization within dialogs to address legibility issues in long-form experience descriptions.",
      "Enhanced maintainability and scalability for content updates by decoupling data structures into distinct summary and detail components.",
      "Engineered UI components with high reusability and granularity, ensuring a flexible architecture capable of accommodating future expansions such as Projects or Case Study sections.",
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
      "A NestJS (TypeScript) API that drafts corporate communications and PR-style copy from pasted text or public article URLs. It calls the OpenAI API and returns structured JSON—summary, email subject, email body, and bullet key points. Article URLs are fetched via the Jina Reader HTTP API instead of scraping raw HTML; a separate pr-agent module is experimental scaffolding for GitHub pull-request workflows.",
    details: [
      "Implements a content-draft pipeline: paste raw article or memo text, or supply a URL; the server optionally pulls readable content through the Jina Reader API, then runs the same LLM flow so outputs stay consistent across both entry points.",
      "Exposes REST endpoints such as POST /content-draft/process (text body) and POST /content-draft/from-url (Jina-backed fetch, http/https only, with host safety checks such as blocking localhost), aligning with README-defined contracts and limits.",
      "Produces PR-oriented drafts as JSON with fields like summary, email subject, email body, and key bullet points, driven by OpenAI models (configurable via environment variables).",
      "Separates article retrieval concerns from generation: the project does not implement ad-hoc HTML scraping; it relies on Jina Reader, with optional API keys for higher rate limits and configurable fetch timeouts.",
      "Includes a pr-agent module (experimental, largely stubbed) aimed at future GitHub pull-request review flows—explicitly documented as distinct from the PR-facing content-draft feature set.",
      "Ships with setup docs (.env.example), Nest CLI layout, and test scripts (unit and e2e) for maintainable evolution of the API surface.",
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
