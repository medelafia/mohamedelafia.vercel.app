
export type ProjectCategory =
  | "all"
  | "ai"
  | "devops"
  | "backend"
  | "fullstack"
  | "systems"
  | "mobile"

export interface Project {
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: ProjectCategory[]
  github: string
  demo?: string
  images: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "OumaGuard - AI Monitoring & Predictive System",
    description:
      "Incident prediction system for cloud-native applications using modern technologies.",
    longDescription:
      "Design and develop an incident prediction system for cloud-native applications using Python, FastAPI, Next.js, deep learning, Prometheus, and Kubernetes. Features real-time monitoring, anomaly detection, and predictive analytics for infrastructure optimization.",
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "Deep Learning",
      "Prometheus",
      "Kubernetes",
    ],
    category: ["ai", "devops"],
    github: "https://github.com/medelafia/ouma",
    images: [
      "/projects/oumaGuard-poster.png",
    ],
    featured: true,
  },
  {
    title: "Shopora",
    description:
        "A modern electronics storefront with a full admin dashboard, real-time cart and wishlist, and a checkout flow built for cash-on-delivery.",
    longDescription:
      "Shopora is a full-stack e-commerce platform built with Next.js (App Router) and TypeScript, backed by PostgreSQL via Prisma and Supabase Storage for image uploads. It ships with a customer-facing storefront — product catalog with filters and sorting, category browsing, product detail pages with specs and reviews, cart, wishlist, and account dashboard — plus a complete admin panel for managing products, categories, coupons, orders, and customers.",
    techStack: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "JWT"
    ],
    category: ["fullstack"],
    github:
      "",
    demo: "https://store-shopora.vercel.app" ,
    images: [
      "/projects/shopora-poster.png"          
    ],
    featured: true,
  },
  {
    title: "MovieMood",
    description:
      "AI-powered recommendation engine with sentiment analysis and real-time personalization.",
    longDescription:
      "Movie Recommendation System built with an Angular frontend, a Spring Boot backend secured with JWT, and a Python (FastAPI) recommendation engine using a KNN machine learning model. The system integrates sentiment analysis to classify user reviews, Kafka for event-driven communication, Redis for caching user preferences, and MySQL for persistent storage.",
    techStack: [
      "Angular",
      "Spring Boot",
      "FastAPI",
      "KNN",
      "Kafka",
      "Redis",
      "MySQL",
      "JWT",
    ],
    category: ["ai", "fullstack"],
    github:
      "https://github.com/medelafia/Movie-recommendation-system",
    demo: "https://moviemood-sooty.vercel.app" ,
    images: [
      "/projects/moviemood-poster.png",
    ],
    featured: true,
  },
  {
    title: "Doc-Assist",
    featured: true,
    description:
      "Doc-Assist is an AI-powered document assistant that lets you upload PDFs and chat with them using RAG.", 
    longDescription:
      "DocAssist is an AI-powered document assistant that turns your PDFs into a conversation. Upload documents, ask questions in natural language, and get precise, citation-grounded answers — built with Spring Boot, React, Spring AI, Redis vector search, and Cloudflare R2.", 
    techStack: [
      "React.js",
      "Spring boot" , 
      "Spring security" ,
      "JWT", 
      "OAuth2 Google", 
      "Cloudflare R2",
      "Spring AI", 
      "Redis", 
      "PostgreSQL",
      "AI",
      "LLMs" , 
      "OpenRouter"
    ],
    category: ["fullstack", "ai", "backend" ],
    github:
      "https://github.com/medelafia/DocAssist",
    demo : 
      "https://doc-assist-ai.vercel.app",
    images: [
      "/projects/doc-assist-poster.png"
    ],
  },
  {
    title: "Teacher Toolkit - AI-Powered Teaching Assistant",
    description:
      "An AI-powered educational platform that helps teachers create lessons, generate exercises, discover resources, and streamline teaching workflows.",
    longDescription:
      "Teacher Toolkit is an AI-powered educational platform designed to simplify lesson preparation and enhance teaching productivity. The application enables educators to generate structured lesson plans, personalized exercises, mind maps, worksheets, quizzes, and educational resources using artificial intelligence. It features an intelligent search engine for discovering relevant open educational resources, AI-powered resource evaluation, multilingual content generation in Arabic, French, and English, and a personal library for organizing generated materials.",
    techStack: [
      "Python",
      "Groq",
      "FastAPI",
      "Flutter",
      "PostgreSQL", 
      "LangChain", 
    ],
    category: ["ai", "mobile"],
    github: "",
    images: [
      "/projects/teacher-toolkit-poster.png",
    ],
    featured: true,
  },
  {
    title: "Library Management System",
    description:
      "Full-stack library solution with Keycloak authentication and AWS deployment.",
    longDescription:
      "Full-stack application built with Angular and PrimeNG on the frontend, secured via Keycloak authentication; a Jakarta EE backend using JAX-RS and Hibernate with MySQL; containerized using Docker, automated with GitHub Actions CI/CD, and deployed on AWS using ECR, EC2, and S3.",
    techStack: [
      "Angular",
      "PrimeNG",
      "Keycloak",
      "Jakarta EE",
      "JAX-RS",
      "Hibernate",
      "MySQL",
      "Docker",
      "AWS",
    ],
    category: ["fullstack", "backend"],
    github:
      "https://github.com/medelafia/Library-management-backend",
    images: [],
  },

  {
    title: "Fitness Tracker Mobile App",
    description:
      "Cross-platform fitness application with motion detection and workout tracking.",
    longDescription:
      "A mobile fitness tracking application developed using Flutter, with a FastAPI backend for storing workout history. The app utilizes the device's accelerometer and gyroscope to detect movements during workouts and tracks distance traveled during courses.",
    techStack: [
      "Flutter",
      "FastAPI",
      "Accelerometer",
      "Gyroscope",
      "Python",
    ],
    category: ["fullstack", "mobile"],
    github:
      "https://github.com/medelafia/fitness-tracker",
    images: [],
  },

  {
    title: "Hospital Management System",
    description: "Hospital Management System for managing patients, doctors, and appointments efficiently.",
    longDescription: "A full-stack Hospital Management System that centralizes patient records, doctor scheduling, and appointment tracking. Built with Spring Boot and Spring MVC for core backend logic, FastAPI for lightweight integration services, and MySQL for data storage. The responsive frontend uses Bootstrap, HTML, CSS, and JavaScript, delivering an intuitive dashboard for hospital staff to reduce manual workload and improve care coordination.",
    techStack: [
      "Spring MVC",
      "Spring Boot",
      "MySQL",
      "FastAPI",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript"
    ], 
    category: ["ai", "fullstack"],
    github:
      "https://github.com/medelafia/Hospital-management-system",
    demo : 
      "https://hospital-management-system-lkgs.onrender.com",
    images: [
      "/projects/hms-poster.png"
    ],
  },

  {
    title: "UGTM Essaouira Portal",
    description:
      "Digital membership and service-request platform for a teachers' union.",
    longDescription:
      "A full-stack Arabic-first RTL digital platform for a Moroccan teachers' union, handling membership renewal, multi-type service requests, article publishing, and an admin dashboard with role-based access, file uploads, and PDF document generation with QR-code verification.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    category: ["fullstack", "backend"],
    github: "", 
    demo:
      "https://ugtm-portal.vercel.app",
    images: [
      "/projects/ugtm-poster.png"
    ],
  },
  {
    title: "Resumind",
    description:
    "AI-powered tool for evaluating and improving the ATS compatibility score of resumes.",
    longDescription:
    "An AI-powered resume analysis platform that evaluates resumes against Applicant Tracking System (ATS) criteria. It analyzes resume structure, keywords, formatting, skills, and job-description alignment to generate an ATS score and provide actionable recommendations for improving the resume’s chances of passing automated screening systems.",
    techStack: [
      "React.js",
      "AI",
    ],
    category: ["fullstack", "ai"],
    github:
      "https://github.com/medelafia/Resumind",
    demo: "https://gentle-sun-36389.puter.site" ,
    images: [
      "/projects/resumind-poster.png"
    ],
  },   {
    title: "AI-Diagno",
    description:
      "AI-powered tool for preliminary symptom analysis and diagnostic insights.", 
    longDescription:
      "Ai-Doctor combines physician expertise with machine learning to provide accurate, evidence‑based diagnostic suggestions based on your selected symptoms and lab results. Users can add symptoms, and the system analyzes them against clinical data to generate condition explanations, recommended precautions, and relevant medical insights. The platform is designed for educational purposes only — it helps you understand possible causes and next steps, but always reminds you to consult a healthcare provider for official diagnosis and treatment.", 
    techStack: [
      "React.js",
      "AI",
      "Neural networks" , 
      "FastApi", 
      "Deep learning"
    ],
    category: ["fullstack", "ai"],
    github:
      "https://github.com/medelafia/AI-Diagno",
    demo : 
      "https://ai-doctor-xi.vercel.app",
    images: [
      "/projects/ai-diagno-poster.png"
    ],
  }, 
  {
    title: "cAPI — Lightweight C REST API",
    description:
      "Multithreaded HTTP REST API written in pure C with SQLite and cJSON support.",
    longDescription:
      "A multithreaded HTTP REST API built from scratch in pure C using POSIX sockets and pthread for concurrent request handling. Implements route-based dispatch with support for GET, POST, DELETE and PATCH methods, a flexible handler callback architecture, and JSON responses via an integrated cJSON library. Persists data through SQLite with a clean request/response abstraction layer. Minimal dependencies, POSIX-compliant, and built for learning the internals of HTTP servers and concurrent socket programming.",
    techStack: [
      "C",
      "POSIX Sockets",
      "pthread",
      "SQLite",
      "cJSON",
      "HTTP/1.1",
      "GCC",
      "Make",
    ],
    category: ["backend", "systems"],
    github: "https://github.com/medelafia/cAPI",
    images: [],
  },
  {
    title: "C HTTP Server",
    description:
      "HTTP/1.1 web server built from scratch in C, containerized with Docker and deployed on Render.",
    longDescription:
      "A lightweight HTTP/1.1 web server implemented from scratch in C using POSIX TCP sockets, without any external HTTP framework. Handles the full request lifecycle: TCP connection acceptance, HTTP request parsing, static file serving with MIME type detection, binary file transmission, HTTP status code responses, and timestamped request logging. Containerized with Docker and deployed to Render as a public live demo. Built to explore low-level networking, socket programming, and HTTP protocol internals.",
    techStack: [
      "C",
      "POSIX Sockets",
      "TCP/IP",
      "HTTP/1.1",
      "Docker",
      "Render",
      "GCC",
      "Make",
    ],
    category: ["backend", "systems"],
    github: "https://github.com/medelafia/c-http-server",
    images: [],
  }
]

export const categories: {
  value: ProjectCategory
  label: string
}[] = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI / ML" },
  { value: "devops", label: "DevOps" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
  { value : "systems" , label : "Systems"},
  { value : "mobile", label: "Mobile" }
]