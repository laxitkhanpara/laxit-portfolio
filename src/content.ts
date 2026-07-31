export const profile = {
  name: 'Laxit Khanpara',
  title: 'Software Engineer',
  email: 'laxitkhanpara3646@gmail.com',
  phone: '+91 82386 94033',
  birthday: '2003',
  location: 'Vadodara, Gujarat, India',
  resume: '/Laxit_Khanpara_CV.pdf',
  socials: {
    github: 'https://github.com/laxitkhanpara',
    linkedin: 'https://www.linkedin.com/in/laxit-khanpara',
  },
  about: `I'm a self-driven Software Engineer with 3+ years of experience designing and delivering high-throughput, low-latency enterprise applications.

I take end-to-end ownership on live B2B CPaaS platforms — Spring Boot, Kafka, React, AWS — and help engineering teams move faster with AI-assisted development workflows without sacrificing quality.`,
}

export const services = [
  {
    icon: 'code',
    title: 'Backend Engineering',
    text: 'High-throughput Spring Boot services, Kafka pipelines, multithreading, and production-grade APIs.',
  },
  {
    icon: 'web',
    title: 'Full-Stack Web',
    text: 'React + Spring Boot products with secure auth, RBAC, and clean end-to-end delivery.',
  },
  {
    icon: 'design',
    title: 'Liferay DXP',
    text: 'Enterprise portals, Client Extensions, and open-source scaffolding CLIs for Liferay developers.',
  },
  {
    icon: 'mobile',
    title: 'AI-Assisted Delivery',
    text: 'GenAI workflow adoption, Voice AI campaign systems, and measurable engineering velocity gains.',
  },
]

export const education = [
  {
    school: 'Parul Institute of Engineering and Technology',
    degree: 'B.Tech — Information Technology',
    period: '2021 — 2025',
    detail: 'CGPA: 8.39 / 10.0 · Vadodara, Gujarat',
  },
]

export const experience = [
  {
    role: 'Java Developer',
    company: 'Aixtor Technology',
    period: 'Dec 2024 — Present',
    points: [
      'Architected AI voice-agent call scheduling with concurrent pools — ~10x faster batch completion.',
      'Scaled realtime omnichannel campaign messaging using Kafka, Meta API, and Google RCS.',
      'Built automated sequential module deployment — 95% less release overhead.',
      'Led GenAI workflow training across engineering — ~30% faster feature cycles.',
      'Mentored 3+ interns on Core Java, multithreading, and distributed systems.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'CSCodeTech',
    period: 'Apr 2023 — Sep 2024',
    points: [
      'Shipped Spring Boot + React modules across 10+ application areas.',
      'Worked end-to-end on production architecture, secure access patterns, and delivery.',
    ],
  },
]

export const skills = [
  { name: 'Java / Spring Boot', level: 92 },
  { name: 'Kafka / Messaging', level: 85 },
  { name: 'React.js', level: 82 },
  { name: 'MySQL / PostgreSQL', level: 84 },
  { name: 'AWS / Docker / K8s', level: 78 },
  { name: 'Liferay DXP', level: 80 },
]

export type ProjectCategory = 'All' | 'Enterprise' | 'Open Source' | 'Hackathon' | 'Apps'

export const projects: {
  title: string
  category: Exclude<ProjectCategory, 'All'>
  blurb: string
  stack: string
  link?: string
  live?: string
}[] = [
  {
    title: 'Integrari · Voice AI / CPaaS',
    category: 'Enterprise',
    blurb: 'AI-driven ERP messaging + Voice AI campaign platform at Aixtor.',
    stack: 'Spring Boot · Kafka · React · AWS',
  },
  {
    title: 'ESM Platform',
    category: 'Enterprise',
    blurb: 'Multi-role HR portal with workflows, JWT RBAC, and LLM analytics.',
    stack: 'Spring Boot · React · PostgreSQL · LLM',
  },
  {
    title: 'Sharshah · Role Management',
    category: 'Apps',
    blurb: 'HR admin system for employees, leaves, departments, and workshifts.',
    stack: 'React · MySQL',
    link: 'https://github.com/laxitkhanpara/Role_management',
    live: 'https://role-manage.onrender.com/',
  },
  {
    title: 'GuruZone',
    category: 'Hackathon',
    blurb: '1st place Vadodara Hackathon 4.0 — personalized tutor marketplace.',
    stack: 'Spring Boot · Flutter · MySQL',
    link: 'https://github.com/laxitkhanpara/GuruZone',
  },
  {
    title: 'GiveVote · E-Voting',
    category: 'Apps',
    blurb: 'Consumer-facing digital voting experience for elections and candidates.',
    stack: 'JavaScript · Node · Express',
    link: 'https://github.com/laxitkhanpara/OnlineVotingSystem',
  },
  {
    title: 'CampusWay AR',
    category: 'Hackathon',
    blurb: '3rd place PUCode Hackathon — AR indoor campus navigation.',
    stack: 'Unity · AR Foundation · Mapbox',
    link: 'https://github.com/laxitkhanpara/CampusWay-Indoornavigation-',
  },
  {
    title: 'create-liferay-react-cx',
    category: 'Open Source',
    blurb: 'npm CLI to scaffold Liferay React Client Extensions. Featured on Liferay Blog.',
    stack: 'Java · Node · React · Liferay',
    link: 'https://github.com/laxitkhanpara/create-liferay-react-cx',
  },
  {
    title: 'create-liferay-microservice-cx',
    category: 'Open Source',
    blurb: 'OAuth2-secured microservice Client Extension scaffolder for Liferay DXP.',
    stack: 'Java · Node · OAuth2 · Liferay',
    link: 'https://github.com/laxitkhanpara/create-liferay-microservice-cx',
  },
  {
    title: 'VastraRent API',
    category: 'Apps',
    blurb: 'Clothing rental backend with OAuth2 JWT, RBAC, and Docker packaging.',
    stack: 'Spring Boot · PostgreSQL · Docker',
    link: 'https://github.com/laxitkhanpara/VastraRentAPI',
  },
]

export const certifications = [
  'Liferay Application Developer — Liferay, Inc. (May 2026)',
  'Building Enterprise Websites with Liferay — Liferay, Inc. (Apr 2026)',
]

export const awards = [
  'AXpert of the Month — Aixtor, January 2026 (“AI Ninja”)',
  '1st Place — Vadodara Hackathon 4.0 (GuruZone, 200+ teams)',
  '3rd Place — PUCode Hackathon (CampusWay AR)',
  'Codeshafe Winner — DSA Master',
]
