export type Role = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  location?: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
  logoAlt?: string;
  centerUrl?: string;
};

export type Education = {
  school: string;
  credential: string;
  dates: string;
  detail?: string;
};

export const summary = `Project Manager and Engineer-in-Training (EIT) with capital and maintenance project ownership from initiation through close-out. Experienced with schedules and budgets (including programs over $300M), procurement, contract administration, change control, and stakeholder reporting.

I also cofound and operate Code Ninjas Central Edmonton, delivering kids' coding and STEM programs for ages ~5–14, and founded Maintello, a SaaS/AI implementation firm helping organizations adopt AI for operational pain. Maintello uses AI-assisted workflows with human approval on consequential sends and is building its digital presence before scaling acquisition.

Seeking remote or hybrid Project Manager roles. APEGA EIT. PMP Eligible only; not PMP certified.`;

export const shortIntro =
  "I deliver capital and maintenance projects end-to-end — schedule, budget, procurement, and clear stakeholder communication — across industrial and civil environments.";

export const experience: Role[] = [
  {
    title: "Project Manager",
    company: "Kandrea Insulation",
    dates: "Sep 2026 – Present",
    logo: "/logos/kandrea.png",
    logoAlt: "Kandrea Insulation logo",
    bullets: [
      "Own capital and maintenance projects (insulation/scaffolding) from initiation through close-out.",
      "Lead multidisciplinary teams on scope, schedule, cost, quality, and safety.",
      "Run procurement, contract administration, change control, and stakeholder reporting.",
      "Provide field leadership and technical direction as appropriate.",
    ],
  },
  {
    title: "Cofounder, Owner & Operator",
    company: "Code Ninjas Central Edmonton",
    dates: "Sep 2026 – Present",
    location:
      "Unit 273, Bonnie Doon Shopping Centre, 8330 82 Ave NW, Edmonton, AB",
    image: "/images/code-ninjas-education.png",
    imageAlt:
      "Illustration of kids learning to code at a Code Ninjas education center",
    logo: "/logos/codeninjas.svg",
    logoAlt: "Code Ninjas logo",
    centerUrl: "https://www.codeninjas.com/central-edmonton-ab-ca",
    bullets: [
      "Own and operate Code Ninjas Central Edmonton at Bonnie Doon Shopping Centre: facility operations, staffing, scheduling, parent and stakeholder communication, and day-to-day service delivery.",
      "Lead delivery of kids' STEM education (coding, robotics, and AI foundations for ages 5–14) across CREATE, JR, camps, and academies: oversee instructor delivery, curriculum fidelity, student progress, and a safe learning environment.",
      "Project-manage center growth initiatives — community outreach, local events, and partnerships — from planning through execution while protecting program quality and customer experience.",
      "Run vendor, cash flow, and invoice coordination for the center; set an operational cadence and align staff around delivery and enrollment outcomes.",
      "Build and lead instructor and staff teams for consistent quality across after-school classes, camps, and related offerings.",
    ],
  },
  {
    title: "Founder",
    company: "Maintello",
    dates: "Sep 2026 – Present",
    image: "/images/maintello-ai.png",
    imageAlt:
      "Illustration of Maintello AI implementation and automation workflows",
    logo: "/logos/maintello-mark.png",
    logoAlt: "Maintello hex mark",
    bullets: [
      "Founded Maintello, an AI implementation firm that helps organizations adopt AI to solve operational pain rather than chase tools.",
      "Define the offer, delivery process, and lean tool stack for AI automation implementations under operator constraints (~20 hrs/week capacity discipline).",
      "Design and operate AI-assisted workflows and multi-agent support systems to research, draft, and deliver client-facing work while keeping human approval on consequential sends and publishes.",
      "Build the company’s digital presence and positioning (offer + landing) as the foundation before scaling external client acquisition.",
    ],
  },
  {
    title: "Project Manager",
    company: "Arpi’s North Mechanical",
    dates: "2025 – 2026",
    logo: "/logos/arpis.png",
    logoAlt: "Arpi’s North logo",
    bullets: [
      "Managed mechanical-focused maintenance and enhancement capital projects, leading teams to meet deliverables, cost, and schedule targets.",
      "Coordinated planning and execution across stakeholders to keep scope, budget, and timeline aligned through delivery.",
    ],
  },
  {
    title: "Senior Project Coordinator",
    company: "Graham Construction",
    dates: "May 2022 – May 2025",
    location: "Edmonton, Alberta",
    logo: "/logos/graham.png",
    logoAlt: "Graham Construction logo",
    bullets: [
      "Developed and maintained project schedules and budgets on large civil/industrial programs, including support for budgets over $300 million.",
      "Acted as lead project coordinator on the Terwillegar Drive Stage 2 (TDS2) RVB Expansion: quality control, documentation, field conflict resolution, craft/subcontractor coordination, estimating, budgeting, forecasting, and procurement.",
      "Managed Subcontract Change Orders (SCOs) for multiple entities and oversaw monthly subtrade invoices of approximately $1.75M.",
      "Oversaw timekeeping for a peak civil workforce of ~100 employees; reviewed ~192,000 man-hours in InEight for accuracy and process improvement.",
      "Managed Non-Compliance Reports (NCRs) and turnover binders; drove resolution of open NCRs and turnover packages toward schedule commitments.",
      "Supported Cargill crushing plant work (Regina, SK; Graham engagement from Aug 2021) with change orders, QA/QC against drawings, take-offs/estimates, quantity tracking, and procurement of materials, tools, and rentals.",
      "Used Toolbox and contract review to clarify subcontract inclusions/exclusions and strengthen change-order estimates.",
    ],
  },
  {
    title: "Project Engineer / Corrosion Project Manager (EIT)",
    company: "TC Energy",
    dates: "May 2020 – 2022",
    location: "Calgary, Alberta",
    logo: "/logos/tcenergy.svg",
    logoAlt: "TC Energy logo",
    bullets: [
      "Delivered remediation and corrosion-related project support as an Engineer-in-Training, providing technical guidance and engineering interface with internal teams and external contractors.",
      "Helped ensure field execution followed designs and specifications; coordinated with environmental, regulatory, and operations stakeholders as required.",
    ],
  },
];

