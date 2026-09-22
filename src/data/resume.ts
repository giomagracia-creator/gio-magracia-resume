export type Role = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  location?: string;
  image?: string;
  imageAlt?: string;
};

export const summary =
  "Project Manager and Engineer-in-Training with hands-on ownership of capital and maintenance projects from initiation through close-out, plus experience founding and operating a kids coding education business (Code Ninjas Central Edmonton) and an AI implementation firm (Maintello). Experience leading multidisciplinary teams, managing schedules and budgets (including work on programs over $300M), procurement and contract administration, change control, and stakeholder reporting. Strong delivery record coordinating field and office teams, subcontractors, and client interfaces across industrial and civil construction environments. Seeking remote / hybrid Project Manager roles where structured delivery, cost control, and clear communication matter.";

export const experience: Role[] = [
  {
    title: "Project Manager",
    company: "Kandrea Insulation",
    dates: "2026 – Present",
    bullets: [
      "Manage insulation and scaffolding capital and maintenance projects from initiation through close-out, leading multidisciplinary teams to deliver scope, schedule, cost, quality, and safety objectives.",
      "Direct project planning, scheduling, estimating, engineering reviews, and project controls while providing field leadership and technical direction.",
      "Run procurement: bid solicitation and evaluation, contract administration, contractor onboarding, and execution strategies.",
      "Facilitate stakeholder meetings and reporting with internal departments, clients, consultants, contractors, and operations; maintain alignment on objectives, risks, and deliverables.",
      "Oversee invoicing, billing, change management, forecasting, cost control, and budget reviews; prepare estimates, technical documentation, progress reports, and close-out packages to company and regulatory standards.",
    ],
  },
  {
    title: "Cofounder, Owner & Operator",
    company: "Code Ninjas Central Edmonton",
    dates: "Present",
    location:
      "Unit 273, Bonnie Doon Shopping Centre, 8330 82 Ave NW, Edmonton, AB",
    image: "/images/code-ninjas-education.png",
    imageAlt:
      "Illustration of kids learning coding at a Code Ninjas education center",
    bullets: [
      "Own and operate the Code Ninjas Central Edmonton center: facility operations, staffing, enrollment pipeline, parent communication, and day-to-day service delivery.",
      "Deliver kids coding education programs: schedule classes, oversee instructor delivery of curriculum, track student progress, and maintain a safe, engaging learning environment.",
      "Project-manage center growth initiatives including community outreach, local event booths/demos, partnerships, and marketing campaigns from planning through execution.",
      "Run vendor, cashflow, and vendor/invoice coordination for the center; align team around enrollment and experience goals.",
      "Lead instructors and staff for consistent program quality and customer experience across classes, camps, and drop-ins.",
    ],
  },
  {
    title: "Founder",
    company: "Maintello",
    dates: "2026 – Present",
    image: "/images/maintello-ai.png",
    imageAlt:
      "Illustration of Maintello AI implementation and automation workflows",
    bullets: [
      "Founded Maintello, a SaaS and AI implementation firm that helps organizations adopt AI to solve operational pain rather than chase tools.",
      "Define the offer, delivery process, and lean tool stack for AI automation implementations under operator constraints (~20 hrs/week capacity discipline).",
      "Design and operate AI-assisted workflows and multi-agent support systems to research, draft, and deliver client-facing work while keeping human approval on consequential sends and publishes.",
      "Build the company’s digital presence and positioning (offer + landing) as the foundation before scaling external client acquisition.",
    ],
  },
  {
    title: "Project Manager",
    company: "Arpi’s North Mechanical",
    dates: "2025 – 2026",
    bullets: [
      "Managed mechanical-focused maintenance and enhancement capital projects, leading teams to meet deliverables, cost, and schedule targets.",
      "Coordinated planning and execution across stakeholders to keep scope, budget, and timeline aligned through delivery.",
    ],
  },
  {
    title: "Senior Project Coordinator",
    company: "Graham Construction",
    dates: "2022 – 2025",
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
    dates: "~2020 – 2022",
    bullets: [
      "Delivered remediation and corrosion-related project support as an Engineer-in-Training, providing technical guidance and engineering interface with internal teams and external contractors.",
      "Helped ensure field execution followed designs and specifications; coordinated with environmental, regulatory, and operations stakeholders as required.",
    ],
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
      "Subcontractor oversight",
      "Field + office coordination",
      "Center operations",
      "Kids STEM education delivery",
      "AI implementation",
      "Entrepreneurship",
    ],
  },
];
