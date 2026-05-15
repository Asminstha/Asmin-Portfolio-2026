// This is the ONLY file you need to edit to update your portfolio content
export const siteConfig = {
  // SEO & Meta
  seo: {
    title: "Asmin Shrestha - Full Stack Developer & Designer",
    description: "Full Stack Developer passionate about building modern web applications. Specialized in React,DJango and Cloud Technologies.",
    keywords: "Full Stack Developer, react developer , React, Node.js, laravel, python , django developer , Web Development,kathmandu, Portfolio, Asmin Shrestha, asmi shrestha, asminshrestha",
    author: "Asmin Shrestha",
    url: "https://asminstha.com.np",
    image: "https://asminstha.com.np/og-image.png",
  },

  // Personal Info
  personal: {
    name: "Asmin Shrestha",
    title: "Full Stack Developer",
    subtitle: "Building Modern Web Solutions",
    bio: "I'm a passionate full-stack developer with expertise in creating responsive, user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs.",
    email: "asim.sth135@gmail.com",
    phone: "+977-9861362710",
    location: "Kathmandu, Nepal",
    avatar: "favicon.png",
    resume: "/Asmin_shrestha_CV.pdf",
  },

  // Social Links
  socials: {
    github: "https://github.com/Asminstha",
    linkedin: "https://www.linkedin.com/in/asminshrestha",
    youtube: "https://www.youtube.com/@measmin",
    email: "asim.sth135@gmail.com",
  },

  // About Section
  about: {
    title: "About Me",
    aboutimg:"./images/about.gif",
    description: [
      "I'm a full-stack developer with years of experience building web applications. I specialize in modern JavaScript frameworks, responsive design, and scalable backend solutions.",
      "I have a strong passion for learning new technologies and improving my skills.My goal is to build digital products that are as functional as they are beautiful.  ",
    ],
  },

  // Skills
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Redux"]
    },
    {
      category: "Backend",
      items: ["Python/Django", "Laravel",  "SQL",  "PostgreSQL", "REST APIs","My Sql"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Vs Code", "Firebase", "Vercel", "Netlify" ,"Cloudfare"]
    },
    {
      category: "Other Skills",
      items: ["SEO", "Problem Solving", "Communication", "Team Collaboration", "Project Management"]
    },
  ],

 
  experience: [
    {
      id: 1,
      company: "Tech Solutions Pvt Ltd",
      role: "Frontend Developer",
      duration: "May 2023 – Present",
      location: "Kathmandu, Nepal",
      description: [
        "Built interactive React applications for clients in e-commerce and finance.",
        "Collaborated with UI/UX designers to deliver user-friendly interfaces.",
        "Led front-end migration to a modular component system."
      ],
      tech: ["React", "Tailwind", "TypeScript"]
      // Optionally add: logo: "/your-company-logo.png"
    },
    {
      id: 2,
      company: "InnovaSoft",
      role: "Web Development Intern",
      duration: "Jan 2022 – Apr 2023",
      location: "Remote",
      description: [
        "Assisted in development of Laravel-based web apps.",
        "Wrote unit/component tests to ensure maintainability.",
        "Regularly contributed to Agile sprints."
      ],
      tech: ["Laravel", "Vue.js", "MySQL"]
    }
    // More experiences...
  ],
  // Projects (Showcase your best work)
  projects: [
    {
      id: 1,
      title: "JobsNepal — Multi-Tenant SaaS Job Portal",
      description: "JobsNepal is a production-ready Multi-Tenant SaaS platform connecting companies with talent. Built with Laravel 11, it uses a shared-database architecture with strict company_id scoping to ensure secure data isolation between tenants.",
      longDescription: "This project features a comprehensive job portal with separate dashboards for employers and job seekers, allowing companies to post jobs and manage applications while job seekers can search and apply for positions. The platform is designed for scalability and security, making it an ideal solution for businesses of all sizes looking to streamline their hiring process.",
      image: "./images/projects/jobsnepal.png",
      technologies: ["Laravel 11 (PHP 8.2+)", "Blade", "MySQL", "Tailwind CSS", "Vite"],
      github: "https://github.com/Asminstha/job_portal",
      live: "https://jobsnepal-demo.com",
      features: [
        "Multi-Tenancy: Secure data isolation via Global Scopes.",
        "ATS Pipeline: End-to-end applicant tracking (Pending to Hired).",
        "SaaS Billing: Tiered plans with eSewa/Khalti verification.",
        "Role Access: Custom portals for Admin, Employers, and Seekers.",
        "Modern UI: Responsive Tailwind/Alpine.js design with Dark Mode.",
      ],
    },
    {
      id: 2,
      title: "Shivam Electronics & Suppliers - E-Commerce Product Catalog Platform",
      description: "A modern, fully-functional e-commerce web application designed for a retail electronics and home products business in Nepal. The platform enables customers to browse, search, and purchase products with seamless checkout integration, while providing administrators with comprehensive inventory management tools.",
      longDescription: "Built a production-ready e-commerce web application featuring a comprehensive product catalog with 500+ items, advanced search/filtering, shopping cart system, and a secure admin panel for inventory management. Implemented responsive design, dark/light theme toggle, image upload functionality with auto-compression, and WhatsApp integration for seamless checkout.",
      image: "./images/projects/shivam.png",
      technologies: ["React", "Tailwind CSS" , "Vite" , "React Router", "Zustand"],
      github: "https://github.com/Asminstha/shivam-electronics-catalog",
      live: "#",
      features: [
        "Home, About Us, Contact, FAQ pages with professional styling",
        "Responsive design with Tailwind CSS",
        "One-click ordering via WhatsApp with pre-filled product details",
        "Complete CRUD operations (Create, Read, Update, Delete)",
        "Dark mode support",
      ],
    },
     {
      id: 3,
      title: "Company Profile System",
      description: "Dynamic business management and profile platform, A Company Consultancy CMS",
      longDescription: "A full-featured CMS built with Laravel to manage company services, team members, and professional content dynamically. The system includes an admin dashboard for easy content updates, a responsive frontend for showcasing company information, and SEO optimization to enhance online visibility.",
      image: "./images/projects/cms.png",
      technologies:  ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      github: "https://github.com/Asminstha/company-profile-laravel",
      live: "#",
      features: [
         "Secure admin dashboard",
    "Dynamic content management",
    "Role-based access control",
    "Responsive business landing page",
  ],
    },
     {
      id: 4,
      title: " Barber Shop Appointment Booking System",
      description: "A mini web application built with Django demonstrating authentication, CRUD operations, database integration, PDF generation, pagination, and a clean responsive UI for a barber shop appointment booking system.",
      longDescription: "A comprehensive booking system featuring user authentication, appointment CRUD operations, and automated PDF receipt generation. The platform allows customers to easily schedule, view, and manage their appointments while providing administrators with tools to oversee bookings and generate professional receipts.",
      image: "./images/projects/barber.png",
      technologies: ["Django", "Python", "SQLite", "HTML","Tailwind CSS"],
      github: "https://github.com/Asminstha/Barber-Shop-Appointment-Booking-System",
      live: "#",
      features: [
        "Secure user authentication & sessions",
    "Appointment filtering & pagination",
    "PDF generation for receipts",
    "Admin dashboard for management",
      ],
    },
    //  more projects
  ],

  // Education
  education: [
    {
      id: 1,
      degree: "Bachelor In Information Technology ",
      institution: "Bhaktapur Multiple Campus",
      year: "2021 - 2025",
      details: "GPA: 3.15/4.0",
    },

 {
      id: 2,
      degree: "+2(Physical Science)",
      institution: "Liverpool Int'l College",
      year: "2018 - 2020",
      details: "GPA: 3.21/4.0",
    },
     {
      id: 3,
      degree: "SEE",
      institution: "Arghakhanchi Secondary Boarding School",
      year: "2018",
      details: "GPA: 3.65/4.0",
    },
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      name: "React Advanced Patterns",
      issuer: "Udemy",
      date: "2023",
      credentialUrl: "https://verify.credential.com",
    },
  ],
};