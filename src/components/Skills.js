import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Skills = () => {
  const specializations = [
    {
      area: 'Explainable AI',
      detail: 'Motion primitive discovery, prototype alignment, tiered stakeholder explanations, saliency over raw signals, counterfactual exploration, and model-agnostic APIs for PyTorch and TensorFlow.',
    },
    {
      area: 'Few-Shot & Low-Data Learning',
      detail: 'Neural processes, meta-learning, entropic optimal transport for cross-domain alignment, pseudo-sample generation, and clinical deployment under data scarcity.',
    },
    {
      area: 'Multimodal Sensor Fusion',
      detail: 'Wearable IMUs, audio, and physiological signals; feature engineering across 50+ channels; real-time ingestion and inference pipelines on mobile and cloud.',
    },
    {
      area: 'Agentic LLM Systems',
      detail: 'Multi-agent pipelines with LangGraph, provenance tracking, role-based data scoping, PII redaction, NL-to-SQL, and locality-sensitive hashing for context injection.',
    },
    {
      area: 'Time-Series & Behavioral Modeling',
      detail: 'Bi-GRU with attention, LSTMs, GANs, Siamese networks, digital biomarker discovery, and precursor detection for clinical and industrial applications.',
    },
    {
      area: 'End-to-End ML Systems',
      detail: 'Full-stack deployment from hardware to cloud to app: custom PCBs, streaming firmware, Kafka ingestion, Airflow orchestration, Docker packaging, and iOS fleet delivery with continuous monitoring.',
    },
  ];

  const stack = [
    { label: 'Languages', items: 'Python, TypeScript, SQL, Kotlin, C#, Bash' },
    { label: 'ML / AI', items: 'PyTorch, TensorFlow, Keras, Hugging Face Transformers, Scikit-learn, OpenCV, Optuna' },
    { label: 'MLOps & Cloud', items: 'AWS (EC2, S3, SageMaker), Docker, Airflow, Kafka, GitHub Actions, Great Expectations, GCP' },
    { label: 'Data & Databases', items: 'MongoDB, Supabase, SQLite, Firebase, Pandas, NumPy' },
    { label: 'Dev & Mobile', items: 'React, React Native, Flask, WebSockets, Core ML, iOS / Android, Pytest' },
  ];

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {specializations.map((spec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-secondary-50 rounded-xl p-6"
          >
            <h3 className="text-base font-semibold text-primary-700 mb-2">{spec.area}</h3>
            <p className="text-sm text-secondary-600 leading-relaxed">{spec.detail}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-secondary-50 rounded-xl p-6 md:p-8"
      >
        <h3 className="text-lg font-semibold text-secondary-900 mb-6">Stack</h3>
        <div className="space-y-3">
          {stack.map((row, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="text-sm font-semibold text-secondary-500 w-36 shrink-0">{row.label}</span>
              <span className="text-sm text-secondary-700">{row.items}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
