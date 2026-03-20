import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
  const educationItems = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'Vanderbilt University',
      location: 'Nashville, TN',
      period: 'Aug 2020 – June 2026 Expected',
      description: 'Dissertation: "xAI for Wearable Systems: Predicting Behaviors, Monitoring Cognition, and Enhancing Performance"',
    },
    {
      degree: 'M.S. in Computer Science',
      institution: 'Vanderbilt University',
      location: 'Nashville, TN',
      period: 'May 2020 – Dec 2023',
      description: '',
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'Middle Tennessee State University',
      location: 'Murfreesboro, TN',
      period: 'Aug 2017 – May 2020',
      description: '',
    },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      className="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">Who I Am</h3>
          <div className="space-y-4 text-secondary-700">
            <p>
              I'm a Ph.D. candidate in Computer Science at Vanderbilt University and a research scientist with 25+ publications, shipping interpretable ML from prototype to production across healthcare, industrial sensing, and multi-agent systems.
            </p>
            <p>
              My methods span explainable AI, few-shot learning, multimodal sensor fusion, LLMs, VLMs, and agentic pipelines. I've built full MLOps stacks, deployed real-time inference systems on mobile and cloud, and developed open-source Python libraries for xAI and optimal transport.
            </p>
            <p>
              I care about making ML systems that are interpretable, reliable, and production-ready. That means auditable explanations for clinicians, privacy-preserving guardrails for enterprise data, and feedback loops that keep models calibrated over time.
            </p>
            <p>
              Outside of work, I enjoy cooking, boxing, and exploring new restaurants. I'm fluent in English and conversational in Hindi and Urdu.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">Education</h3>
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary-200">
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary-600 -translate-x-[3px]"></div>
                <h4 className="text-xl font-semibold text-secondary-900">{item.degree}</h4>
                <p className="text-primary-700 font-medium">{item.institution}, {item.location}</p>
                <p className="text-secondary-500 text-sm mt-1">{item.period}</p>
                {item.description && (
                  <p className="text-secondary-700 mt-2">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About; 