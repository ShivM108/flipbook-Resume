import React, { useState, useEffect, useRef } from 'react';
import { RESUME_DATA } from '../constants';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Globe, 
  Code, 
  Wrench,
  MessageSquare,
  Languages,
  FolderGit2,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// --- Cover Page ---
export const CoverPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-8 border-4 border-double border-slate-200 p-8 rounded-lg">
    <div className="space-y-4">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 tracking-wide uppercase">
        {RESUME_DATA.name}
      </h1>
      <div className="h-1 w-24 bg-accent mx-auto"></div>
      <h2 className="text-lg md:text-xl font-medium text-slate-600 tracking-widest uppercase">
        {RESUME_DATA.title}
      </h2>
    </div>

    <p className="text-slate-500 italic font-serif max-w-xs mx-auto">
      "{RESUME_DATA.tagline}"
    </p>

    <div className="pt-12 flex flex-col items-center gap-3 text-sm text-slate-600">
      <div className="flex items-center gap-2">
        <Mail size={14} className="text-accent" />
        <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:underline">{RESUME_DATA.contact.email}</a>
      </div>
      <div className="flex items-center gap-2">
        <Phone size={14} className="text-accent" />
        <span>{RESUME_DATA.contact.phone[0]}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-accent" />
        <span>{RESUME_DATA.contact.address}</span>
      </div>
    </div>
  </div>
);

