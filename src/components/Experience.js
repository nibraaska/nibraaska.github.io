import React from 'react';
import Section from './Section';

const experienceData = [
  {
    title: 'Machine Learning Engineer 2',
    company: 'Cambridge Mobile Telematics',
    location: 'Cambridge, MA',
    period: 'Sept 2026 – Present',
    responsibilities: [],
  },
  {
    title: 'Research Scientist Intern – Few-Shot Learning',
    company: 'Mitsubishi Electric Research Laboratories',
    location: 'Cambridge, MA',
    period: 'Jan 2026 – July 2026',
    responsibilities: [
      'Developed a PPO-based framework for adaptive memory and context management across Neural Processes and foundation models under bounded compute; 17% improvement over heuristic baselines.',
      'Built pretraining and post-training recipes for on-device vision-language-action models enabling at-home human-robot interaction, fusing vision, proprioception, affective signals, and WiFi-CSI scene maps.',
    ],
  },
  {
    title: 'Applied Scientist Intern – Multi-Agent Systems',
    company: 'Actual Insight',
    location: 'Nashville, TN',
    period: 'Oct 2025 – Jan 2026',
    responsibilities: [
      'Designed and deployed multi-agent LLM pipelines (LangGraph) for 15+ enterprise clients: agent orchestration, output-to-source provenance, role-based access control, and PII redaction.',
      'Built a LangChain natural-language-to-SQL workflow that let business users query their data in plain English, with a locality-sensitive-hashing cache that cut prompt-token usage by 18%.',
      'Built a system that matches job candidates to roles via an embedding and pgvector similarity pipeline, with LLM scoring agents and an A/B testing harness to measure and improve match quality.',
    ],
  },
  {
    title: 'Graduate Researcher',
    company: 'Vanderbilt University – Robotics and Autonomous Systems Lab',
    location: 'Nashville, TN',
    period: 'May 2020 – Present',
    responsibilities: [
      'Training a few-shot PyTorch model (REACT) in a low-data clinical environment; engineering a multimodal feature pipeline from wearable time-series and audio into 50+ features; tuning with Optuna to reach 84.6% F1',
      'Operating MLOps stack on AWS EC2 with Kafka ingestion, Great Expectations for data quality, and Airflow orchestration in Docker; deploying artifacts to an iOS fleet with real-time inference and Apple Watch alerts',
      'Building an end-to-end wearable biomechanical analysis system: custom PCB with IMUs/ESP32, streaming firmware, cloud ingestion, and a React app with a 3D avatar streaming 100 Hz from 10 IMUs with <1s feedback',
      'Pretrained a 30M-parameter transformer foundation model (PyTorch) with quaternion-based reconstruction on 15 IMU datasets (6 days on A100s) and fine-tuned for movement-quality assessment.',
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

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="divide-y divide-secondary-200">
        {experienceData.map((exp) => (
          <article key={`${exp.company}-${exp.title}`} className="py-4 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <h3 className="item-title">{exp.title}</h3>
              <p className="text-sm text-secondary-500">{exp.period}</p>
            </div>
            <p
              className={`text-sm text-secondary-600 ${
                exp.responsibilities.length ? 'mb-3' : ''
              }`}
            >
              {exp.company} · {exp.location}
            </p>
            {exp.responsibilities.length > 0 && (
              <ul className="max-w-3xl list-disc space-y-1.5 pl-4 text-sm marker:text-secondary-400">
                {exp.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
