import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {title && (
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
              <div className="w-24 h-1 bg-primary-600 mx-auto mt-6"></div>
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section; 