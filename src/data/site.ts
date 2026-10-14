// Single source for site copy. Positioning follows company/KAELENCE_BRAND_AND_COMPANY.md:
// problem → capability → solution → technology.

export const site = {
  name: 'Kaelence',
  positioning: 'Engineering for complex technical systems.',
  statement: ['Engineering systems.', 'Engineering intelligence.', 'Engineering teams.'],
  description:
    'Kaelence is an engineering company for complex technical systems. We design and build backend platforms, apply AI to real operations, and connect companies with specialized engineering talent.',
  // Único canal de contacto por ahora.
  email: 'kaelence01@gmail.com',
  year: 2026,
};

export const nav = [
  { href: '/#systems', label: 'Systems' },
  { href: '/#ai', label: 'AI' },
  { href: '/#talent', label: 'Talent' },
  { href: '/#pods', label: 'Pods' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#approach', label: 'Approach' },
];

export type CapCode = 'SYS' | 'AI' | 'TAL' | 'POD';

export const problems: { text: string; route: CapCode }[] = [
  { text: 'Our platform slows down every time traffic grows.', route: 'SYS' },
  { text: 'One service keeps taking everything else down with it.', route: 'SYS' },
  { text: 'Cloud spend is growing faster than usage.', route: 'SYS' },
  { text: 'The monolith has become the bottleneck for every team.', route: 'SYS' },
  { text: 'Our AI prototype works in a demo, not in production.', route: 'AI' },
  { text: 'We need AI inside an existing product without breaking it.', route: 'AI' },
  { text: "We've been trying to hire a senior backend engineer for months.", route: 'TAL' },
  { text: 'We need more engineering capacity than we can hire in time.', route: 'POD' },
];

export const capabilities = [
  {
    id: 'systems',
    code: 'SYS · 01',
    short: 'SYS',
    name: 'Systems Engineering',
    headline: 'Build systems that scale.',
    body: 'We design, build and evolve backend platforms where reliability, performance and scale matter — and we stay accountable for how they behave in production.',
    areasLabel: 'Areas',
    areas: [
      'Backend engineering',
      'Platform engineering',
      'Distributed systems',
      'Event-driven architectures',
      'Data-intensive systems',
      'Cloud infrastructure',
      'Performance engineering',
      'Reliability',
      'System modernization',
      'Technical migrations',
    ],
    methodLabel: 'Lifecycle',
    method: ['Understand', 'Analyze trade-offs', 'Design', 'Build', 'Deploy', 'Observe', 'Optimize', 'Evolve'],
    tools: ['Go', 'Rust', 'Java', 'Python', 'PostgreSQL', 'Kafka', 'AWS', 'Kubernetes'],
  },
  {
    id: 'ai',
    code: 'AI · 01',
    short: 'AI',
    name: 'Applied AI',
    headline: 'Engineer intelligence into products.',
    body: "AI treated as an engineering discipline: designed around real data, evaluated before it ships, and operated like any other production system. We use it where it improves a system, a product or an operation — not because it's fashionable.",
    areasLabel: 'Areas',
    areas: [
      'LLM applications',
      'AI agents',
      'RAG & context systems',
      'Intelligent workflows',
      'Automation',
      'AI in existing software',
      'Evaluation systems',
      'AI infrastructure',
      'Model & API orchestration',
    ],
    methodLabel: 'Discipline',
    method: ['Design around models', 'Manage data & context', 'Build evaluation', 'Control cost', 'Operate in production'],
    tools: ['Python', 'TypeScript', 'LLM APIs', 'Vector search', 'Eval pipelines', 'Observability'],
  },
  {
    id: 'talent',
    code: 'TAL · 01',
    short: 'TAL',
    name: 'Technical Talent',
    headline: 'Find engineers who understand engineering.',
    body: 'Technical recruiting done by engineers. We evaluate depth, architecture, production experience, ownership and real seniority — not keywords on a CV.',
    areasLabel: 'Profiles',
    areas: [
      'Backend engineers',
      'Platform engineers',
      'Cloud engineers',
      'AI engineers',
      'Software engineers',
      'Distributed systems specialists',
      'Senior & Staff engineers',
    ],
    methodLabel: 'Evaluation',
    method: [
      'Understand the real work',
      'Evaluate technical depth',
      'Recognize production experience',
      'Assess architecture judgment',
      'Separate real from nominal seniority',
    ],
    tools: [],
  },
] as const;

export const pod = {
  code: 'POD · 01',
  name: 'Embedded Engineering',
  headline: 'Extend your engineering capacity.',
  body: 'A senior Kaelence engineer and specialists from our network, integrated directly into your team. Not staffing, not a fixed-scope project — a technical partner that designs, executes and grows with the work.',
  parts: [
    { k: 'Lead', v: 'A senior Kaelence engineer, accountable for the technical outcome.' },
    { k: 'Network', v: 'Specialists selected for the problem, evaluated by engineers.' },
    { k: 'Context', v: 'Working inside your codebase, rituals and roadmap.' },
    { k: 'Elastic', v: 'Scale the pod up or down as the work changes.' },
  ],
};

export const principles = [
  { name: 'Precision', text: 'Design with intent.' },
  { name: 'Simplicity', text: 'Remove complexity that does not earn its place.' },
  { name: 'Systems thinking', text: 'Understand how components interact, not just how they work alone.' },
  { name: 'Reliability', text: 'Design for production from the first decision.' },
  { name: 'Scalability', text: 'Prepare systems to grow without adopting complexity prematurely.' },
  { name: 'Pragmatism', text: 'Choose technology for the problem, never for the trend.' },
  { name: 'Ownership', text: 'Take responsibility for the technical outcome, not just the implementation.' },
];

export const clients = [
  { k: 'Companies', v: 'B2B SaaS, fintech, infrastructure and AI', note: 'Software companies with a significant backend.' },
  { k: 'Teams', v: 'Roughly 20–200 engineers', note: 'Large enough for hard problems, small enough to move.' },
  { k: 'Stage', v: 'Seed to Series C', note: 'Growing faster than the systems underneath.' },
  { k: 'Region', v: 'United States & Canada', note: 'Remote-native collaboration.' },
];

export const contrasts = [
  { not: 'Body shop', is: 'Accountable engineering' },
  { not: 'Keyword matching', is: 'Technical evaluation' },
  { not: 'AI for its own sake', is: 'AI where it improves the system' },
  { not: 'Defined by a stack', is: 'Technology agnostic, engineering opinionated' },
];

// Projects. To publish one: set status to 'live' and fill url (and repo if it is public).
// A 'pending' project renders as a placeholder with no outbound link.
export type ProjectStatus = 'pending' | 'live';

export interface Project {
  code: string;
  name: string;
  summary: string;
  capabilities: CapCode[];
  stack: string[];
  status: ProjectStatus;
  url?: string;  // public deployment
  repo?: string; // GitLab repository, only if public
}

export const projects: Project[] = [
  {
    code: 'PRJ · 01',
    name: 'Project in preparation',
    summary: 'Currently being prepared for deployment. Scope, architecture and results will be published at launch.',
    capabilities: [],
    stack: [],
    status: 'pending',
  },
];
