export const sampleProfile = {
  id: "lamgok-profile",
  full_name: "Lamgok Hando Siahaan",
  headline: "Software Engineer | Backend & Full Stack Web Developer",
  email: "andosiahaan13@gmail.com",
  bio: "I am an Informatics student at Del Institute of Technology with a strong passion for Backend Engineering, Frontend Engineering, Full Stack Web Development, Quality Assurance, Android Development, and Software Engineering. With a high curiosity and eagerness to learn, I continuously develop my technical skills and have hands-on experience in web development, application development, and teaching assistance. My goal is to contribute to innovative projects and expand my expertise in the tech industry.",
  location: "Toba, Indonesia",
  github_url: "https://github.com/Lamgok",
  linkedin_url: "https://www.linkedin.com/in/lamgok-siahaan",
  cv_url: "#", // Silakan ganti dengan tautan file PDF CV Anda jika sudah di-upload
  education: {
    school_name: "Del Institute of Technology",
    degree: "Bachelor of Degree",
    major: "Informatics (GPA: 3.45/4.00)",
    year: "2023 - Present",
    description:
      "Focused on Machine Learning, software development and project management. Proficient in programming languages such as HTML, CSS, Java, PHP, Laravel, JavaScript, SQL, Kotlin and Python.",
  },
  certifications: [
    {
      id: "cert-1",
      name: "Artificial Intelligence",
      issuer: "Huawei ICT Academy",
      year: "2025",
      credential_url: "#",
    },
    {
      id: "cert-2",
      name: "Data Classification and Summarization",
      issuer: "Student Developer Initiative",
      year: "2025",
      credential_url: "#",
    },
    {
      id: "cert-3",
      name: "Security and Discipline Division",
      issuer: "Pre-UTBK IT DEL",
      year: "2025",
      credential_url: "#",
    },
  ],
  profile_image_url:
    "https://media.licdn.com/dms/image/v2/D5603AQGmbgWRAAzNCw/profile-displayphoto-scale_400_400/B56Zj7ryHzHQAg-/0/1756569216991?e=1784764800&v=beta&t=OD5I4wODRNJyZr7xnw4bs6dCTB4_q3riONNQRWOTCOE",
};

export const sampleSkills = [
  // Backend & Languages
  { id: "1", name: "Laravel", category: "Backend", level: "Advanced" },
  {
    id: "2",
    name: "Node.js (Express)",
    category: "Backend",
    level: "Advanced",
  },
  { id: "3", name: "PHP", category: "Backend", level: "Advanced" },
  { id: "4", name: "Java", category: "Backend", level: "Advanced" },
  {
    id: "5",
    name: "Golang (GIN, Viper)",
    category: "Backend",
    level: "Intermediate",
  },
  { id: "6", name: "Python", category: "Backend", level: "Intermediate" },
  { id: "7", name: "C", category: "Backend", level: "Intermediate" },
  { id: "8", name: "R", category: "Data Science", level: "Intermediate" },

  // Frontend & Mobile
  { id: "9", name: "ReactJS", category: "Frontend", level: "Advanced" },
  { id: "10", name: "JavaScript", category: "Frontend", level: "Advanced" },
  { id: "11", name: "HTML & CSS", category: "Frontend", level: "Advanced" },
  { id: "12", name: "Kotlin", category: "Mobile", level: "Intermediate" },

  // Databases & Tools
  { id: "13", name: "PostgreSQL", category: "Database", level: "Advanced" },
  { id: "14", name: "MySQL", category: "Database", level: "Advanced" },
  {
    id: "15",
    name: "SQL Server Management Studio",
    category: "Database",
    level: "Intermediate",
  },
  { id: "16", name: "Docker", category: "DevOps", level: "Intermediate" },
  { id: "17", name: "Nginx", category: "DevOps", level: "Intermediate" },
  {
    id: "18",
    name: "Postman API & Swagger",
    category: "Tools",
    level: "Advanced",
  },
  { id: "19", name: "Figma", category: "Design", level: "Intermediate" },
];

