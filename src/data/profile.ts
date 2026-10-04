export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  link?: string;
  highlights?: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl: string;
  image: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export type Education = {
  school: string;
  program: string;
  period: string;
  location: string;
  details: string;
  score?: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ProfileHighlight = {
  platform: string;
  summary: string;
  metric: string;
  link: string;
};

export type Insight = {
  title: string;
  summary: string;
  link: string;
};

export const heroContent = {
  name: "Aman Kumar",
  headline: "Software Engineer | Full-Stack Developer",
  subline:
    "Software Engineer at Saarathi Finance, building Nirnay — the in-house loan system now live across 7 states. B.Tech CSE (AI & DS) at IIIT Manipur with a CGPA of 8.0. LeetCode Knight (1906) with 1000+ problems solved.",
  availability: "Software Engineer · Saarathi Finance",
  location: "Mumbai",
  avatar: "/profile.png",
  ctaPrimary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/aman931120/",
  },
  ctaSecondary: {
    label: "View GitHub",
    href: "https://github.com/akt9802",
  },
  ctaThird: {
    label: "View Resume",
    href: "https://drive.google.com/file/d/18l79ZlWN5KROMAsdBezk6uL_QYEXv3hv/view?usp=sharing",
  },
};

export const stats = [
  { label: "LeetCode Rating", value: "1906" },
  { label: "Problems Solved", value: "1000+" },
  { label: "Codeforces Rating", value: "1455" },
  { label: "Contest Rank", value: "563" },
  { label: "CGPA", value: "8.0" },
  { label: "States Live", value: "7" },
];

export const experiences: Experience[] = [
  {
    company: "Saarathi Finance",
    role: "Software Engineer",
    period: "Aug 2025 – Present",
    location: "Mumbai",
    summary:
      "Leading frontend architecture for Nirnay, the in-house replacement for the Nucleus LOS, and shipping full-stack modules for collections, data, and telecalling.",
    highlights: ["7 states", "400+ loans / month", "50+ telecallers", "7K+ records / month"],
    bullets: [
      "Led frontend architecture and delivery for Nirnay, an initiative replacing the third-party Nucleus LOS system; designed the split-dashboard workflow and reviewed team PRs over 3 months of development, now live across 7 states and processing 400+ loan applications per month.",
      "Initialized the company’s first Next.js architecture from scratch, including the authentication flow and API layer that replaced legacy Django-template pages; proposed the BFF and reverse-proxy patterns adopted by the team.",
      "Built the full-stack Portfolio Manager module, designing 20+ REST APIs to track EMI default risk on disbursed loans, log collection call outcomes, and schedule borrower follow-ups.",
      "Delivered the Data Collection module full-stack, designing 10+ REST APIs that process 7K+ customer records per month.",
      "Built the Telecaller Workflow frontend end to end — lead, task, and supervisor views now used daily by 50+ telecallers.",
    ],
    link: "https://www.saarathifinance.com/",
  },
];

export const projects: Project[] = [
  {
    title: "Prasikshan — SSB Preparation Platform",
    description:
      "Built a full-stack SSB preparation platform with 7 test modules, currently used by 20+ active users. Features JWT authentication, OTP-based password recovery, dual-layer Redis rate limiting, Redis-based session caching, AI-powered test review via FastAPI microservice with Azure OpenAI, performance analytics, leaderboards, and an admin CMS. Containerized with Docker and Nginx.",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "JWT",
      "Tailwind CSS",
      "FastAPI",
      "Azure OpenAI",
      "Docker",
      "Nginx",
    ],
    liveUrl: "https://www.prasikshan.akt9802.in/",
    repoUrl: "https://github.com/akt9802/prasikshan",
    image: "/prasikshan.png",
  },
  {
    title: "LocalSearch++ — Local Search Engine",
    description:
      "Built a local document search engine in C++ that crawls .txt files recursively, performs text normalization, tokenization, stopword removal, and builds inverted & positional indexes for fast keyword and exact phrase search. Implemented TF-IDF relevance ranking and a CLI-based search tool with flat-file index persistence to enable index-once, query-many and faster startup by loading prebuilt indexes.",
    stack: ["C++", "Inverted Index", "TF-IDF", "File I/O"],
    repoUrl: "https://github.com/akt9802/localsearch",
    image: "https://opengraph.githubassets.com/1/akt9802/localsearch-plus-plus",
  },
];

export const education: Education[] = [
  {
    school: "Indian Institute of Information Technology, Manipur",
    program: "Bachelor of Technology (Computer Science and Engineering [AI & DS])",
    period: "2022 – 2026",
    location: "Manipur, India",
    details:
      "Coursework across data structures and algorithms, object-oriented programming, DBMS, operating systems, and computer networks.",
    score: "CGPA: 8.0",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core CS",
    items: ["Data Structures & Algorithms", "OOPs", "DBMS", "OS", "Computer Networks"],
  },
  {
    title: "Programming Languages",
    items: ["C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "CSS (Tailwind)"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Django"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Deployment",
    items: ["Docker", "Vercel", "Render", "GitHub Actions"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Figma", "Linux"],
  },
];

export const profileHighlights: ProfileHighlight[] = [
  {
    platform: "LeetCode",
    summary: "Solved 1000+ DSA problems with consistent problem-solving approach.",
    metric: "Max rating 1906 (Knight)",
    link: "https://leetcode.com/akt9802",
  },
  {
    platform: "Codeforces",
    summary: "Active competitive programmer with Specialist rank on Codeforces.",
    metric: "Max Rating 1455 (Specialist)",
    link: "https://codeforces.com/profile/akt9802",
  },
];

export const insights: Insight[] = [
  {
    title: "LeetCode Weekly Contest 460: Global Rank 563",
    summary:
      "Achieved a global rank of 563 among thousands of participants in LeetCode Weekly Contest 460.",
    link: "https://leetcode.com/akt9802",
  },
  {
    title: "GFG: Rank 1 in College",
    summary:
      "Ranked 1st in college on GeeksforGeeks, demonstrating consistent problem-solving excellence.",
    link: "https://auth.geeksforgeeks.org/user/akt9802/practice",
  },
  {
    title: "Central India Hackathon (CIH): Finalist",
    summary:
      "Achieved finalist recognition among 2,000+ teams at the Central India Hackathon.",
    link: "https://www.linkedin.com/in/aman931120/",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "akt9802@gmail.com",
    href: "mailto:akt9802@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 93112 09203",
    href: "tel:+919311209203",
  },
  {
    label: "GitHub",
    value: "github.com/akt9802",
    href: "https://github.com/akt9802",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aman931120",
    href: "https://www.linkedin.com/in/aman931120/",
  },
];
