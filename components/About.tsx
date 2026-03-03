import React from 'react';
import Section from './ui/Section';
import { RESUME_DATA } from '../constants';
import { BookOpen, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="Education & Background">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-primary p-4 rounded-full border border-slate-700 text-accent shrink-0">
             <GraduationCap size={40} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">{RESUME_DATA.education.school}</h3>
              <span className="text-accent font-mono">{RESUME_DATA.education.graduation}</span>
            </div>
            <p className="text-xl text-slate-300 mb-2">{RESUME_DATA.education.degree}</p>
            <p className="text-slate-400 mb-6">GPA: <span className="text-white font-semibold">{RESUME_DATA.education.gpa}</span></p>

            <div className="mb-4">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                <BookOpen size={20} className="text-secondary" />
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.education.coursework.map((course) => (
                  <span key={course} className="px-3 py-1 bg-slate-700/30 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-secondary/50 transition-colors">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;