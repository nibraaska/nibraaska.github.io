import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Service = () => {
  const journals = [
    'BMC Psychiatry',
    'Frontiers in Psychiatry',
    'Scientific Reports',
    'Research in Autism Spectrum Disorders',
    'Discover Applied Sciences',
    'IEEE Transactions on Intelligent Transportation Systems',
    'IEEE Transactions on Neural Systems & Rehabilitation Engineering',
    'The Egyptian Journal of Otolaryngology',
    'Pervasive and Mobile Computing',
    'Behaviour & Information Technology',
    'Young Scientist',
  ];

  const conferences = [
    'IEEE RO-MAN 2025',
    'ACM CHIL 2023',
    'HRI 2025',
    'CogSci 2025',
  ];

  return (
    <Section
      id="service"
      title="Service"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-base font-semibold text-secondary-500 uppercase tracking-wide mb-4">Journal Reviewer</h3>
          <ul className="space-y-2">
            {journals.map((journal, index) => (
              <li key={index} className="text-secondary-700 text-sm">{journal}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-base font-semibold text-secondary-500 uppercase tracking-wide mb-4">Conference Reviewer</h3>
          <ul className="space-y-2">
            {conferences.map((conf, index) => (
              <li key={index} className="text-secondary-700 text-sm">{conf}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default Service;
