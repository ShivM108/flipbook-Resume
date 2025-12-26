import React from 'react';
import { FlipBook } from './components/FlipBook';
import { 
  CoverPage, 
  ProfilePage, 
  SkillsPage, 
  ExperiencePage, 
  ProjectsPage,
  EducationPage, 
  ContactPage 
} from './components/PageLayouts';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-200">
      <FlipBook>
        <CoverPage />
        <ProfilePage />
        <SkillsPage />
        <ExperiencePage />
        <ProjectsPage />
        <EducationPage />
        <ContactPage />
      </FlipBook>
    </div>
  );
}

export default App;