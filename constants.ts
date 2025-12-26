import { ResumeData } from './types';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Palette, 
  Globe, 
  Languages, 
  MapPin, 
  Phone, 
  Mail, 
  Link as LinkIcon 
} from 'lucide-react';

export const RESUME_DATA: ResumeData = {
  name: "SHIV KUMAR MOCHI",
  title: "COMPUTER SCIENCE ENGINEERING",
  tagline: "Innovative Prompt Engineering & Front-End Developer",
  summary: "Innovative PROMPT ENGINEERING and Front-End Developer with expertise in designing, developing, and managing complex websites and web-applications. Proficient in JavaScript, HTML5, CSS, responsive design, and API integration. Strong problem-solving abilities with a focus on enhancing user experience and website performance. Effective collaborator with strategic project management skills.",
  contact: {
    phone: ["+977 9811707672", "+91 9876860989"],
    email: "shivmehra1008@gmail.com",
    address: "Lahan-6, Siraha, 02, Nepal",
    github: "https://github.com/ShivM108",
    portfolio: "https://civil-amaranth-ifyzycavnl.edgeone.dev/"
  },
  skills: {
    technical: [
      "HTML5 / CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "API Integration",
      "Responsive Design",
      "Prompt Engineering"
    ],
    tools: [
      "Vercel",
      "Netlify",
      "Figma",
      "Canvas (Logo, Thumbnails)",
      "MS Office"
    ],
    soft: [
      "Good Communication",
      "Client Friendly Design",
      "Problem Solving",
      "Project Management"
    ],
    languages: [
      "Maithili (Native)",
      "Nepali",
      "Hindi",
      "English",
      "Bhojpuri"
    ]
  },
  experience: [
    {
      company: "Croma Campus Pvt Ltd, Noida",
      role: "Web Designing Trainee",
      duration: "Feb 2025 – Aug 2025",
      type: "Training",
      description: [
        "Specialized training in Web Designing technologies.",
        "Focused on front-end development principles and practices."
      ]
    },
    {
      company: "Fresher",
      role: "Aspiring Developer",
      duration: "Present",
      description: [
        "Seeking opportunities to leverage skills in Front-End Development and Prompt Engineering.",
        "Ready to apply knowledge of API integration and responsive design in a professional setting."
      ]
    }
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website designed to showcase professional background, skills, and projects. Features a clean, modern UI optimized for all devices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      link: "https://civil-amaranth-ifyzycavnl.edgeone.dev/",
      date: "Sep 2024",
      status: "Completed"
    },
    {
      title: "Web Design Prototypes",
      description: "Developed various responsive web layouts and interface components during web design training. Focused on cross-browser compatibility and user experience best practices.",
      technologies: ["Bootstrap", "jQuery", "HTML/CSS", "Figma"],
      date: "Aug 2024",
      status: "Completed"
    }
  ],
  education: [
    {
      institution: "Swami Vivekanand Groups of Engineering & Technology",
      location: "Chandigarh",
      degree: "Diploma in Computer Science Engineering",
      duration: "Dec 2025 (Expected)",
      details: "75+ % (1 backlog in 3rd Sem)"
    },
    {
      institution: "Shree Pashupati Aadrash Secondary School",
      location: "Lahan-1, Matiyarwa, Siraha",
      degree: "10th Board (NEB)",
      duration: "Aug 2021",
      details: "75 % (4.00 / 3.00 GPA)"
    }
  ],
  certifications: [
    {
      name: "Google Digital Unlocked",
      issuer: "Google",
      description: "Online Marketing Fundamentals"
    },
    {
      name: "Microsoft AI Classroom Series",
      issuer: "Microsoft",
      description: "AI Classroom series program certification"
    },
    {
      name: "World Health Organization",
      issuer: "WHO",
      description: "Course Completion"
    }
  ]
};

export const PAGE_COLORS = [
  'bg-white',
  'bg-slate-50',
  'bg-white',
  'bg-slate-50',
  'bg-white',
  'bg-slate-50',
  'bg-white',
  'bg-slate-50',
];