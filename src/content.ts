export const profile = {
  name: 'Laxit Khanpara',
  title: 'Software Engineer',
  tagline:
    'I build high-throughput enterprise platforms — Spring Boot, Kafka, React — with end-to-end ownership of live B2B systems.',
  email: 'laxitkhanpara3646@gmail.com',
  phone: '+91 82386 94033',
  location: 'Vadodara, Gujarat',
  resume: '/Laxit_Khanpara_CV.pdf',
  socials: {
    github: 'https://github.com/laxitkhanpara',
    linkedin: 'https://www.linkedin.com/in/laxit-khanpara',
  },
}

export const highlights = [
  {
    value: '~10x',
    label: 'Faster AI call scheduling',
    detail: 'Concurrent pools + back-off retry on Voice AI campaigns',
  },
  {
    value: '95%',
    label: 'Less deploy overhead',
    detail: 'Automated sequential module deployment engine',
  },
  {
    value: '30%',
    label: 'Faster feature cycles',
    detail: 'Led GenAI workflow adoption across engineering',
  },
  {
    value: '1st',
    label: 'Vadodara Hackathon 4.0',
    detail: 'Winner among 200+ teams with GuruZone',
  },
]

export const experience = [
  {
    company: 'Aixtor Technology',
    role: 'Java Developer',
    period: 'Dec 2024 — Present',
    stack: ['Java 17/21', 'Spring Boot', 'Kafka', 'React', 'AWS', 'Liferay DXP'],
    points: [
      'Architected AI voice-agent call scheduling with concurrent pools — ~10x faster batch completion.',
      'Scaled realtime omnichannel campaign messaging (Kafka + Meta + Google RCS).',
      'Built automated sequential module deployment — 95% less release overhead.',
      'Trained the engineering team on GenAI workflows — ~30% faster feature delivery.',
      'Mentored 3+ interns on Core Java, multithreading, and distributed systems.',
    ],
  },
  {
    company: 'CSCodeTech',
    role: 'Full Stack Developer',
    period: 'Apr 2023 — Sep 2024',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST'],
    points: [
      'Shipped full-stack Spring Boot + React modules across 10+ application areas.',
      'Worked end-to-end on production architecture, secure access patterns, and delivery.',
    ],
  },
]

export const projects = [
  {
    id: 'integrari',
    title: 'Integrari',
    subtitle: 'AI-driven ERP · Voice AI · CPaaS',
    period: 'Aixtor · Live product',
    blurb:
      'Enterprise B2B communication + Voice AI platform — campaigns, RCS devices, realtime KPIs, and high-volume async messaging.',
    bullets: [
      'Voice AI Campaign Manager with concurrent dialing, retries, and regional analytics.',
      'RCS device onboarding + messaging channel operations for multi-country traffic.',
      'Kafka-backed async pipelines for WhatsApp / RCS webhook responses.',
    ],
    stack: ['Spring Boot', 'Kafka', 'React', 'AWS', 'Docker', 'K8s'],
    accent: '#2ee6d6',
    links: {},
    mediaNote: 'Images 6 & 7 — Integrari RCS + Voice AI dashboards',
  },
  {
    id: 'esm',
    title: 'ESM Platform',
    subtitle: 'Employee Self-Service · Tickets · Leave · LLM Analytics',
    period: 'Feb — Present',
    blurb:
      'Multi-role HR portal from one React frontend — JWT claims + Spring Security RBAC, workflow approvals, and AI-generated management insights.',
    bullets: [
      'Role-specific experiences without frontend duplication.',
      'Configurable multi-level ticket & leave approval workflows.',
      'LLM-powered natural-language summaries and trend charts from HR data.',
    ],
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'Spring Security', 'Docker', 'LLM'],
    accent: '#f5b942',
    links: {},
    mediaNote: 'Product screens coming soon',
  },
  {
    id: 'role-management',
    title: 'Sharshah · Role Management',
    subtitle: 'HR admin · Employees · Leaves · Workshifts',
    period: 'Full-stack web',
    blurb:
      'Admin-grade employee management system with departments, designations, branches, and operational HR workflows.',
    bullets: [
      'Employee CRUD with photo profiles, pay grades, and contact records.',
      'Nested admin modules for leaves, holidays, warnings, promotions.',
    ],
    stack: ['React', 'Node / Java', 'MySQL'],
    accent: '#7cf29c',
    links: {
      github: 'https://github.com/laxitkhanpara/Role_management',
      live: 'https://role-manage.onrender.com/',
    },
    mediaNote: 'Images 1–3 — Sharshah HR admin UI',
  },
  {
    id: 'guruzone',
    title: 'GuruZone',
    subtitle: 'Personalized AI tutoring marketplace',
    period: 'Vadodara Hackathon 4.0 · 1st Place',
    blurb:
      'Mentor discovery platform — search tutors by skill, request sessions, and personalize learning paths. Built under intense hackathon pressure and shipped as Flutter + backend.',
    bullets: [
      '1st place among 200+ teams at Vadodara Hackathon 4.0.',
      'Mentor search, filters, ratings, and request flows.',
    ],
    stack: ['Spring Boot', 'MySQL', 'Flutter', 'React'],
    accent: '#ff6b4a',
    links: {
      github: 'https://github.com/laxitkhanpara/GuruZone',
      flutter: 'https://github.com/laxitkhanpara/guruzoneflutter',
      hackathon: 'https://github.com/laxitkhanpara/VadodaraHackthon-4.0',
    },
    mediaNote: 'App mockup (image 5)',
  },
  {
    id: 'evoting',
    title: 'GiveVote · E-Voting',
    subtitle: 'Digital democracy platform',
    period: 'Web app',
    blurb:
      'Voting experience for exploring elections, candidates, and casting ballots with a bold consumer-facing UI.',
    bullets: [
      'Landing + vote flow oriented around accessibility and clarity.',
      'Modular platform sections for news, frameworks, and community.',
    ],
    stack: ['JavaScript', 'Node', 'Express'],
    accent: '#a78bfa',
    links: {
      github: 'https://github.com/laxitkhanpara/OnlineVotingSystem',
    },
    mediaNote: 'Landing screenshot (image 4)',
  },
  {
    id: 'vastrarent',
    title: 'VastraRent API',
    subtitle: 'Clothing rental platform backend',
    period: 'Aug — Sep 2024',
    blurb:
      'Production-grade rental API with optimized PostgreSQL schema, OAuth2 JWT auth, RBAC, and Docker packaging.',
    bullets: [
      'Secure OAuth2 + RBAC access model.',
      'Containerized for repeatable deploys.',
    ],
    stack: ['Spring Boot', 'PostgreSQL', 'OAuth2', 'Docker'],
    accent: '#38bdf8',
    links: {
      github: 'https://github.com/laxitkhanpara/VastraRentAPI',
    },
    mediaNote: null,
  },
  {
    id: 'campusway',
    title: 'CampusWay',
    subtitle: 'AR indoor navigation',
    period: 'PUCode Hackathon · 3rd Place',
    blurb:
      '36-hour AR navigation sprint using Unity + Mapbox — indoor wayfinding for campus spaces.',
    bullets: [
      'Team: Laxit (Backend / Unity / Full-stack), Richa (UI/UX / Security / Mapping), Riya (Flutter / Mapping).',
      '3rd place at PUCode Hackathon.',
    ],
    stack: ['Unity', 'AR Foundation', 'Mapbox', 'Flutter'],
    accent: '#fb7185',
    links: {
      github: 'https://github.com/laxitkhanpara/CampusWay-Indoornavigation-',
    },
    mediaNote: 'Team photo at PU Hackathon (image 8)',
  },
]

