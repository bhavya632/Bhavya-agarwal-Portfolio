import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { RESUME_DATA } from '../constants';
import { Code2, Layout, Database, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Languages')) return <Code2 size={20} />;
    if (category.includes('Frontend')) return <Layout size={20} />;
    if (category.includes('Data')) return <Database size={20} />;
    return <Cloud size={20} />;
  };

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESUME_DATA.skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-accent/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4 text-accent">
              {getIcon(skillGroup.category)}
              <h3 className="font-semibold text-lg text-slate-100">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;