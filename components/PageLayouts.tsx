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
  ChevronUp,
  ArrowUp,
  Search
} from 'lucide-react';

// --- Cover Page ---
export const CoverPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-8 border-4 border-double border-slate-200 p-4 sm:p-8 rounded-lg">
    <div className="space-y-3 md:space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-800 tracking-wide uppercase leading-tight">
        {RESUME_DATA.name}
      </h1>
      <div className="h-1 w-16 sm:w-24 bg-accent mx-auto"></div>
      <h2 className="text-sm sm:text-lg md:text-xl font-medium text-slate-600 tracking-widest uppercase">
        {RESUME_DATA.title}
      </h2>
    </div>

    <p className="text-slate-500 italic font-serif max-w-[240px] sm:max-w-xs mx-auto text-sm sm:text-base">
      "{RESUME_DATA.tagline}"
    </p>

    <div className="pt-6 md:pt-12 flex flex-col items-center gap-2 md:gap-3 text-xs sm:text-sm text-slate-600">
      <div className="flex items-center gap-2">
        <Mail size={14} className="text-accent" />
        <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:underline break-all">{RESUME_DATA.contact.email}</a>
      </div>
      <div className="flex items-center gap-2">
        <Phone size={14} className="text-accent" />
        <span>{RESUME_DATA.contact.phone[0]}</span>
      </div>
      <div className="flex items-center gap-2 text-center">
        <MapPin size={14} className="text-accent flex-shrink-0" />
        <span>{RESUME_DATA.contact.address}</span>
      </div>
    </div>
  </div>
);

