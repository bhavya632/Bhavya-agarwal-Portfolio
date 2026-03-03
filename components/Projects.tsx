import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { RESUME_DATA } from '../constants';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RESUME_DATA.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-xl group"
          >
            {/* Visual Header Gradient */}
            <div className={`h-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-accent to-blue-600' : 'from-secondary to-purple-600'}`} />

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 italic mt-1">{project.association}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono bg-slate-900 text-accent px-2 py-1 rounded border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {project.points.map((point, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-slate-500" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-700 flex justify-between items-center">
                 <span className="text-xs text-slate-500 font-mono">{project.period}</span>
                 <button className="text-sm font-semibold text-white flex items-center gap-2 hover:gap-3 transition-all">
                    <a href={project.github_repo} target="_blank" rel="noopener noreferrer">
                       View Details 
                    </a>
                 </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;