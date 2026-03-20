import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experienceData = [
    {
      title: 'Research Scientist Intern – Few-Shot Learning',
      company: 'Mitsubishi Electric Research Laboratories',
      location: 'Cambridge, MA',
      period: 'Jan 2026 – Present',
      responsibilities: [
        'Developing a neural process framework for industrial sensor anomaly detection; using reinforcement learning to select optimal context set sizes under domain shift',
        'Integrating entropic partial optimal transport with Bayesian network structure for cross-domain feature alignment and pseudo-sample generation; improving R² and reducing training time',
        'Preparing two Python libraries for industrial deployment and publication: one for the neural process pipeline and one for optimal transport, each with evaluation harnesses, baselines, and ablation studies',
        'Collaborating on research applying VLMs and VLAs to robotic manipulation and foundation models for automated scientific discovery in industrial sensing',
      ],
    },
    {
      title: 'Applied Scientist Intern – Multi-Agent Systems',
      company: 'Actual Insight',
      location: 'Nashville, TN',
      period: 'Oct 2025 – Jan 2026',
      responsibilities: [
        'Designed and deployed multi-agent LLM pipelines that extracted actionable insights from enterprise client data; implemented provenance tracking so each output linked back to specific source material',
        'Built privacy-preserving guardrails across the multi-agent pipeline; enforced role-based data scoping so each agent accessed only authorized client segments, with PII redaction and audit logging',
        'Scoped natural language to SQL for small and medium-sized business data using a multi-agent workflow with LangGraph; used locality-sensitive hashing with caching to inject only relevant schema context',
      ],
    },
    {
      title: 'Graduate Researcher',
      company: 'Vanderbilt University – Robotics and Autonomous Systems Lab',
      location: 'Nashville, TN',
      period: 'May 2020 – Present',
      responsibilities: [
        'Shipping a Python xAI library (Tiered xAI Framework) that discovers motion primitives from time-series, aligns them to prototypes, and produces tiered explanations for stakeholder and developer review',
        'Training a few-shot PyTorch model (REACT) in a low-data clinical environment; engineering a multimodal feature pipeline from wearable time-series and audio into 50+ features; tuning with Optuna to reach 84.6% F1',
        'Operating MLOps stack on AWS EC2 with Kafka ingestion, Great Expectations for data quality, and Airflow orchestration in Docker; deploying artifacts to an iOS fleet with real-time inference and Apple Watch alerts',
        'Building an end-to-end wearable biomechanical analysis system: custom PCB with IMUs/ESP32, streaming firmware, cloud ingestion, and a React app with a 3D avatar streaming 100 Hz from 10 IMUs with <1s feedback',
        'Training a TensorFlow/Keras Bi-GRU with 4-head attention to identify digital biomarkers differentiating MCI vs. healthy; reporting 86% F1; applying the xAI library to decompose sequences into motion primitives',
        'Scaled a cross-institution mentorship program; mentored 30+ students (2 to PhD, 3 to master\'s); built onboarding docs, starter repos, and tests that improved reproducibility and delivery velocity',
      ],
    },
    {
      title: 'Co-Founder',
      company: 'JumpStart',
      location: 'Nashville, TN',
      period: 'Jan 2023 – Present',
      responsibilities: [
        'Co-founded a community program where students gain career-ready skills by building pro-bono software for real clients, supported by technical workshops and industry mentorship',
        'Guided students to ship real-time ML systems, including a UAV ground-control station (YOLOv8 + DeepSORT + WebRTC) and an XGBoost clinical analysis tool with online learning for Vanderbilt\'s TRIAD',
        'Mentored 30+ students from several universities across hardware, firmware, and mobile development',
        'Provided a framework for designing and developing production apps using AWS, React, and more',
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