import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
            <span className="text-accent text-2xl">#</span> {title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary mt-4 rounded-full" />
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default Section;