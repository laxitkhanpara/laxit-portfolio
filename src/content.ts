export const profile = {
  name: 'Laxit Khanpara',
  title: 'Software Engineer',
  email: 'laxitkhanpara3646@gmail.com',
  phone: '+91 82386 94033',
  birthday: '2003',
  location: 'Ahmedabad, Gujarat, India',
  resume: '/Laxit_Khanpara_CV.pdf',
  avatar: '/media/profile/laxit-profile.jpg?v=4',
  socials: {
    github: 'https://github.com/laxitkhanpara',
    linkedin: 'https://linkedin.com/in/laxit-khanpara',
    instagram: 'https://instagram.com/laxu_smuk',
    youtube: 'https://youtube.com/@laxitkhanpara',
    discord: 'https://discord.gg/DasnqH37RZ',
    leetcode: 'https://leetcode.com/u/laxitkhanpara3646/',
  },
  headline:
    'Building AI-driven products on scalable backend systems',
  aboutBullets: [
    {
      leading: 'Design ',
      emphasis: 'high-performance, scalable systems',
      trailing:
        ' that thrive under enterprise load — resilient APIs, event-driven pipelines, and measurable throughput.',
    },
    {
      leading: 'Deliver end-to-end ',
      emphasis: 'Liferay · Spring Boot · React',
      trailing:
        ' enterprise solutions — from portals and platforms to production-ready product features.',
    },
  ],
  techBadges: [
    'Java',
    'Spring Boot',
    'Kafka',
    'React',
    'TypeScript',
    'AWS',
    'Liferay',
    'PostgreSQL',
  ],
}

/** Colorful contact / social icons shown in Contact + Sidebar */
export const socialLinks: { name: string; href: string; icon: string; alt: string }[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/laxit-khanpara',
    icon: '/assets/social/linkedin.svg',
    alt: 'LinkedIn profile — Laxit Khanpara',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/laxu_smuk',
    icon: '/assets/social/instagram.svg',
    alt: 'Instagram — Laxit Khanpara',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@laxitkhanpara',
    icon: '/assets/social/youtube.svg',
    alt: 'YouTube channel — Laxit Khanpara',
  },
  {
    name: 'Email',
    href: 'mailto:laxitkhanpara3646@gmail.com',
    icon: '/assets/social/gmail.svg',
    alt: 'Email Laxit Khanpara',
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/DasnqH37RZ',
    icon: '/assets/social/discord.svg',
    alt: 'Discord server invite',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/laxitkhanpara3646/',
    icon: '/assets/social/leetcode.png',
    alt: 'LeetCode profile — Laxit Khanpara',
  },
]

export const services = [
  {
    icon: 'code',
    title: 'Backend Engineering',
    text: 'Production Java/Spring services, Kafka pipelines, and APIs built for throughput, reliability, and scale.',
  },
  {
    icon: 'web',
    title: 'Full-Stack Products',
    text: 'React + Spring Boot products with secure auth, clean architecture, and end-to-end ownership.',
  },
  {
    icon: 'design',
    title: 'Liferay DXP',
    text: 'Enterprise portals, Client Extensions, and open-source scaffolding CLIs for Liferay teams.',
  },
  {
    icon: 'mobile',
    title: 'Applied AI',
    text: 'LLM-powered features, Voice AI campaigns, and GenAI workflows that deliver measurable product value.',
  },
]