export const sampleProjects = [
  {
    id: "proj-1",
    title: "SMK N 1 Sigumpar Microservice Project",
    description:
      "Built an integrated school information system architecture using a Microservices approach, leveraging Docker and Docker Compose for efficient container management. Developed backend services using Node.js (Express) covering authentication, academic, asset, learning, student, and vocational modules. Built a responsive UI using React.js and Vite, and implemented Nginx as a centralized API Gateway to handle Reverse Proxy, Load Balancing, CORS handling, and Rate Limiting to ensure system security and performance.",
    category: "Web App & Microservices",
    image_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    live_url: "#",
    repo_url:
      "https://github.com/weslyambaritaa/proyek-smk-n1-sigumpar-microservice.git",
    technologies: ["Node.js", "Express", "React.js", "Docker", "Nginx", "Vite"],
  },
  {
    id: "proj-2",
    title: "Website API Documentation IT DEL",
    description:
      "Developed a comprehensive API documentation system using Laravel to streamline developer workflows. Ensured system security by analyzing and implementing cryptographic measures for data protection, improving system accessibility for campus developers and reducing integration time by providing clear technical guides.",
    category: "Web App",
    image_url:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    live_url: "#",
    repo_url: "https://github.com/Lamgok/itdel-api-docs-main",
    technologies: ["Laravel", "PHP", "MySQL", "Security"],
  },
  {
    id: "proj-3",
    title: "Cashflow Management System",
    description:
      "Built a secure online cashflow system using React.js, Node.js, PHP, and Postman API. Integrated database management and designed an intuitive UI/UX, ensuring seamless functionality and performance. Developed a robust financial tracking system using Laravel to manage income and expenditure records with high precision.",
    category: "Web App",
    image_url:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    live_url: "#",
    repo_url: "https://github.com/Lamgok/cashflow",
    technologies: ["React.js", "Node.js", "Laravel", "PHP", "Postman API"],
  },
  {
    id: "proj-4",
    title: "Quiclib (Java GUI Car Rental)",
    description:
      "Integrated MySQL (SQLyog) via JDBC for persistent data storage, ensuring real-time synchronization of user records. Designed an intuitive user interface with GUI Event Handling (ActionListeners) for seamless user interaction and data entry. Implemented core OOP principles (Encapsulation, Abstraction, and Inheritance) to develop a modular architecture for managing diverse document types while ensuring data integrity and maintainable CRUD operations.",
    category: "Desktop App",
    image_url:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
    live_url: "#",
    repo_url: "https://github.com/Lamgok/Rental-Mobil-Beta2.git",
    technologies: ["Java", "MySQL", "JDBC", "Java Swing"],
  },
];

export const sampleExperiences = [
  {
    id: "exp-1",
    role: "ERP - Developer Intern",
    company: "PT PRATESIS",
    start_date: "2026-06",
    end_date: "Present",
    description:
      "Configured and deployed automated business workflows using ERP Event Management and Alert Intelligence systems to optimize procurement and sales approval pipelines. Designed and implemented automated notification logic (Events, Subscriptions, and Scheduler Daemons) to bridge relational databases with real-time system alerts. Developed task allocation tracking templates within the Task Intelligence module to streamline cross-departmental operations. Conducted rigorous system testing and integration auditing through Recipient Logs and Event Logs to identify data dictionary type mismatches and server-side processing errors. Assisted in backend system management and infrastructure troubleshooting.",
    location: "Jakarta Selatan, Indonesia",
    current: true,
  },
  {
    id: "exp-2",
    role: "Teaching Assistant of Database",
    company: "Del Institute of Technology",
    start_date: "2025-01",
    end_date: "2025-06",
    description:
      "Overseeing the database practicum process and checking each student's practicum assignments. Assisting students with Introduction to Engineering and Design course questions and issues. Creating supplementary materials (e.g., practice questions, presentations, readings) to enhance understanding of engineering and design concepts.",
    location: "Sitoluama, Indonesia",
    current: false,
  },
  {
    id: "exp-3",
    role: "Chief Security Division",
    company: "IT DEL PRE - UTBK TRYOUT EVENT 2025",
    start_date: "2025-03",
    end_date: "2025-04",
    description:
      "Overseeing the security and operational safety process during the tryout event. Checking each student's compliance and handling campus monitoring protocols. Assisting students with entry procedures, venue questions, and logistical issues. Creating supplementary safety guidelines and monitoring schedules to enhance event execution.",
    location: "Sitoluama, Indonesia",
    current: false,
  },
];

export const sampleOrganizations = [
  {
    id: "org-1",
    role: "Leader of Department of Security and Discipline",
    company: "Del Institute of Technology",
    start_date: "2026-01",
    end_date: "Present",
    description:
      "Strategic Leadership: Orchestrated comprehensive security protocols and disciplinary standards to maintain a safe and conducive learning environment across the campus. Operational Oversight: Spearheaded the monitoring and supervision of major campus academic events, including Pre-UTBK examinations. Conflict Resolution: Resolved complex disciplinary cases through fair judgment and effective communication, upholding the organization's code of conduct. Team Synergy: Directed a team of members through coordinated workflows, fostering collaboration.",
    location: "Sitoluama, Indonesia",
    current: true,
  },
  {
    id: "org-2",
    role: "Member",
    company: "Informatics Student Association",
    start_date: "2023-08",
    end_date: "Present",
    description:
      "Actively participated in student association activities (e.g., meetings, seminars, workshops) and contributed creative ideas to improve programs and enhance activity quality.",
    location: "Sitoluama, Indonesia",
    current: true,
  },
];

export const sampleTestimonials = [
  {
    id: "test-1",
    name: "Rudi Alva Jonathan Ginting",
    role: "Software Engineer Teammate",
    quote:
      "Lamgok adalah developer backend yang sangat teliti dalam merancang API dan arsitektur database. Kerja samanya luar biasa dalam tim.",
    avatar_url:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
];
