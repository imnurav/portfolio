interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  code: string;
  demo: string;
  image?: string;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Khan Global Studies – Website",
    description:
      "Rebuilt the flagship production website using Next.js with server-side rendering (SSR), improving SEO rankings by 40% and reducing page load times by 30%. Optimized API consumption, implemented scalable frontend architecture, and enhanced goal-based content discovery for a large student base.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SSR",
      "SEO Optimization",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "https://khanglobalstudies.com",
  },
  {
    id: 3,
    name: "KGS – Learning Mobile App",
    description:
      "Developed a cross-platform React Native mobile application for Android and iOS featuring secure authentication, video streaming, push notifications, and personalized learning content. Optimized performance for large-scale content delivery in production.",
    tools: [
      "React Native",
      "TypeScript",
      "Firebase",
      "REST APIs",
      "Push Notifications",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://play.google.com/store/apps/details?id=xyz.penpencil.khansirofficial",
  },
  {
    id: 2,
    name: "Order Management System",
    description:
      "Designed and developed a scalable NestJS-based CRM backend automating order workflows and reducing manual operations by 50%. Implemented BullMQ queue processing with Redis to handle 1,000+ concurrent orders reliably and integrated Shiprocket APIs for logistics automation.",
    tools: [
      "NestJS",
      "TypeScript",
      "BullMQ",
      "Redis",
      "MongoDB",
      "Shiprocket API",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
  },

  {
    id: 6,
    name: "Test Series & Courses Microservices",
    description:
      "Developed microservices architecture to manage test series and course workflows independently. Built scalable services using Node.js, Knex, and Objection.js enabling independent scaling of modules.",
    tools: ["Node.js", "TypeScript", "Knex", "Objection.js", "Microservices"],
    role: "Backend Developer",
    code: "",
    demo: "",
  },
  {
    id: 7,
    name: "Real-time Chat Widget",
    description:
      "Created a lightweight embeddable chat widget with real-time messaging using WebSockets. Built with React and Vite for high performance and seamless integration into company platforms.",
    tools: ["React", "TypeScript", "Vite", "Socket.IO", "WebSockets"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
  },
  {
    id: 8,
    name: "Shrinika Dermacare – Healthcare Platform",
    description:
      "Delivered an end-to-end freelance healthcare platform with secure backend APIs using NestJS and MySQL, and a responsive frontend built with React, Vite, and Tailwind CSS.",
    tools: ["NestJS", "MySQL", "React", "Vite", "Tailwind CSS", "TypeScript"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
  },
  {
    id: 4,
    name: "Campaign Management & Bot Platform",
    description:
      "Built a campaign management platform with bot creation and automated conversation workflows. Implemented Redis-based caching and BullMQ queues for scalable background processing and reliable automation.",
    tools: ["NestJS", "TypeScript", "Redis", "BullMQ", "MongoDB"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
  },
  {
    id: 5,
    name: "Multi-Tenant SaaS Platform",
    description:
      "Engineered a scalable multi-tenant SaaS backend supporting multiple organizations with tenant isolation and role-based access control (RBAC). Designed optimized APIs and modular backend architecture for enterprise scalability.",
    tools: ["NestJS", "TypeScript", "MongoDB", "Redis", "RBAC"],
    role: "Backend Developer",
    code: "",
    demo: "",
  },
  {
    id: 9,
    name: "Additional GitHub Projects",
    description:
      "Built multiple personal and experimental projects to explore new technologies and strengthen problem-solving skills, covering full-stack development and system design concepts.",
    tools: ["TypeScript", "React", "Node.js", "MongoDB"],
    role: "Full Stack Developer",
    code: "https://github.com/",
    demo: "",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
