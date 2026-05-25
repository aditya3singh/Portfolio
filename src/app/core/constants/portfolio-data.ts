import {
  IFMS_BUSINESS_IMPACT,
  IFMS_DESCRIPTION,
  IFMS_HIGHLIGHTS,
  IFMS_IMAGE,
  IFMS_META,
  IFMS_PROBLEM_SOLUTIONS,
  IFMS_SERVICES,
  IFMS_SKILLS,
  IFMS_TECH_STACK_FLAT,
} from './ifms-project';

export interface TimelineItem {
  title: string;
  period: string;
  description: string;
  subtitle?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

export interface Project {
  title: string;
  category: string;
  filter: 'all' | 'fullstack' | 'backend' | 'mern' | 'enterprise';
  period: string;
  techStack: string;
  description: string;
  highlights: string[];
  github?: string;
  githubRepo?: string;
  image: string;
  featured?: boolean;
  /** Extended case-study panel (IFMS) */
  isIfms?: boolean;
}

export const EDUCATION: TimelineItem[] = [
  {
    title: 'Lovely Professional University',
    subtitle: 'B.Tech — Computer Science and Engineering',
    period: 'Aug 2022 — Present',
    description: 'Jalandhar, Punjab. Focus on software engineering, data structures, web technologies, and applied mathematics.',
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Backend Web Development Intern',
    subtitle: 'Prodigy InfoTech',
    period: 'Feb 2025',
    description:
      'Developed and optimized backend APIs using Node.js and integrated MySQL databases for scalable applications. Maintained RESTful services, improving data retrieval speed by 30% and ensuring performance under high load. Collaborated in agile teams on system design, debugging, and maintainable code.',
  },
  {
    title: 'Solo Full Stack Developer',
    subtitle: 'Indian Fuel Management System (IFMS)',
    period: '2025 · Final Master Build',
    description:
      'Designed and documented an enterprise microservices platform (Case Study, HLD, LLD) for fuel retail operations. Built Identity, Inventory, Sales, and Admin services on ASP.NET Core 8 with Angular 17 SPA, Ocelot gateway, SQL Server DB-per-service, Redis, RabbitMQ, and Docker Compose.',
  },
];

export const CERTIFICATES: Certificate[] = [
  { title: 'Full Stack Web Development', issuer: 'Udemy', date: 'Feb 2025' },
  { title: 'Self-Paced DSA', issuer: 'GeeksforGeeks', date: 'Aug 2024' },
  {
    title: 'IFMS — System Architecture Documentation',
    issuer: 'Self · Case Study / HLD / LLD',
    date: '2025',
  },
];

export const ACHIEVEMENTS: string[] = [
  'GFG contest rating 1510+',
  '800+ programming problems solved across online platforms',
  'Smart India Hackathon 2025 — rank under 10',
  'IFMS: Full enterprise case study with microservices HLD & per-service LLD',
];

export const SKILL_BARS = [
  { name: 'Microservices & System Design', percent: 90 },
  { name: 'Backend & APIs (.NET / Node)', percent: 92 },
  { name: 'Angular & Frontend (SPA)', percent: 86 },
  { name: 'Databases (SQL Server, MySQL, MongoDB)', percent: 88 },
  { name: 'DSA & Problem Solving', percent: 90 },
];

export const TECH_STACK = [
  ...IFMS_TECH_STACK_FLAT,
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'TypeScript',
  'WebSocket',
  'Tailwind CSS',
  'Postman',
  'Git',
  'CI/CD',
];

/** Re-export IFMS detail for portfolio detail panel */
export {
  IFMS_IMAGE,
  IFMS_META,
  IFMS_SERVICES,
  IFMS_PROBLEM_SOLUTIONS,
  IFMS_BUSINESS_IMPACT,
  IFMS_SKILLS,
};

export const PROJECTS: Project[] = [
  {
    title: 'IFMS — Indian Fuel Management System',
    category: 'Enterprise · Microservices',
    filter: 'enterprise',
    period: IFMS_META.version,
    techStack: `${IFMS_META.frontend} · ${IFMS_META.backend} · ${IFMS_META.gateway} · ${IFMS_META.database}`,
    description: IFMS_DESCRIPTION,
    highlights: IFMS_HIGHLIGHTS,
    image: IFMS_IMAGE.url,
    featured: true,
    isIfms: true,
  },
  {
    title: 'RoleCare',
    category: 'Hospital Management',
    filter: 'mern',
    period: 'Aug 2025',
    techStack: 'MERN, JWT, Bcrypt, Tailwind CSS',
    description:
      'Role-based hospital management system with separate doctor and patient dashboards.',
    highlights: [
      'JWT + Bcrypt auth with React Context global state',
      'Real-time appointment scheduling with strong backend validation',
      'API testing with Postman',
    ],
    github: 'https://github.com/aditya3singh/Hospital-Mangement-System',
    githubRepo: 'Hospital-Mangement-System',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'Driuber',
    category: 'Ride Sharing App',
    filter: 'mern',
    period: 'Jan 2025',
    techStack: 'React, Node.js, MongoDB, WebSocket, JWT, Google Maps',
    description:
      'Ride-sharing application with real-time booking, GPS tracking, and Socket.IO chat (GitHub: UBER-Sync).',
    highlights: [
      'JWT role-based ride management for drivers and riders',
      'Live driver tracking with Google Maps API',
      'Responsive UI with Tailwind CSS and smooth animations',
    ],
    github: 'https://github.com/aditya3singh/UBER-Sync',
    githubRepo: 'UBER-Sync',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  },
  {
    title: 'Blogify',
    category: 'Blogging Platform',
    filter: 'mern',
    period: 'Feb 2025',
    techStack: 'React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Cloudinary',
    description:
      'Feature-rich blogging platform with secure auth, rich-text editor, and real-time engagement.',
    highlights: [
      'Cloudinary image uploads, search, and category filtering',
      'Comments, likes, and bookmarks with real-time UI updates (+35% session duration)',
      'Role-based access control with JWT',
    ],
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
  },
  {
    title: 'E-Books',
    category: 'Full Stack CRUD',
    filter: 'fullstack',
    period: 'Jun 2025',
    techStack: 'React.js, Node.js, Express.js, EJS, Bootstrap, JavaScript',
    description:
      'Full-stack web app to manage and organize book records with RESTful routing.',
    highlights: [
      'CRUD operations with modular architecture',
      'Dynamic rendering via EJS templating',
      'Responsive Bootstrap UI',
    ],
    github: 'https://github.com/aditya3singh/Online-Book-Management-System',
    githubRepo: 'Online-Book-Management-System',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  },
  {
    title: 'GitPulse',
    category: 'Microservices · AI',
    filter: 'backend',
    period: 'Mar 2026',
    techStack: 'Microservices, GitHub Webhooks, AI enrichment, real-time broadcast',
    description:
      'Reactive microservice that listens for GitHub push events, processes and enriches data with AI, then broadcasts updates to clients.',
    highlights: [
      'Event-driven pipeline from GitHub webhooks',
      'AI-enriched activity feed',
      'Real-time client updates',
    ],
    github: 'https://github.com/aditya3singh/GitPulse',
    githubRepo: 'GitPulse',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    title: 'DevConnect',
    category: 'Social Developer Platform',
    filter: 'mern',
    period: 'Aug 2025',
    techStack: 'React.js, Tailwind CSS, Node.js/Spring Boot, MongoDB, Socket.IO',
    description:
      'Full-stack real-time developer platform blending LinkedIn, Stack Overflow, Slack, and Notion-style features.',
    highlights: [
      'Real-time messaging with Socket.IO',
      'Community Q&A and developer profiles',
      'MIT licensed open source',
    ],
    github: 'https://github.com/aditya3singh/DevConnect',
    githubRepo: 'DevConnect',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
];

export const BLOG_POSTS = [
  {
    title: 'IFMS Case Study: Digitizing 90,000 Petrol Stations in India',
    category: 'Architecture',
    date: '2025',
    excerpt:
      'Industry background, 7 pain points (P1–P7), microservices solution map, and business impact — stock lag down ~99%, fraud alerts in real time.',
    image: IFMS_IMAGE.url,
    featured: true,
  },
  {
    title: 'Ocelot Gateway + DB-per-Service in IFMS',
    category: 'System Design',
    date: '2025',
    excerpt:
      'How Angular :4200 talks only to Ocelot :5000, routes to 7 services, and keeps Identity/Inventory/Sales/Admin databases isolated.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    title: 'Booking Tokens: Razorpay, Redis & RabbitMQ',
    category: 'IFMS LLD',
    date: '2025',
    excerpt:
      'Pre-paid fuel booking with cryptographic IFM tokens, <50ms Redis validation, and async Twilio/SendGrid notifications.',
    image: IFMS_IMAGE.url,
  },
  {
    title: 'Hospital-Mangement-System: MERN Role Dashboards',
    category: 'Open Source',
    date: 'Mar 2026',
    excerpt:
      'Public repo for RoleCare — JWT auth, doctor/patient separation, and validated appointment APIs.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
];