export const openSource = [
  {
    title: 'create-liferay-react-cx',
    blurb:
      'npm CLI that scaffolds a production-ready React Client Extension for Liferay DXP in one command. Featured on the official Liferay Developer Blog.',
    links: {
      github: 'https://github.com/laxitkhanpara/create-liferay-react-cx',
      npm: 'https://www.npmjs.com/package/create-liferay-react-cx',
    },
    badge: 'Featured · Liferay Blog',
  },
  {
    title: 'create-liferay-microservice-cx',
    blurb:
      'CLI to scaffold OAuth2-secured microservice Client Extensions with fine-grained scopes for protected Liferay APIs.',
    links: {
      github: 'https://github.com/laxitkhanpara/create-liferay-microservice-cx',
      npm: 'https://www.npmjs.com/package/create-liferay-microservice-cx',
    },
    badge: 'npm CLI',
  },
]

export const achievements = [
  {
    title: 'AXpert of the Month',
    detail: 'Aixtor · January 2026 — recognized as “AI Ninja” for GenAI adoption and measurable delivery impact.',
    kind: 'award',
  },
  {
    title: '1st Place — Vadodara Hackathon 4.0',
    detail: 'Sep 2023 · 200+ teams · GuruZone personalized AI education system.',
    kind: 'hackathon',
  },
  {
    title: '3rd Place — PUCode Hackathon',
    detail: 'Mar 2024 · CampusWay AR indoor navigation in 36 hours.',
    kind: 'hackathon',
  },
  {
    title: 'Codeshafe Winner · DSA Master',
    detail: 'Competitive programming recognition for data structures & algorithms.',
    kind: 'award',
  },
  {
    title: 'Liferay Marketplace Fragment Hackathon',
    detail: 'Participant · Apr 2026 · Liferay User Group Ahmedabad.',
    kind: 'community',
  },
]

export const certifications = [
  {
    title: 'Liferay Application Developer',
    issuer: 'Liferay, Inc.',
    issued: 'May 2026',
  },
  {
    title: 'Building Enterprise Websites with Liferay',
    issuer: 'Liferay, Inc.',
    issued: 'Apr 2026',
  },
]

export const skills = {
  Backend: ['Java 17/21', 'Spring Boot', 'Hibernate / JPA', 'Kafka', 'REST APIs', 'Multithreading'],
  Frontend: ['React.js', 'JavaScript (ES6+)', 'Angular', 'Node.js', 'Express'],
  'Cloud & Data': ['AWS (EC2, S3)', 'Docker', 'Kubernetes', 'MySQL', 'PostgreSQL', 'MongoDB'],
  Practices: ['System Architecture', 'CI/CD', 'Code Reviews', 'Agile / Scrum', 'GenAI Workflows', 'Mentorship'],
}

export const about = `Self-driven software engineer with 3+ years shipping high-throughput, low-latency enterprise apps. I take end-to-end ownership on live B2B CPaaS platforms, drive architecture decisions, and help teams move faster with AI-assisted workflows — without sacrificing engineering standards.`
