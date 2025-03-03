import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
              <span className="block text-4xl">Hi, I'm</span>
              <span className="text-primary-600">Nibraas Khan</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-700 mb-8">
              Ph.D. Student in Computer Science at Vanderbilt University
            </p>
            <p className="text-lg text-secondary-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Specializing in xAI for Wearable Systems, Behavioral Prediction, and Cognitive Monitoring.
              Passionate about leveraging technology to enhance human performance and improve lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View my work
              </a>
              <a
                href="Nibraas_Resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my resume
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full blur opacity-75"></div>
              <div className="relative bg-white rounded-full p-1.5">
                <div className="aspect-square rounded-full bg-secondary-100 flex items-center justify-center overflow-hidden">
                  <img src="headshot.png" alt="Headshot of Nibraas Khan" className="aspect-square rounded-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-secondary-500 hover:text-primary-600 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 