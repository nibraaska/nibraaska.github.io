import React from 'react';
import Section from './Section';

const specializations = [
  {
    area: 'Explainable AI',
    detail:
      'Motion primitive discovery, prototype alignment, tiered stakeholder explanations, saliency over raw signals, counterfactual exploration, and model-agnostic APIs for PyTorch and TensorFlow.',
  },
  {
    area: 'Few-Shot & Low-Data Learning',
    detail:
      'Neural processes, meta-learning, entropic optimal transport for cross-domain alignment, pseudo-sample generation, and clinical deployment under severe data scarcity and domain shift.',
  },
  {
    area: 'Multimodal Sensor Fusion',
    detail:
      'Wearable IMUs, audio, and physiological signals; feature engineering across 50+ channels; and real-time ingestion and inference pipelines running on both mobile devices and cloud.',
  },
  {
    area: 'Foundation Models & LLMs',
    detail:
      'Pretraining and post-training of transformer foundation models, fine-tuning, RAG, embedding and vector-search pipelines, and vision-language-action models on device.',
  },
  {
    area: 'Agentic LLM Systems',
    detail:
      'Multi-agent pipelines with LangGraph, output-to-source provenance, role-based data scoping, PII redaction, NL-to-SQL, and locality-sensitive hashing for cached context injection.',
  },
  {
    area: 'Time-Series & Behavioral Modeling',
    detail:
      'Bi-GRU with attention, LSTMs, GANs, and Siamese networks; digital biomarker discovery and precursor detection for behavioral prediction in clinical and industrial applications.',
  },
  {
    area: 'End-to-End ML Systems',
    detail:
      'Full-stack deployment from hardware to cloud to app: custom PCBs, streaming firmware, Kafka ingestion, Airflow orchestration, Docker packaging, and iOS fleet delivery with continuous monitoring.',
  },
];

const stack = [
  {
    label: 'Foundation Models & LLMs',
    items: 'Pretraining, Fine-Tuning, RAG, Embeddings, Agentic/Multi-Agent (LangGraph), VLMs/VLA',
  },
  {
    label: 'ML Methods',
    items: 'Reinforcement Learning (PPO), Explainable AI, Few-Shot & Meta-Learning, Time-Series, Deep Learning (Transformers, RNNs, CNNs), Computer Vision',
  },
  {
    label: 'Systems & Hardware',
    items: 'Embedded firmware (ESP32), IMU & multimodal sensor integration, real-time on-device inference, full-stack (React, TypeScript)',
  },
  {
    label: 'Frameworks & MLOps',
    items: 'PyTorch, TensorFlow/Keras, Hugging Face Transformers, Scikit-learn, AWS (EC2, S3, SageMaker), Docker, Kafka, Airflow, Git',
  },
  {
    label: 'Languages',
    items: 'Python, C#, Kotlin, TypeScript, SQL, Bash',
  },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <h3 className="subsection-title">Research areas</h3>
      <dl className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {specializations.map((spec) => (
          <div key={spec.area}>
            <dt className="item-title">{spec.area}</dt>
            <dd className="mt-0.5 text-sm text-secondary-600">{spec.detail}</dd>
          </div>
        ))}
      </dl>

      <h3 className="subsection-title mt-7">Technical skills</h3>
      <dl className="divide-y divide-secondary-200 border-t border-secondary-200">
        {stack.map((row) => (
          <div key={row.label} className="py-3 sm:grid sm:grid-cols-[11.5rem_1fr] sm:gap-x-6">
            <dt className="text-sm text-secondary-500">{row.label}</dt>
            <dd className="text-sm text-secondary-700">{row.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Skills;