// --- Profile & Summary ---
export const ProfilePage: React.FC = () => (
  <div className="h-full flex flex-col">
    <div className="border-b-2 border-slate-100 pb-3 md:pb-4 mb-4 md:mb-6">
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
        <Briefcase className="text-accent" />
        Career Profile
      </h3>
    </div>
    
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-serif text-justify text-sm sm:text-base">
      <p className="first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-slate-800">
        {RESUME_DATA.summary}
      </p>
    </div>

    <div className="mt-auto pt-6 md:pt-8">
      <h4 className="font-bold text-slate-700 mb-3 md:mb-4 uppercase tracking-wider text-xs sm:text-sm">Key Highlights</h4>
      <div className="grid grid-cols-1 gap-2 md:gap-3">
        {[
          "Front-End Architecture",
          "Prompt Engineering",
          "API Integration",
          "Responsive UI/UX"
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-slate-600 bg-slate-50 p-2.5 md:p-3 rounded border border-slate-100 text-xs sm:text-sm">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full"></div>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Skills ---
export const SkillsPage: React.FC = () => (
  <div className="h-full flex flex-col gap-5 md:gap-6">
    <div className="border-b-2 border-slate-100 pb-3 md:pb-4">
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
        <Wrench className="text-accent" />
        Technical Expertise
      </h3>
    </div>

    <div className="space-y-5 md:space-y-6">
      {/* Technical */}
      <div>
        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-2 md:mb-3 text-sm uppercase">
          <Code size={16} className="text-accent" /> Technical Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.technical.map((skill) => (
            <span key={skill} className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-2 md:mb-3 text-sm uppercase">
          <Wrench size={16} className="text-accent" /> Tools & Platforms
        </h4>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.tools.map((skill) => (
            <span key={skill} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium border border-slate-200">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-2 md:mb-3 text-sm uppercase">
          <MessageSquare size={16} className="text-accent" /> Soft Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.soft.map((skill) => (
            <span key={skill} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-100">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-2 md:mb-3 text-sm uppercase">
          <Languages size={16} className="text-accent" /> Languages
        </h4>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 md:gap-2">
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

const ExperienceCard: React.FC<{ 
  exp: typeof RESUME_DATA.experience[0]; 
  index: number;
  isPageActive?: boolean;
}> = ({ exp, index, isPageActive }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPageActive) {
      setIsVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isPageActive, index]);

  return (
    <div 
      ref={cardRef}
      className={`relative pl-5 sm:pl-8 border-l-2 border-slate-200 pb-1 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-accent z-10"></div>
      
      <div className="bg-gradient-to-br from-white to-slate-100/50 p-4 sm:p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">{exp.role}</h4>
        <div className="text-accent font-medium text-sm mt-1">{exp.company}</div>
        <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">{exp.duration}</div>
        
        <ul className="mt-3 md:mt-4 space-y-2">
          {exp.description.map((desc, i) => (
            <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ExperiencePage: React.FC<{ isPageActive?: boolean }> = ({ isPageActive }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = contentRef.current?.closest('.overflow-y-auto') as HTMLElement;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 150) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = contentRef.current?.closest('.overflow-y-auto');
    scrollContainer?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="h-full flex flex-col relative" ref={contentRef}>
      <div className="border-b-2 border-slate-100 pb-3 md:pb-4 mb-4 md:mb-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
          <Briefcase className="text-accent" />
          Professional Experience
        </h3>
      </div>

      <div className="space-y-6 md:space-y-8 pb-10">
        {RESUME_DATA.experience.map((exp, idx) => (
          <ExperienceCard 
            key={idx}
            exp={exp}
            index={idx}
            isPageActive={isPageActive}
          />
        ))}
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 p-2 md:p-3 bg-accent text-white rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 z-50 print:hidden ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to Top"
        title="Back to Top"
      >
        <ArrowUp size={16} className="md:w-5 md:h-5" />
      </button>
    </div>
  );
};

// --- Projects ---
const ProjectCard: React.FC<{ 
  project: typeof RESUME_DATA.projects[0];
  isPageActive?: boolean;
  index: number;
}> = ({ project, isPageActive, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPageActive) {
      setIsVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
           setTimeout(() => setIsVisible(true), 50);
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

  const toggleOpen = () => {
    const nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);
    
    if (nextIsOpen) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'in progress': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-slate-50 text-slate-500 border-slate-200';
    }
  };

  return (
    <div 
      ref={cardRef}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        transitionDelay: `${index * 150}ms`
      }}
      className={`bg-slate-50 p-3 sm:p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div 
        className="flex items-start justify-between cursor-pointer group select-none"
        onClick={toggleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleOpen();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col max-w-[80%]">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-tight">{project.title}</h4>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center bg-blue-50 text-accent hover:bg-accent hover:text-white transition-all p-1 rounded-full ml-1 shadow-sm border border-blue-100 hover:border-accent z-10"
                aria-label={`View ${project.title}`}
                title="View Project"
                onClick={(e) => e.stopPropagation()}
                tabIndex={0}
              >
                <ExternalLink size={12} />
              </a>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-[11px] sm:text-xs text-slate-400 font-medium">{project.date}</span>
            <span className={`text-[10px] sm:text-[11px] font-medium px-1.5 py-0.5 rounded border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>
        
        <div 
          className="text-[11px] sm:text-xs font-semibold text-slate-400 group-hover:text-accent transition-colors flex items-center gap-1 uppercase tracking-wide mt-1 print:hidden"
        >
          <span className="hidden sm:inline">{isOpen ? 'Less' : 'More'}</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </div>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[800px] opacity-100 mt-3 md:mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-slate-600 mb-3 md:mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="pt-2 border-t border-slate-100 mt-2">
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                style={{
                  transitionDelay: isOpen ? `${i * 50 + 200}ms` : '0ms'
                }}
                className={`px-2 py-0.5 md:px-2.5 md:py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] sm:text-xs font-medium border border-slate-200 transition-all duration-500 ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsPage: React.FC<{ isPageActive?: boolean }> = ({ isPageActive }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = RESUME_DATA.projects.filter(project => {
    const term = searchTerm.toLowerCase();
    const matchesTitle = project.title.toLowerCase().includes(term);
    const matchesTech = project.technologies.some(tech => tech.toLowerCase().includes(term));
    return matchesTitle || matchesTech;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="border-b-2 border-slate-100 pb-3 md:pb-4 mb-4 md:mb-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
          <FolderGit2 className="text-accent" />
          Projects
        </h3>
      </div>
      
      <div className="relative mb-4 md:mb-6 print:hidden">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-9 pr-3 py-2 md:pl-10 border border-slate-200 rounded-md leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-accent focus:ring-1 focus:ring-accent text-sm transition-colors text-slate-700"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-3 md:space-y-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} index={idx} project={project} isPageActive={isPageActive} />
          ))
        ) : (
          <div className="text-center text-slate-500 py-6 md:py-8 italic border border-dashed border-slate-200 rounded-lg text-sm">
            No projects found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

// --- Education & Certifications ---
export const EducationPage: React.FC = () => (
  <div className="h-full flex flex-col gap-6 md:gap-8">
    
    {/* Education Section */}
    <div>
      <div className="border-b-2 border-slate-100 pb-3 md:pb-4 mb-3 md:mb-4">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
          <GraduationCap className="text-accent" />
          Education
        </h3>
      </div>

      <div className="space-y-4 md:space-y-6">
        {RESUME_DATA.education.map((edu, idx) => (
          <div key={idx} className="bg-slate-50 p-3 md:p-4 rounded-lg border border-slate-100">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-slate-700 text-sm">{edu.degree}</h4>
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200 whitespace-nowrap ml-2">
                {edu.duration}
              </span>
            </div>
            <div className="text-xs sm:text-sm text-accent mb-2">{edu.institution}</div>
            {edu.location && <div className="text-[11px] sm:text-xs text-slate-400 mb-2 flex items-center gap-1"><MapPin size={10}/> {edu.location}</div>}
            <div className="text-[11px] sm:text-xs text-slate-600 italic border-t border-slate-200 pt-2 mt-2">
              Result: {edu.details}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Certifications Section */}
    <div className="flex-1">
      <div className="border-b-2 border-slate-100 pb-3 md:pb-4 mb-3 md:mb-4">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 flex items-center gap-3">
          <Award className="text-accent" />
          Certifications
        </h3>
      </div>
      <ul className="space-y-2 md:space-y-3">
        {RESUME_DATA.certifications.map((cert, idx) => (
          <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm text-slate-600">
             <div className="mt-0.5 md:mt-1 text-accent"><Award size={14} className="md:w-4 md:h-4"/></div>
             <div>
               <strong className="block text-slate-800">{cert.name}</strong>
               <span className="text-[11px] sm:text-xs text-slate-500">{cert.issuer}</span>
             </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// --- Contact / Back Cover ---
export const ContactPage: React.FC = () => (
  // Updated negative margins to match the new FlipBook padding: p-4 sm:p-8 md:p-12
  // Logic: -m-4 cancels p-4, -m-8 cancels sm:p-8, -m-12 cancels md:p-12
  // Print override: print:m-0 print:p-0 print:h-auto print:bg-transparent to ensure it flows normally in print view
  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-8 bg-slate-50 -m-4 sm:-m-8 md:-m-12 p-4 sm:p-8 md:p-12 print:m-0 print:p-0 print:h-auto print:bg-transparent">
    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-2 md:mb-4">
      <Mail className="text-accent w-6 h-6 md:w-8 md:h-8" />
    </div>

    <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-800">Get In Touch</h2>
    <p className="text-slate-600 max-w-xs mx-auto text-sm sm:text-base">
      I am available for Front-End Development and Prompt Engineering roles.
    </p>

    <div className="w-full max-w-xs space-y-3 md:space-y-4">
      <a 
        href={`mailto:${RESUME_DATA.contact.email}`}
        className="flex items-center gap-3 p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-slate-700 text-sm"
      >
        <Mail size={16} className="text-accent flex-shrink-0" />
        <span className="truncate">{RESUME_DATA.contact.email}</span>
      </a>

      {RESUME_DATA.contact.phone.map((phone, i) => (
        <a 
          key={i}
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="flex items-center gap-3 p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-slate-700 text-sm"
        >
          <Phone size={16} className="text-accent flex-shrink-0" />
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
          <Globe size={16} className="text-accent flex-shrink-0" />
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
          <Github size={16} className="text-accent flex-shrink-0" />
          <span className="truncate">GitHub Profile</span>
        </a>
      )}
    </div>

    <div className="mt-auto text-[11px] sm:text-xs text-slate-400">
      &copy; {new Date().getFullYear()} Shiv Kumar Mochi
    </div>
  </div>
);