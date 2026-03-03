import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { RESUME_DATA } from '../constants';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  // Combine Experience and Leadership for the timeline
  const fullTimeline = [
    { type: 'Experience', ...RESUME_DATA.experience[0] }, // AI/ML Intern
    { type: 'Experience', ...RESUME_DATA.experience[1] }, // MIT Fellow
    { type: 'Experience', ...RESUME_DATA.experience[2] }, // IT Desk
    { type: 'Leadership', ...RESUME_DATA.leadership[0] }, // Resident Assistant
  ];

  return (
    <Section id="experience" title="Experience & Leadership">
      <div className="relative container mx-auto px-0 md:px-4">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2"></div>

        {fullTimeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex items-start mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary border-2 border-accent rounded-full z-10 mt-1.5"></div>

            {/* Content Spacer for formatting */}
            <div className="hidden md:block w-1/2" />

            {/* Content Box */}
            <div className="w-full md:w-1/2 pl-12 md:text-left">
              <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-300">
                <span className={`text-xs font-bold uppercase tracking-wider mb-2 inline-block px-2 py-0.5 rounded ${
                  item.type === 'Leadership' ? 'bg-secondary/20 text-secondary' : 'bg-accent/20 text-accent'
                }`}>
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <h4 className="text-lg text-slate-300 mb-2 flex items-center gap-2 md:inline-flex md:gap-2">
                   {item.company}
                </h4>

                <div className="flex flex-col gap-1 text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* left‑aligned bullets */}
                <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;