export const earlierExperience: Role[] = [
  {
    title: "Public Relations Officer",
    company: "Canadian Armed Forces",
    dates: "Nov 2019 – Aug 2021",
    location: "Greater Calgary · Part-time",
    bullets: [
      "Served part-time as a Public Relations Officer in the Canadian Armed Forces.",
    ],
  },
  {
    title: "Infantry Officer",
    company: "Canadian Armed Forces",
    dates: "May 2018 – Aug 2021",
    location: "Regina, SK · Part-time",
    bullets: [
      "Served part-time as an Infantry Officer in the Canadian Armed Forces.",
    ],
  },
  {
    title: "President, Director",
    company: "University of Regina Society of Petroleum Engineers",
    dates: "Apr 2018 – May 2019",
    bullets: [],
  },
  {
    title: "RESS Energy Bowl Team Lead",
    company: "Alberta Student Energy Conference (ASEC)",
    dates: "Jan 2019 – Mar 2019",
    bullets: [],
  },
  {
    title: "Corrosion Engineer Technician",
    company: "PureHM (formerly Hunter McDonnell Pipeline Services)",
    dates: "Jul 2014 – Dec 2016",
    location: "Canada / USA",
    bullets: [],
  },
];

/** Companies for the "Previously at" logo row (display order). */
export const previouslyAt = [
  { company: "Kandrea Insulation", logo: "/logos/kandrea.png", alt: "Kandrea Insulation" },
  { company: "Code Ninjas", logo: "/logos/codeninjas.svg", alt: "Code Ninjas" },
  { company: "Maintello", logo: "/logos/maintello.png", alt: "Maintello" },
  { company: "Arpi’s North", logo: "/logos/arpis.png", alt: "Arpi’s North" },
  { company: "Graham Construction", logo: "/logos/graham.png", alt: "Graham Construction" },
  { company: "TC Energy", logo: "/logos/tcenergy.svg", alt: "TC Energy" },
];

export const education: Education[] = [
  {
    school: "University of Regina",
    credential: "B.A.Sc. (Co-op), Petroleum Engineering",
    dates: "2017–2022",
  },
  {
    school: "NAIT",
    credential: "Petroleum Engineering Technology",
    dates: "2012–2014",
    detail: "Activities: Petroleum Engineering Club, ASET",
  },
  {
    school: "Coursera",
    credential: "Google Project Management Certificate",
    dates: "Jul 2023–Present",
    detail: "In progress / grade pending",
  },
];

export const certifications = [
  "Engineer-in-Training (EIT) — APEGA",
  "PMP Eligible (not certified)",
  "CP 1 Cathodic Protection Tester — NACE International (Issued Jan 2015)",
  "Basic Corrosion — NACE International (Issued Jan 2015)",
];

export const volunteering = [
  "Graham Indigenous Engagement — volunteer attendee, 2021–2022",
  "President of Industry Relations Committee — U of R SPE | Jan 2018 – May 2019",
  "Ambassador Leader — University of Regina | Sep 2017 – Apr 2019",
  "Vice President — Petroleum Club | Sep 2012 – Apr 2014",
];

export const languages = ["English", "Tagalog"];

export const howIWork = [
  {
    title: "Delivery-first",
    body: "I frame decisions around scope, schedule, cost, and safety — then communicate clearly so teams stay aligned.",
  },
  {
    title: "Controls that scale",
    body: "Schedules, forecasts, change orders, and close-out packages that hold up on large programs and lean teams alike.",
  },
  {
    title: "Field + office bridge",
    body: "Comfortable coordinating craft, subcontractors, clients, and internal stakeholders from kickoff through turnover.",
  },
  {
    title: "Builder mindset",
    body: "Operator experience founding STEM education and AI implementation work — practical, capacity-aware, and outcome-focused.",
  },
];

export const skillGroups = [
  {
    label: "Project controls",
    items: [
      "Scheduling",
      "Budgeting",
      "Forecasting",
      "Change management",
      "SCO / change orders",
      "Procurement",
      "Contract administration",
      "QA/QC",
      "Close-out",
    ],
  },
  {
    label: "Tools",
    items: [
      "Primavera P6",
      "InEight",
      "Procore",
      "Autodesk Construction Cloud",
      "Bluebeam / Bluebeam Studio",
      "Visio",
      "Microsoft Teams",
      "Word",
      "Excel",
      "PowerPoint",
      "Outlook",
    ],
  },
  {
    label: "Leadership / business",
    items: [
      "Multicultural team leadership",
      "Stakeholder communication",
      "Public speaking",
      "Subcontractor oversight",
      "Field + office coordination",
      "Center operations",
      "Kids' STEM education delivery",
      "AI implementation",
      "Entrepreneurship",
    ],
  },
];
