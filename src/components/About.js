import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
  const educationItems = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'Vanderbilt University',
      location: 'Nashville, TN',
      period: 'Expected December 2025',
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
      subtitle="Learn more about my background, education, and interests"
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
              I'm a Ph.D. student in Computer Science at Vanderbilt University with a strong foundation in machine learning, software development, and human-centered AI. My work spans explainable AI, sensor-based modeling, and predictive analytics, with applications in healthcare, sports, and beyond.
            </p>
            <p>
              The projects I've led range from developing ML models for behavior prediction and cognitive monitoring to building cross-platform applications and backend systems for real-time data processing. My experience spans computer vision, NLP, time-series analysis, and full-stack development.
            </p>
            <p>
              I'm passionate about bridging the gap between research and real-world applications, designing AI-driven solutions that are both powerful and accessible. Whether it's optimizing sports performance, improving health outcomes, or streamlining complex workflows, I focus on creating practical, interpretable, and user-friendly technology.
            </p>
            <p>
              Outside of work, I enjoy cooking, boxing, and exploring new restaurants. I'm fluent in English and have conversational skills in Hindi and Urdu.
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