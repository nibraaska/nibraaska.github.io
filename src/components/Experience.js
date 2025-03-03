import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experienceData = [
    {
      title: 'Research Assistant',
      company: 'Vanderbilt University',
      location: 'Nashville, TN',
      period: 'May 2020 – Present',
      responsibilities: [
        'Leading research on comparing novice and expert boxing techniques using IMU sensors and GRF insoles',
        'Developing ML models to detect precursors to dangerous behaviors in children with autism',
        'Analyzing gait differences between MCI and non-MCI participants during cognitive/physical tasks',
        'Designing an on-road driving analysis tool for drivers with Autism Spectrum Disorder',
        'Built a cross-platform Flutter survey app for caregivers of children with ASD',
        'Engineered a sports analytics platform for biomechanical concept extraction',
        'Implemented an explainable AI system for behavioral prediction in ASD (90% F1 score)',
        'Built a pipeline for gait analysis in MCI using 50+ biomechanical features',
        'Created interactive dashboards for clinical and non-technical teams',
      ],
    },
    {
      title: 'Co-Founder',
      company: 'JumpStart',
      location: 'Nashville, TN',
      period: 'Jan 2023 – Present',
      responsibilities: [
        'Created a structured development initiative for college students',
        'Connected product owners with project managers/developers to create real-world products',
        'Collaborated with multiple clients (Wond\'ry at Vanderbilt, TRIAD, Freedom Co, Nexus)',
        'Mentored 20+ students from several universities',
        'Provided a framework for designing/developing production apps using AWS, React, etc.',
        'Managed logistics for better engagement between students and business partners',
      ],
    },
    {
      title: 'Mentor',
      company: 'Develop for Good',
      location: 'Remote',
      period: 'Jan 2023 – Jul 2023',
      responsibilities: [
        'Guided a cross-functional team in creating an educational application for teachers in rural Africa',
        'Oversaw project phases from conception to development',
        'Provided mentorship on both technical and client communication aspects',
        'Ensured alignment with client needs throughout the development process',
      ],
    },
    {
      title: 'Research Assistant',
      company: 'MTSU\'s Phillip Lab',
      location: 'Murfreesboro, TN',
      period: 'Aug 2018 – May 2020',
      responsibilities: [
        'Combined the Working Memory and N-task Learning toolkit to create the Partially Observable Non-Observable toolkit',
        'Improved it via dynamic features and neural network value transfer based on computational neuroscience models',
        'Implemented reinforcement learning algorithms for task switching problems',
        'Conducted experiments and analyzed results for publication',
      ],
    },
    {
      title: 'Android Developer',
      company: 'MTSU Mobile Team',
      location: 'Murfreesboro, TN',
      period: 'Feb 2019 – May 2020',
      responsibilities: [
        'Built the official Middle Tennessee State University Android app (over 30,000 users)',
        'Used Kotlin, Java, Picasso, Retrofit, and other modern Android libraries',
        'Implemented MVVM architecture for modular design',
        'Collaborated with UI/UX designers to create intuitive user interfaces',
        'Participated in code reviews and quality assurance testing',
      ],
    },
  ];

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="My journey through academia and industry"
      className="bg-secondary-50"
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {experienceData.map((exp, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === index
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-secondary-700 hover:bg-secondary-100'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {exp.company}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6 md:p-8"
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-secondary-900">
            {experienceData[activeTab].title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 mt-2">
            <span className="text-primary-600 font-semibold">
              {experienceData[activeTab].company}
            </span>
            <span className="text-secondary-400">|</span>
            <span className="text-secondary-600">
              {experienceData[activeTab].location}
            </span>
          </div>
          <p className="text-secondary-500 mt-1">
            {experienceData[activeTab].period}
          </p>
        </div>

        <ul className="space-y-3">
          {experienceData[activeTab].responsibilities.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span className="text-secondary-700">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
};

export default Experience; 