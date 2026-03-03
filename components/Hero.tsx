import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6 font-mono text-sm tracking-wide">
            HELLO WORLD
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">{RESUME_DATA.name + '!'}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto font-light">
            {RESUME_DATA.title}
          </p>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Specializing in building scalable AI solutions, Data Science, and Machine Learning applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
             <a href="#contact" className="px-6 py-3 rounded-full bg-accent text-primary font-bold hover:bg-white transition-colors duration-300">
              Get in Touch
            </a>
            <a href="#experience" className="px-6 py-3 rounded-full bg-transparent border border-slate-600 text-white hover:border-accent hover:text-accent transition-colors duration-300">
              View Work
            </a>
          </div>

          <div className="flex justify-center gap-6 text-slate-400">
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-accent hover:scale-110 transition-all">
              <Mail size={24} />
            </a>
            <a href={RESUME_DATA.contact.linkedin} className="hover:text-accent hover:scale-110 transition-all">
              <FaLinkedin size={24} />
            </a>
            <a href={RESUME_DATA.contact.github} className="hover:text-accent hover:scale-110 transition-all">
              <FaGithub size={24} />
            </a>
            <a href={RESUME_DATA.contact.resume} className="hover:text-accent hover:scale-110 transition-all">
              <FileText size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;