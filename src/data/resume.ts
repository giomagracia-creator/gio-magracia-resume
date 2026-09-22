export type Role = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
};

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
    label: "Leadership",
    items: [
      "Multicultural team leadership",
      "Stakeholder communication",
      "Subcontractor oversight",
      "Field + office coordination",
    ],
  },
];
