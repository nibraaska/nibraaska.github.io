import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: 'Sports Analytics Platform',
      period: '2024 – Present',
      description:
        'Engineered a sports analytics platform using IMUs, insole sensors, and ML for biomechanical concept extraction. Applied to 100+ athletes, improving technique retention by 30%.',
      technologies: ['Python', 'PyTorch', 'Unity', 'C#', 'Sensor Integration'],
      highlights: [
        'Developed algorithms to extract key biomechanical features',
        'Created visualization tools for coaches and athletes',
        'Implemented real-time feedback mechanisms',
      ],
    },
    {
      title: 'Gait Analysis for MCI',
      period: '2024 – Present',
      description:
        'Built a pipeline for gait analysis in Mild Cognitive Impairment using 50+ biomechanical features from 30 participants, identifying key markers of cognitive decline.',
      technologies: ['Python', 'Statistical Analysis', 'Sensor Data Processing'],
      highlights: [
        'Extracted and analyzed complex gait patterns',
        'Identified correlations between gait and cognitive performance',
        'Developed clinical assessment tools',
      ],
    },
    {
      title: 'Explainable AI for Autism',
      period: '2023 – Present',
      description:
        'Implemented an explainable AI system for behavioral prediction in Autism Spectrum Disorder, achieving 90% F1 score in identifying precursors to challenging behaviors.',
      technologies: ['Python', 'TensorFlow', 'Wearable Sensors', 'XAI Techniques'],
      highlights: [
        'Developed interpretable ML models for clinical use',
        'Created visualization tools for non-technical stakeholders',
        'Integrated multiple sensor modalities for improved accuracy',
      ],
    },
    {
      title: 'Algorithmic Trading',
      period: 'Aug 2022 – Present',
      description:
        'Developing securities price prediction models using reinforcement learning and various neural networks. Achieved a 15% return over 6 months with momentum-based trading algorithms.',
      technologies: ['Python', 'TensorFlow', 'QuantConnect', 'Reinforcement Learning'],
      highlights: [
        'Implemented mean-reversion models and Bollinger Bands',
        'Improved execution efficiency by 30% using multithreading',
        'Built automated portfolio rebalancing pipelines',
      ],
    },
    {
      title: 'Mobile Health App for ASD',
      period: '2022 – 2023',
      description:
        'Built a cross-platform Flutter survey app for caregivers of children with Autism Spectrum Disorder, facilitating data collection for research and clinical interventions.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'RESTful APIs'],
      highlights: [
        'Implemented secure data collection and storage',
        'Created an intuitive interface for non-technical users',
        'Integrated with research databases',
      ],
    },
    {
      title: 'Steganography GAN',
      period: '2020',
      description:
        'Developed a Generative Adversarial Network to detect hidden messages in images (steganography), creating a novel approach to cybersecurity challenges.',
      technologies: ['Python', 'TensorFlow', 'GANs', 'Image Processing'],
      highlights: [
        'Implemented custom GAN architecture',
        'Achieved high detection rates for various steganography methods',
        'Published research findings on arXiv',
      ],
    },
  ];

  return (
    <Section
      id="projects"
      title="Projects"
      className="bg-white"
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === index
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {project.title}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-secondary-50 rounded-xl shadow-lg p-6 md:p-8"
      >
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <h3 className="text-2xl font-bold text-secondary-900">
              {projects[activeTab].title}
            </h3>
            <span className="text-secondary-500 text-sm">{projects[activeTab].period}</span>
          </div>
        </div>

        <p className="text-secondary-700 mb-6">{projects[activeTab].description}</p>

        <ul className="space-y-3 mb-6">
          {projects[activeTab].highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span className="text-secondary-700">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {projects[activeTab].technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;
