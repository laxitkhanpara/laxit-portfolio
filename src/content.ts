export const profile = {
  name: 'Laxit Khanpara',
  title: 'Software Engineer',
  email: 'laxitkhanpara3646@gmail.com',
  phone: '+91 82386 94033',
  birthday: '2003',
  location: 'Ahmedabad, Gujarat, India',
  resume: '/Laxit_Khanpara_CV.pdf?v=5',
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
  },
  {
    school: 'Hariom School of Science',
    degree: 'HSC',
    period: '2020',
    detail: '78%',
  },
  {
    school: 'LPD School',
    degree: 'SSC',
    period: '2018',
    detail: '84%',
  },
]

export const experience = [
  {
    role: 'Associate Software Consultant',
    company: 'Aixtor Technology',
    period: 'Dec 2024 — Present',
    stack: [
      'Java 17+',
      'Spring Boot',
      'Kafka',
      'Hibernate',
      'JPA',
      'MySQL',
      'PostgreSQL',
      'AWS',
      'React.js',
      'Redux Toolkit',
      'Angular',
      'Liferay DXP',
      'OAuth2',
      'Docker',
      'Kubernetes',
    ],
    points: [
      'CPaaS Service Portal: Built a centralized B2B enterprise communication platform with Spring Boot microservices for WhatsApp and Google RCS — template management, campaign execution, and messaging workflows; designed OAuth2 + JWT REST APIs with a Token Exchange Service, modelled entities with Spring Data JPA & PostgreSQL, and orchestrated flows via a state-machine Workflow Service.',
      'Voice AI Automated Calling Platform: Integrated a third-party Voice AI Agent API for automated conversational outbound calls; engineered timezone detection from mobile country codes to drive a Spring Scheduler that triggers AI-agent calls only inside valid calling windows.',
      'Multi-Channel Messaging Integration: Built React modules for Meta WhatsApp Business API and Google RCS (rich cards, carousels), routed inbound webhooks through Apache Kafka for async processing, and automated email dispatch via a Spring Boot notification service.',
      'Calling Infrastructure & Scale: Built a bulk-dispatch microservice with a multi-threaded ExecutorService pool, cutting dispatch time for 100–200 contact batches; supported Excel bulk inputs (Apache POI), auto-retry of failed calls, and real-time performance dashboards.',
      'Automated Deployment Pipeline: Engineered sequential deployment scripting for order-dependent modules — 95% less developer effort across multi-environment releases; managed Azure DevOps CI/CD and AWS deployments from design through UAT and production support.',
      'Contributed to a Generative AI-powered CPaaS platform and used LLMs with prompt engineering to accelerate delivery of backend services for enterprise customer-engagement workflows.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'CSCodeTech',
    period: 'Apr 2023 — Sep 2024',
    stack: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'MySQL', 'React.js', 'REST APIs'],
    points: [
      'Dynamic RBAC System: Built hierarchical role-based access control with granular permissions across 10+ modules (UMS, Payroll, Attendance, Awards, Job Postings).',
      'Shipped Spring Boot + React modules end-to-end — production architecture, secure access patterns, and delivery across core application areas.',
    ],
  },
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

export type ProjectCategory = 'All' | 'Enterprise' | 'Tools' | 'Hackathon' | 'Apps' | 'Blog'

export const projects: {
  title: string
  category: Exclude<ProjectCategory, 'All'>
  blurb: string
  stack: string
  link?: string
  live?: string
  image?: string
  /** Centered brand/mark on the cover (e.g. npm logo for CLI tools) */
  icon?: string
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
    category: 'Tools',
    blurb: 'npm CLI to scaffold Liferay React Client Extensions. Featured on Liferay Blog.',
    stack: 'Java · Node · React · Liferay',
    link: 'https://github.com/laxitkhanpara/create-liferay-react-cx',
    icon: '/assets/skills/npm.svg',
  },
  {
    title: 'create-liferay-microservice-cx',
    category: 'Tools',
    blurb: 'OAuth2-secured microservice Client Extension scaffolder for Liferay DXP.',
    stack: 'Java · Node · OAuth2 · Liferay',
    link: 'https://github.com/laxitkhanpara/create-liferay-microservice-cx',
    icon: '/assets/skills/npm.svg',
  },
  {
    title: 'VastraRent API',
    category: 'Apps',
    blurb:
      'Production-grade clothing rental platform API with optimised PostgreSQL schema, OAuth2 JWT auth, RBAC, and Docker containerisation.',
    stack: 'Spring Boot · PostgreSQL · Docker · OAuth2 · Gradle',
    link: 'https://github.com/laxitkhanpara/VastraRentAPI',
  },
  {
    title: 'Limbdi University Management System',
    category: 'Apps',
    blurb:
      'Live freelance full-stack UMS with Student, Teacher, and Admin portals — automated grades, attendance, timetable, and PDF marksheets.',
    stack: 'React · Spring Boot · MySQL · MongoDB',
  },
  {
    title: 'Create React Client Extensions in Liferay with One Command',
    category: 'Blog',
    blurb:
      'How to scaffold production-ready Liferay React Client Extensions instantly with create-liferay-react-cx — featured on the official Liferay blog.',
    stack: 'Liferay · React · CLI · Client Extensions',
    link: 'https://liferay.dev/b/create-react-client-extensions-in-liferay-with-one-command',
  },
  {
    title: 'Skip the Headless API: Manage Liferay Objects with ObjectEntryManager',
    category: 'Blog',
    blurb:
      'Use ObjectEntryManager for efficient Object CRUD inside Liferay — without round-tripping through Headless APIs.',
    stack: 'Liferay · Objects · Java · DXP',
    link: 'https://liferay.dev/b/skip-the-headless-api-manage-liferay-objects-efficiently-with-objectentrymanager',
  },
  {
    title: 'Beyond GET: Could HTTP QUERY (RFC 10008) Improve Liferay Headless APIs?',
    category: 'Blog',
    blurb:
      'Exploring whether the HTTP QUERY method (RFC 10008) could unlock safer, more expressive search and filter patterns for Liferay Headless APIs.',
    stack: 'Liferay · Headless · HTTP · RFC 10008',
    link: 'https://liferay.dev/b/beyond-get-could-http-query-rfc-10008-improve-liferay-headless-apis-',
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
  /** YYYYMM — used for newest-first ordering (higher = more recent) */
  sortDate: number
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
    id: 'gdg-devfest-gandhinagar-2026',
    sortDate: 202606,
    year: 'Jun 2026',
    title: 'GDG Gandhinagar · Agentic Premier League',
    tag: 'Community',
    story:
      'Google Cloud Build with AI — Agentic Premier League with GDG Gandhinagar. APL team energy, “No Blockers Only Yorkers”, and building with AI alongside the local developer community.',
    image: '/media/journey/gdg-devfest-gandhinagar-2026-cover.jpg',
    images: [
      '/media/journey/gdg-devfest-gandhinagar-2026-group.jpg',
      '/media/journey/gdg-devfest-gandhinagar-2026-team.jpg',
    ],
  },
  {
    id: 'cursor-event',
    sortDate: 202607,
    year: 'Jul 2026',
    title: 'Cursor Hackathon · Building with AI',
    tag: 'Hackathon',
    story:
      'Competed in the Cursor hackathon — shipping faster with AI-assisted workflows alongside builders shaping how engineers create software.',
    image: '/media/journey/cursor-event.jpg',
    images: [
      '/media/journey/aixtor-desk.jpg',
      '/media/journey/cursor-hackathon-team.jpg',
      '/media/journey/cursor-hackathon-demo.jpg',
      '/media/journey/cursor-hackathon-workspace.jpg',
    ],
  },
  {
    id: 'liferay-community',
    sortDate: 202605,
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
    id: 'liferay-cli',
    sortDate: 202604,
    year: '2026',
    title: 'Open Source · Liferay CX Scaffolders',
    tag: 'Open Source',
    story:
      'Published create-liferay-react-cx and create-liferay-microservice-cx on npm — featured on the official Liferay blog for one-command Client Extension scaffolding.',
    image: '/media/journey/liferay-cli-npm.jpg',
    images: [
      '/media/journey/liferay-blog-feature.jpg',
      '/media/journey/liferay-cli-terminal.jpg',
      '/media/journey/liferay-cli-repo.jpg',
    ],
  },
  {
    id: 'axpert',
    sortDate: 202601,
    year: 'Jan 2026',
    title: 'AXpert of the Month · AI Ninja',
    tag: 'Award',
    story:
      'Recognized for adapting AI into real delivery impact — smart implementation, innovative thinking, and consistent performance for the team.',
    image: '/media/journey/axpert.jpg',
    images: ['/media/journey/axpert-certificate.jpg'],
  },
  {
    id: 'aixtor',
    sortDate: 202501,
    year: 'Dec 2024 — Present',
    title: 'Associate Software Consultant · Aixtor Technology',
    tag: 'Career',
    story:
      'Owning live B2B CPaaS / Voice AI systems on Integrari — Kafka messaging, campaign dialing, RCS devices, and GenAI workflow coaching.',
    image: '/media/journey/integrari-voice.jpg',
    images: [
      '/media/journey/integrari-rcs.jpg',
      '/media/journey/aixtor-office.jpg',
      '/media/journey/integrari-dashboard.jpg',
      '/media/journey/integrari-team.jpg',
    ],
  },
  {
    id: 'education',
    sortDate: 202506,
    year: '2021 — 2025',
    title: 'B.Tech · Information Technology',
    tag: 'Education',
    story:
      'Parul Institute of Engineering and Technology — built software fundamentals while shipping freelance and hackathon products on the side. Graduated with CGPA 8.39.',
    image: '/media/journey/education-graduation.jpg',
    images: ['/media/journey/education-campus.jpg', '/media/journey/education-convocation.jpg'],
  },
  {
    id: 'placement',
    sortDate: 202505,
    year: '2024 — 2025',
    title: 'Proudly Placed · Campus Milestone',
    tag: 'Career',
    story:
      'Campus placement season — celebrating the jump from student projects to shipping production software with friends who ran the race together.',
    image: '/media/journey/placement-award.jpg',
    images: ['/media/journey/placement-friends.jpg', '/media/journey/placement-celebration.jpg'],
  },
  {
    id: 'vastrarent',
    sortDate: 202502,
    year: '2025',
    title: 'VastraRent API · Production Backend',
    tag: 'Build',
    story:
      'Clothing rental platform API with PostgreSQL schema design, OAuth2 JWT auth, RBAC, and Docker — built for production-grade rental workflows.',
    image: '/media/journey/vastrarent-api.jpg',
    images: ['/media/journey/vastrarent-swagger.jpg', '/media/journey/vastrarent-docker.jpg'],
  },
  {
    id: 'freelance-limbdi',
    sortDate: 202412,
    year: '2024 — Present',
    title: 'Freelance · Limbdi University Management System',
    tag: 'Build',
    story:
      'Live full-stack UMS with Student, Teacher, and Admin portals — automated grades, attendance, timetables, and PDF marksheets.',
    image: '/media/journey/limbdi-ums-portal.jpg',
    images: [
      '/media/journey/limbdi-ums-admin.jpg',
      '/media/journey/limbdi-ums-marksheet.jpg',
      '/media/journey/limbdi-ums-dashboard.jpg',
    ],
  },
  {
    id: 'cscode-tech',
    sortDate: 202409,
    year: 'Apr 2023 — Sep 2024',
    title: 'Full Stack Developer · CSCodeTech',
    tag: 'Career',
    story:
      'Shipped Spring Boot + React modules for the ESM platform — hierarchical RBAC across UMS, Payroll, Attendance, and 10+ enterprise modules.',
    image: '/media/journey/cscode-esm.jpg',
    images: [
      '/media/journey/cscode-rbac.jpg',
      '/media/journey/cscode-dashboard.jpg',
      '/media/journey/cscode-team.jpg',
    ],
  },
  {
    id: 'campus-competitions',
    sortDate: 202406,
    year: 'Jun 2024',
    title: 'CodeChef · Ideathon 2024',
    tag: 'Award',
    story:
      'Campus CodeChef events and Ideathon 2024 — competitive coding and product sprints that kept the edge sharp between hackathons and shipping real projects.',
    image: '/media/journey/codechef-engineers-day.jpg',
    images: ['/media/journey/codechef-ideathon.jpg'],
  },
  {
    id: 'pu-hackathon',
    sortDate: 202403,
    year: 'Mar 2024',
    title: 'PU Code Hackathon · CampusWay',
    tag: 'Hackathon',
    story:
      '36-hour AR indoor navigation marathon with Richa & Riya Patel. Backend / Unity / full-stack — finished 3rd at Parul University.',
    image: '/media/journey/pu-hackathon.jpg',
    images: ['/media/journey/pu-hackathon-team.jpg', '/media/journey/campusway-demo.jpg'],
  },
  {
    id: 'givevote',
    sortDate: 202402,
    year: '2023 — 2024',
    title: 'GiveVote · E-Voting Platform',
    tag: 'Build',
    story:
      'Consumer-facing digital voting experience for elections and candidates — full-stack flows from signup to live results.',
    image: '/media/journey/givevote.jpg',
    images: ['/media/journey/givevote-dashboard.jpg', '/media/journey/givevote-results.jpg'],
  },
  {
    id: 'sharshah',
    sortDate: 202401,
    year: '2023 — 2024',
    title: 'Sharshah · HR Role Management',
    tag: 'Build',
    story:
      'HR admin system for employees, leaves, departments, and workshifts — React dashboards with role-based access patterns.',
    image: '/media/journey/sharshah-landing.jpg',
    images: [
      '/media/journey/sharshah-dashboard.jpg',
      '/media/journey/sharshah-employees.jpg',
      '/media/journey/sharshah-leaves.jpg',
    ],
  },
  {
    id: 'azure-ai',
    sortDate: 202401,
    year: 'Jan 2024',
    title: 'Microsoft Azure AI Credentials',
    tag: 'Certification',
    story:
      'Earned Microsoft credentials for Azure AI Language (NLP) and Azure AI Vision — doubling down on applied AI skills.',
    image: '/media/journey/azure-nlp.jpg',
    images: ['/media/journey/azure-vision.jpg'],
  },
  {
    id: 'codeshafe-dsa',
    sortDate: 202401,
    year: '2024',
    title: 'Codeshafe Winner · DSA Master',
    tag: 'Award',
    story:
      'Won the Codeshafe DSA Master competition — sharpening algorithmic thinking under timed pressure.',
    image: '/media/journey/codeshafe-dsa.jpg',
    images: ['/media/journey/codeshafe-certificate.jpg'],
  },
  {
    id: 'cybersecurity-fdp',
    sortDate: 202312,
    year: 'Dec 2023',
    title: 'AICTE ATAL FDP · Cybersecurity',
    tag: 'Learning',
    story:
      'Completed the AICTE ATAL one-week Faculty Development Program on Cybersecurity Strategies and Best Practices at Parul University.',
    image: '/media/journey/cybersecurity-fdp.jpg',
    images: ['/media/journey/cybersecurity-fdp-certificate.jpg'],
  },
  {
    id: 'vadodara-hackathon',
    sortDate: 202309,
    year: 'Sep 2023',
    title: 'Vadodara Hackathon 4.0 · GuruZone',
    tag: 'Hackathon',
    story:
      'Built GuruZone — a personalized AI tutoring marketplace — and took 1st place among 200+ teams at Vadodara Hackathon 4.0. Sprint pressure, real users, real product.',
    image: '/media/journey/vadodara-hackathon.jpg',
    images: [
      '/media/journey/guruzone.jpg',
      '/media/journey/campus-certificates.jpg',
      '/media/journey/vadodara-hackathon-team.jpg',
    ],
  },
]

