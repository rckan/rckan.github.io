// Site content. All facts here are sourced from Rachel's resume (SU26) —
// keep this file as the single source of truth when updating the site.

export const profile = {
  name: 'Rachel Kan',
  role: 'Software Engineer & CS Researcher',
  location: 'Ithaca, NY',
  email: 'rk778@cornell.edu',
  github: 'https://github.com/rckan',
  linkedin: 'https://www.linkedin.com/in/r-kan',
  resumeHref: '/resume.pdf',
  resumeDownloadName: 'rachel_kan_resume.pdf',
}

export const about = `I'm a junior studying Computer Science at Cornell's College of Engineering, minoring
in Artificial Intelligence and Business. My work sits at the intersection of applied
ML and systems engineering — recent projects range from building a 4,000-node
knowledge graph out of unstructured news text to shipping a real-time C++/Qt
command-and-control interface. I currently TA two of Cornell's core CS courses and
serve on the executive board of Women in Computing at Cornell.`

export const aboutStats = [
  { label: 'GPA', value: '3.87' },
  { label: 'Graduating', value: 'May 2028' },
  { label: 'Based in', value: 'Ithaca, NY' },
]

export interface ExperienceItem {
  role: string
  org: string
  location: string
  date: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Research Assistant',
    org: 'Syracuse University — Text Analytics for Social Scientists (NSF/DOD-funded)',
    location: 'Syracuse, NY',
    date: 'Jun 2026 – Aug 2026',
    bullets: [
      'Engineered a Python pipeline that turned unstructured solar-energy news into a 4,002-node, 5,127-edge knowledge graph using GPT-4o, with domain-specific filtering to cut LLM inference costs',
      'Built entity resolution with Sentence-Transformers embeddings and RapidFuzz matching, then applied Clauset–Newman–Moore community detection to surface 408 communities across the global solar-energy ecosystem',
      'Presented findings at a university research poster session',
    ],
  },
  {
    role: 'Quantitative Student Analyst',
    org: 'Millennium × WICC Project',
    location: 'Ithaca, NY',
    date: 'Aug 2025 – May 2026',
    bullets: [
      'Collaborated on a 4-person team analyzing AI-sector stock trends and valuations under a Millennium technology project lead, presenting findings at Millennium headquarters',
      'Applied RoBERTa and VADER NLP models to news and social data to correlate public sentiment with AI-market fluctuations',
      'Modeled AI-bubble risk in Python (yfinance), indexing market trajectories against the Dot-Com crash and synthesizing capex, revenue multiples, and cash flow across NVIDIA, Microsoft, and OpenAI',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Arson Lab, Cornell University',
    location: 'Ithaca, NY',
    date: 'Jan 2026 – May 2026',
    bullets: [
      'Developed multi-layer perceptron and bagging models to predict stress and displacement in underground utility tunnels, in collaboration with Town+Gown: NYC',
      'Used regularization and randomized hyperparameter search to improve model generalization',
      'Delivered a practitioner-facing Jupyter Notebook tool to the research lab and collaborators',
    ],
  },
  {
    role: 'Software Engineering Intern',
    org: 'Advanced Technology Systems Company (ATSC-IES)',
    location: 'Gilbert, AZ',
    date: 'Jun 2025 – Aug 2025',
    bullets: [
      'Designed and built a touchscreen/desktop Qt-based GUI integrating real-time map views and RTSP camera feeds',
      'Visualized MIL-STD-2525 detection data with dynamic updates, clustering, and contextual interaction',
      'Developed C++ RESTful APIs powering real-time PTZ camera control (JSON-over-RTSP) and spatial analysis tools — pin drop, viewshed, tape measure',
    ],
  },
]

export interface ProjectLink {
  href: string
  label: string
}

export interface ProjectItem {
  title: string
  date: string
  description: string
  tech: string[]
  links?: ProjectLink[]
}

export const projects: ProjectItem[] = [
  {
    title: 'FloraSense',
    date: 'Jan – May 2026',
    description:
      'A retrieval-augmented app that matches natural-language queries to flowers by meaning. Built for CS 4300 (Language and Information).',
    tech: ['Python', 'TF-IDF / SVD', 'LLM summarization', 'Web scraping'],
    links: [
      { href: 'https://florasense.4300showcase.infosci.cornell.edu/', label: 'Live demo' },
      { href: 'https://github.com/zhmee/FloraSense', label: 'Source' },
    ],
  },
  {
    title: 'This website',
    date: '2026',
    description:
      'A single-page site built and deployed from scratch — React + TypeScript on Vite, shipped to GitHub Pages via a GitHub Actions CI/CD pipeline.',
    tech: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    links: [{ href: 'https://github.com/rckan/rckan.github.io', label: 'Source' }],
  },
]

export const skills = {
  Languages: ['Python', 'Java', 'OCaml', 'C', 'JavaScript / TypeScript', 'HTML / CSS', 'QML'],
  'Frameworks & Tools': ['PyTorch', 'Git', 'Jupyter', 'LaTeX', 'VS Code', 'IntelliJ'],
}

export const spokenLanguages = ['Mandarin (conversational)', 'Spanish (professional fluency)']

export const education = {
  school: 'Cornell University, College of Engineering',
  degree: 'B.S. in Computer Science · Minors in Artificial Intelligence & Business (intended)',
  date: 'Expected May 2028',
  location: 'Ithaca, NY',
  coursework: [
    'Honors Object-Oriented Design & Data Structures',
    'Data Structures & Functional Programming',
    'Discrete Structures',
    'Probability and Statistics',
    'Foundations of AI Reasoning and Decision-Making',
    'Intro to Machine Learning',
    'Intro to Analysis of Algorithms',
    'Language and Information',
    'Computer System Organization and Programming',
  ],
}

export interface LeadershipItem {
  role: string
  org: string
  date: string
}

export const leadership: LeadershipItem[] = [
  { role: 'Teaching Assistant, CS 3700/5700 — Foundations of AI Reasoning and Decision-Making', org: 'Cornell University', date: 'Fall 2026' },
  { role: 'Teaching Assistant, CS 4820/5820 — Introduction to Analysis of Algorithms', org: 'Cornell University', date: 'Jan – May 2026' },
  { role: 'Executive Board, VP of Academic Team', org: 'Women in Computing at Cornell (WICC)', date: 'May 2026 – Present' },
  { role: 'Executive Board, Underclassmen Outreach Co-Director', org: 'Women in Computing at Cornell (WICC)', date: 'Aug 2025 – May 2026' },
]
