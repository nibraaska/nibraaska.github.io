import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { tools } from '../data/toolsData';

const Skills = () => {
  // Group tools by category
  const groupedTools = tools.reduce((acc, tool) => {
    const category = tool.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tool);
    return acc;
  }, {});

  // Create skill categories array from grouped tools
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: groupedTools['Programming Languages'] || [],
    },
    {
      title: 'Data Science & Machine Learning',
      skills: groupedTools['Data Science & Machine Learning'] || [],
    },
    {
      title: 'Web & Mobile Development',
      skills: groupedTools['Web & Mobile Development'] || [],
    },
    {
      title: 'Research & Specialized Skills',
      skills: groupedTools['Research & Specialized Skills'] || [],
    },
  ];

  // Get additional skills from the "Additional Skills & Tools" category
  const additionalSkills = groupedTools['Additional Skills & Tools'] || [];

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technical abilities and specialized knowledge"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-secondary-50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                {categoryIndex + 1}
              </span>
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <a 
                  key={skillIndex}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center mr-3">
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="font-medium text-secondary-800">{skill.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 bg-secondary-50 rounded-xl p-6 md:p-8"
      >
        <h3 className="text-xl font-bold text-secondary-900 mb-4">Additional Skills & Tools</h3>
        <div className="flex flex-wrap gap-3">
          {additionalSkills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-secondary-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills; 