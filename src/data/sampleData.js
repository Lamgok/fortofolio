export const sampleProfile = {
  id: "sample-profile",
  full_name: "Nama Anda",
  headline: "Frontend Developer & UI/UX Enthusiast",
  email: "hello@yourdomain.com",
  bio: "Saya adalah developer yang fokus membangun aplikasi web modern, cepat, dan nyaman untuk digunakan. Saya senang menggabungkan teknologi, desain, dan pengalaman pengguna untuk menghasilkan produk yang bernilai.",
  location: "Indonesia",
  github_url: "https://github.com",
  linkedin_url: "https://linkedin.com",
  cv_url: "#",
  education: {
    school_name: "SMKN 1 Bandung",
    degree: "SMK",
    major: "Rekayasa Perangkat Lunak",
    year: "2021 - 2024",
    description:
      "Mempelajari dasar-dasar pemrograman, pengembangan aplikasi web, dan praktik kerja tim dalam proyek teknologi.",
  },
  certifications: [
    {
      id: "cert-1",
      name: "Junior Web Developer",
      issuer: "Dicoding",
      year: "2024",
      credential_url: "#",
    },
    {
      id: "cert-2",
      name: "React Fundamentals",
      issuer: "FreeCodeCamp",
      year: "2023",
      credential_url: "#",
    },
  ],
  profile_image_url:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
};

export const sampleSkills = [
  { id: "1", name: "React", category: "Frontend", level: "Advanced" },
  { id: "2", name: "JavaScript", category: "Frontend", level: "Advanced" },
  { id: "3", name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { id: "4", name: "Node.js", category: "Backend", level: "Intermediate" },
  { id: "5", name: "Supabase", category: "Backend", level: "Intermediate" },
  { id: "6", name: "Figma", category: "Design", level: "Intermediate" },
];

export const sampleProjects = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description:
      "Dashboard admin untuk toko online dengan analitik penjualan dan manajemen produk.",
    category: "Web App",
    image_url:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    live_url: "#",
    repo_url: "#",
    technologies: ["React", "Node.js", "Supabase"],
  },
  {
    id: "2",
    title: "Travel Booking Platform",
    description:
      "Aplikasi booking perjalanan dengan sistem pencarian, filter, dan checkout.",
    category: "Productivity",
    image_url:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    live_url: "#",
    repo_url: "#",
    technologies: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    id: "3",
    title: "Portfolio CMS",
    description:
      "Sistem manajemen konten untuk portfolio pribadi dengan kemampuan edit dinamis.",
    category: "CMS",
    image_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    live_url: "#",
    repo_url: "#",
    technologies: ["React", "Supabase", "CSS"],
  },
];

export const sampleExperiences = [
  {
    id: "1",
    role: "Frontend Developer",
    company: "PT Digital Indonesia",
    start_date: "2023-01-01",
    end_date: "",
    description:
      "Mengembangkan antarmuka pengguna untuk aplikasi perusahaan dengan fokus performa dan UI.",
    location: "Jakarta",
    current: true,
  },
  {
    id: "2",
    role: "Web Developer Intern",
    company: "Startup Kreatif",
    start_date: "2022-01-01",
    end_date: "2022-12-31",
    description:
      "Membantu pengembangan landing page, blog, dan integrasi komponen desain system.",
    location: "Bandung",
    current: false,
  },
];

export const sampleTestimonials = [
  {
    id: "1",
    name: "Ayu Lestari",
    role: "Product Manager",
    quote:
      "Pekerjaannya rapi, cepat, dan selalu memperhatikan pengalaman pengguna. Sangat recommended.",
    avatar_url:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "2",
    name: "Bambang Setiawan",
    role: "CEO Startup",
    quote:
      "Portfolio yang dibuat benar-benar terlihat profesional dan memudahkan kami melihat kemampuan tim.",
    avatar_url:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
];