export const education = [
  {
    school: 'Parul Institute of Engineering and Technology',
    degree: 'B.Tech — Information Technology',
    period: '2021 — 2025',
    detail: 'CGPA: 8.39 / 10.0 · Vadodara, Gujarat',
    image: '/media/journey/education-graduation.jpg',
    imageAlt: 'Laxit Khanpara at graduation — Parul Institute of Engineering and Technology',
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

/** Icon strip on About (Aakash-style clients list) — SVGs in public/assets/skills/ */
export const skillIcons: { name: string; src: string; href: string; alt: string }[] = [
  { name: 'Java', src: '/assets/skills/java.svg', href: 'https://www.java.com/', alt: 'Java programming language logo' },
  {
    name: 'Spring Boot',
    src: '/assets/skills/springboot.svg',
    href: 'https://spring.io/projects/spring-boot',
    alt: 'Spring Boot framework logo',
  },
  { name: 'Liferay', src: '/assets/skills/liferay.svg', href: 'https://www.liferay.com/', alt: 'Liferay DXP logo' },
  {
    name: 'Apache Kafka',
    src: '/assets/skills/apachekafka.svg',
    href: 'https://kafka.apache.org/',
    alt: 'Apache Kafka logo',
  },
  { name: 'React', src: '/assets/skills/react.svg', href: 'https://react.dev/', alt: 'React JavaScript library logo' },
  {
    name: 'TypeScript',
    src: '/assets/skills/typescript.svg',
    href: 'https://www.typescriptlang.org/',
    alt: 'TypeScript logo',
  },
  { name: 'Node.js', src: '/assets/skills/nodedotjs.svg', href: 'https://nodejs.org/', alt: 'Node.js logo' },
  { name: 'MySQL', src: '/assets/skills/mysql.svg', href: 'https://www.mysql.com/', alt: 'MySQL database logo' },
  {
    name: 'PostgreSQL',
    src: '/assets/skills/postgresql.svg',
    href: 'https://www.postgresql.org/',
    alt: 'PostgreSQL database logo',
  },
  { name: 'AWS', src: '/assets/skills/aws.svg', href: 'https://aws.amazon.com/', alt: 'Amazon Web Services logo' },
  { name: 'Docker', src: '/assets/skills/docker.svg', href: 'https://www.docker.com/', alt: 'Docker logo' },
  {
    name: 'Kubernetes',
    src: '/assets/skills/kubernetes.svg',
    href: 'https://kubernetes.io/',
    alt: 'Kubernetes logo',
  },
  { name: 'Git', src: '/assets/skills/git.svg', href: 'https://git-scm.com/', alt: 'Git version control logo' },
  { name: 'Postman', src: '/assets/skills/postman.svg', href: 'https://www.postman.com/', alt: 'Postman API platform logo' },
  { name: 'Redis', src: '/assets/skills/redis.svg', href: 'https://redis.io/', alt: 'Redis logo' },
  { name: 'Linux', src: '/assets/skills/linux.svg', href: 'https://www.linux.org/', alt: 'Linux logo' },
]

export type ProjectCategory = 'All' | 'Enterprise' | 'Open Source' | 'Hackathon' | 'Apps'

export const projects: {
  title: string
  category: Exclude<ProjectCategory, 'All'>
  blurb: string
  stack: string
  link?: string
  live?: string
  image?: string
}[] = [
  {
    title: 'Integrari · Voice AI / CPaaS',
    category: 'Enterprise',
    blurb: 'AI-driven ERP messaging + Voice AI campaign platform at Aixtor.',
    stack: 'Spring Boot · Kafka · React · AWS',
    image: '/media/journey/integrari-voice.jpg',
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
    image: '/media/journey/sharshah-landing.jpg',
  },
  {
    title: 'GuruZone',
    category: 'Hackathon',
    blurb: '1st place Vadodara Hackathon 4.0 — personalized tutor marketplace.',
    stack: 'Spring Boot · Flutter · MySQL',
    link: 'https://github.com/laxitkhanpara/GuruZone',
    image: '/media/journey/guruzone.jpg',
  },
  {
    title: 'GiveVote · E-Voting',
    category: 'Apps',
    blurb: 'Consumer-facing digital voting experience for elections and candidates.',
    stack: 'JavaScript · Node · Express',
    link: 'https://github.com/laxitkhanpara/OnlineVotingSystem',
    image: '/media/journey/givevote.jpg',
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
  'Build a natural language processing solution with Azure AI Language — Microsoft (Jan 2024)',
  'Build an Azure AI Vision solution — Microsoft (Jan 2024)',
]

export const awards = [
  'AXpert of the Month — Aixtor, January 2026 (“AI Ninja”)',
  '1st Place — Vadodara Hackathon 4.0 (GuruZone, 200+ teams)',
  '3rd Place — PUCode Hackathon (CampusWay AR)',
  'Codeshafe Winner — DSA Master',
]

export type JourneyItem = {
  id: string
  year: string
  title: string
  tag: string
  story: string
  /** Primary photo under public/media/journey/ */
  image?: string
  /** Extra gallery photos for the same milestone */
  images?: string[]
}

export const journey: JourneyItem[] = [
  {
    id: 'education',
    year: '2021 — 2025',
    title: 'B.Tech · Information Technology',
    tag: 'Education',
    story:
      'Parul Institute of Engineering and Technology — built software fundamentals while shipping freelance and hackathon products on the side. Graduated with CGPA 8.39.',
    image: '/media/journey/education-graduation.jpg',
    images: ['/media/journey/education-campus.jpg'],
  },
  {
    id: 'vadodara-hackathon',
    year: 'Sep 2023',
    title: 'Vadodara Hackathon · GuruZone',
    tag: 'Hackathon',
    story:
      'Built GuruZone — a personalized AI tutoring marketplace — and took 1st place among 200+ teams. Sprint pressure, real users, real product.',
    image: '/media/journey/vadodara-hackathon.jpg',
    images: ['/media/journey/guruzone.jpg'],
  },
  {
    id: 'cybersecurity-fdp',
    year: 'Dec 2023',
    title: 'AICTE ATAL FDP · Cybersecurity',
    tag: 'Learning',
    story:
      'Completed the AICTE ATAL one-week Faculty Development Program on Cybersecurity Strategies and Best Practices at Parul University.',
    image: '/media/journey/cybersecurity-fdp.jpg',
  },
  {
    id: 'azure-ai',
    year: 'Jan 2024',
    title: 'Microsoft Azure AI Credentials',
    tag: 'Certification',
    story:
      'Earned Microsoft credentials for Azure AI Language (NLP) and Azure AI Vision — doubling down on applied AI skills.',
    image: '/media/journey/azure-nlp.jpg',
    images: ['/media/journey/azure-vision.jpg'],
  },
  {
    id: 'pu-hackathon',
    year: 'Mar 2024',
    title: 'PU Code Hackathon · CampusWay',
    tag: 'Hackathon',
    story:
      '36-hour AR indoor navigation marathon with Richa & Riya Patel. Backend / Unity / full-stack — finished 3rd at Parul University.',
    image: '/media/journey/pu-hackathon.jpg',
  },
  {
    id: 'campus-competitions',
    year: '2024',
    title: 'CodeChef · Ideathon · Campus Awards',
    tag: 'Award',
    story:
      'Campus competitions kept the competitive edge sharp — CodeChef events, Ideathon 2024, and Engineers’ Day recognitions from the IT department.',
    image: '/media/journey/codechef-engineers-day.jpg',
    images: ['/media/journey/codechef-ideathon.jpg', '/media/journey/campus-certificates.jpg'],
  },
  {
    id: 'placement',
    year: '2024 — 2025',
    title: 'Proudly Placed · Campus Milestone',
    tag: 'Career',
    story:
      'Campus placement season — celebrating the jump from student projects to shipping production software with friends who ran the race together.',
    image: '/media/journey/placement-award.jpg',
    images: ['/media/journey/placement-friends.jpg'],
  },
  {
    id: 'products',
    year: '2023 — 2024',
    title: 'Shipping Products · Sharshah & GiveVote',
    tag: 'Build',
    story:
      'Full-stack product work across HR admin (Sharshah) and digital voting (GiveVote) — React dashboards, role management, and consumer-facing flows.',
    image: '/media/journey/sharshah-landing.jpg',
    images: [
      '/media/journey/sharshah-dashboard.jpg',
      '/media/journey/sharshah-employees.jpg',
      '/media/journey/givevote.jpg',
    ],
  },
  {
    id: 'aixtor',
    year: 'Dec 2024 — Present',
    title: 'Java Developer · Aixtor Technology',
    tag: 'Career',
    story:
      'Owning live B2B CPaaS / Voice AI systems on Integrari — Kafka messaging, campaign dialing, RCS devices, and GenAI workflow coaching.',
    image: '/media/journey/aixtor-desk.jpg',
    images: ['/media/journey/integrari-voice.jpg', '/media/journey/integrari-rcs.jpg'],
  },
  {
    id: 'axpert',
    year: 'Jan 2026',
    title: 'AXpert of the Month · AI Ninja',
    tag: 'Award',
    story:
      'Recognized for adapting AI into real delivery impact — smart implementation, innovative thinking, and consistent performance for the team.',
    image: '/media/journey/axpert.jpg',
  },
  {
    id: 'liferay-community',
    year: '2026',
    title: 'Liferay Community · Certs · Open Source',
    tag: 'Community',
    story:
      'Liferay User Group Ahmedabad, Application Developer + Enterprise Website certifications, Marketplace Fragment Hackathon, and open-source CX CLIs.',
    image: '/media/journey/liferay-usergroup.jpg',
    images: [
      '/media/journey/liferay-meetup.jpg',
      '/media/journey/liferay-mentor.jpg',
      '/media/journey/liferay-app-developer.jpg',
      '/media/journey/liferay-enterprise.jpg',
      '/media/journey/liferay-hackathon.jpg',
    ],
  },
  {
    id: 'cursor-event',
    year: '2026',
    title: 'Building with Cursor',
    tag: 'Community',
    story:
      'Showing up in the Cursor community — shipping faster with AI-assisted workflows and staying close to tools that shape how engineers build.',
    image: '/media/journey/cursor-event.jpg',
  },
]