// --- Profile & Summary ---
export const ProfilePage: React.FC = () => (
  <div className="h-full flex flex-col">
    <div className="border-b-2 border-slate-100 pb-4 mb-6">
      <h3 className="text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
        <Briefcase className="text-accent" />
        Career Profile
      </h3>
    </div>
    
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-serif text-justify">
      <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-slate-800">
        {RESUME_DATA.summary}
      </p>
    </div>

    <div className="mt-auto pt-8">
      <h4 className="font-bold text-slate-700 mb-4 uppercase tracking-wider text-sm">Key Highlights</h4>
      <div className="grid grid-cols-1 gap-3">
        {[
          "Front-End Architecture",
          "Prompt Engineering",
          "API Integration",
          "Responsive UI/UX"
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded border border-slate-100">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Skills ---
export const SkillsPage: React.FC = () => (
  <div className="h-full flex flex-col gap-6">
    <div className="border-b-2 border-slate-100 pb-4">
      <h3 className="text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
        <Wrench className="text-accent" />
        Technical Expertise
      </h3>
    </div>

    <div className="space-y-6">
      {/* Technical */}
      <div>
        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-3 text-sm uppercase">
          <Code size={16} className="text-accent" /> Technical Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.technical.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-3 text-sm uppercase">
          <Wrench size={16} className="text-accent" /> Tools & Platforms
        </h4>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.tools.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium border border-slate-200">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-3 text-sm uppercase">
          <MessageSquare size={16} className="text-accent" /> Soft Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.soft.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-3 text-sm uppercase">
          <Languages size={16} className="text-accent" /> Languages
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {RESUME_DATA.skills.languages.map((lang) => (
            <div key={lang} className="text-sm text-slate-600 border-b border-dotted border-slate-300 pb-1">
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Experience ---
export const ExperiencePage: React.FC = () => (
  <div className="h-full flex flex-col">
    <div className="border-b-2 border-slate-100 pb-4 mb-6">
      <h3 className="text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
        <Briefcase className="text-accent" />
        Professional Experience
      </h3>
    </div>

    <div className="space-y-8">
      {RESUME_DATA.experience.map((exp, idx) => (
        <div key={idx} className="relative pl-6 border-l-2 border-slate-200">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-accent"></div>
          
          <h4 className="text-lg font-bold text-slate-800 leading-none">{exp.role}</h4>
          <div className="text-accent font-medium text-sm mt-1">{exp.company}</div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">{exp.duration}</div>
          
          <ul className="mt-4 space-y-2">
            {exp.description.map((desc, i) => (
              <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// --- Projects ---
const ProjectCard: React.FC<{ 
  project: typeof RESUME_DATA.projects[0];
  isPageActive?: boolean;
}> = ({ project, isPageActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If page is not active, reset visibility to allow re-animation when flipping back
    if (!isPageActive) {
      setIsVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isPageActive]);

  return (
    <div 
      ref={cardRef}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // Custom spring/bounce effect
      }}
      className={`bg-slate-50 p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div 
        className="flex items-center justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-slate-800">{project.title}</h4>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="text-accent hover:text-blue-700 transition-colors p-1 z-10"
              aria-label={`View ${project.title}`}
              title="View Project"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        
        <button 
          className="text-xs font-semibold text-slate-400 group-hover:text-accent transition-colors flex items-center gap-1 uppercase tracking-wide"
        >
          {isOpen ? 'Show Less' : 'Show More'}
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 bg-white text-slate-700 rounded-full text-xs font-medium border border-slate-200 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsPage: React.FC<{ isPageActive?: boolean }> = ({ isPageActive }) => (
  <div className="h-full flex flex-col">
    <div className="border-b-2 border-slate-100 pb-4 mb-6">
      <h3 className="text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
        <FolderGit2 className="text-accent" />
        Projects
      </h3>
    </div>

    <div className="space-y-4">
      {RESUME_DATA.projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} isPageActive={isPageActive} />
      ))}
    </div>
  </div>
);

// --- Education & Certifications ---
export const EducationPage: React.FC = () => (
  <div className="h-full flex flex-col gap-8">
    
    {/* Education Section */}
    <div>
      <div className="border-b-2 border-slate-100 pb-4 mb-4">
        <h3 className="text-xl font-serif font-bold text-slate-800 flex items-center gap-3">
          <GraduationCap className="text-accent" />
          Education
        </h3>
      </div>

      <div className="space-y-6">
        {RESUME_DATA.education.map((edu, idx) => (
          <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-slate-700 text-sm">{edu.degree}</h4>
              <span className="text-xs font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                {edu.duration}
              </span>
            </div>
            <div className="text-sm text-accent mb-2">{edu.institution}</div>
            {edu.location && <div className="text-xs text-slate-400 mb-2 flex items-center gap-1"><MapPin size={10}/> {edu.location}</div>}
            <div className="text-xs text-slate-600 italic border-t border-slate-200 pt-2 mt-2">
              Result: {edu.details}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Certifications Section */}
    <div className="flex-1">
      <div className="border-b-2 border-slate-100 pb-4 mb-4">
        <h3 className="text-xl font-serif font-bold text-slate-800 flex items-center gap-3">
          <Award className="text-accent" />
          Certifications
        </h3>
      </div>
      <ul className="space-y-3">
        {RESUME_DATA.certifications.map((cert, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
             <div className="mt-1 text-accent"><Award size={16} /></div>
             <div>
               <strong className="block text-slate-800">{cert.name}</strong>
               <span className="text-xs text-slate-500">{cert.issuer}</span>
             </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// --- Contact / Back Cover ---
export const ContactPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-8 bg-slate-50 -m-6 md:-m-10 p-6 md:p-10">
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
      <Mail className="text-accent" size={32} />
    </div>

    <h2 className="text-2xl font-serif font-bold text-slate-800">Get In Touch</h2>
    <p className="text-slate-600 max-w-xs mx-auto">
      I am available for Front-End Development and Prompt Engineering roles.
    </p>

    <div className="w-full max-w-xs space-y-4">
      <a 
        href={`mailto:${RESUME_DATA.contact.email}`}
        className="flex items-center gap-3 p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-slate-700 text-sm"
      >
        <Mail size={16} className="text-accent" />
        <span className="truncate">{RESUME_DATA.contact.email}</span>
      </a>

      {RESUME_DATA.contact.phone.map((phone, i) => (
        <a 
          key={i}
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="flex items-center gap-3 p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-slate-700 text-sm"
        >
          <Phone size={16} className="text-accent" />
          <span>{phone}</span>
        </a>
      ))}

      {RESUME_DATA.contact.portfolio && (
        <a 
          href={RESUME_DATA.contact.portfolio}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-slate-700 text-sm"
        >
          <Globe size={16} className="text-accent" />
          <span className="truncate">Portfolio</span>
        </a>
      )}

      {RESUME_DATA.contact.github && (
        <a 
          href={RESUME_DATA.contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-slate-700 text-sm"
        >
          <Github size={16} className="text-accent" />
          <span className="truncate">GitHub Profile</span>
        </a>
      )}
    </div>

    <div className="mt-auto text-xs text-slate-400">
      &copy; {new Date().getFullYear()} Shiv Kumar Mochi
    </div>
  </div>
);