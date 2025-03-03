import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const publicationTypes = {
    C: 'Conference',
    J: 'Journal',
    A: 'Abstract',
    X: 'Preprint',
    S: 'Symposium',
    I: 'In Progress',
  };

  const publications = [
    {
      title: 'Autistic User Input on Wearable Technology: Preliminary Feedback to Inform System Design',
      authors: 'Weitlauf, A., Khan, N., Plunk, A., Sargent, A., Staubitz, J., Dieffenderfer, J., Sarkar, N.',
      year: '2024',
      venue: 'Conference',
      type: 'I',
    },
    {
      title: 'Pilot Study of a Real-time Early Agitation Capture Technology (REACT) for Children with Intellectual and Developmental Disabilities',
      authors: 'Khan, N., Plunk, A., Zhaobo, Z., Adiani, D., Staubitz, J., Weitlauf, A., Sarkar, N.',
      year: '2024',
      venue: 'Journal',
      type: 'J.I',
      link: 'https://doi.org/10.1177/20552076241287884',
    },
    {
      title: 'User-Centered Design of Socially Assistive Robotic Combined with Non-Immersive Virtual Reality-based Dyadic Activities for Older Adults Residing in Long Term Care Facilities',
      authors: 'Ghosh, R., Khan, N., Migovich, M., Tate, J., Maxwell, C., Latshaw, E., Newhouse, P., Scharre, D., Tan, A., Colopietro, K., Mion, L., Sarkar, N.',
      year: '2024',
      venue: 'Journal',
      type: 'J.S',
      link: 'https://arxiv.org/pdf/2410.21197',
    },
    {
      title: 'MicroXercise: A Micro-Level Comparative and Explainable System for Remote Physical Therapy',
      authors: 'Wang, H., Khan, N., Chen, A., Sarkar, N., Wisniewski, P., Ma, M.',
      year: '2024',
      venue: 'Conference',
      type: 'C',
      link: 'https://doi.org/10.1109/CHASE60773.2024.00017',
    },
    {
      title: 'A Novel Loss Function Utilizing Wasserstein Distance to Reduce Subject-Dependent Noise for Generalizable Models in Affective Computing HCI',
      authors: 'Khan, N., Tauseef, M., Ghosh, R., Sarkar, N.',
      year: '2024',
      venue: 'Conference',
      type: 'C',
      link: 'https://arxiv.org/pdf/2308.10869',
    },
    {
      title: 'User-Centered Design for Socially Assistive Robotic Activities with Older Adults in Long Term Care',
      authors: 'Maxwell, C., Ghosh, R., Khan, N., Migovich, M., Tate, J., Latshaw, E., Lorraine, M., Sarkar, N.',
      year: '2023',
      venue: 'Innovation in Aging',
      type: 'A',
      link: 'https://doi.org/10.1093/geroni/igad104.3687',
    },
    {
      title: 'Development of a Patient-Facing Mobile Health App to Track Family Access and Engagement with Early Intervention Services in Underserved Communities',
      authors: 'Wagner, L., Corona, L., Hooper, M., Khan, N., Dixon, A., Lavanderos, A., Sarkar, N., Zheng, Z., Sarkar, N., Warren, Z.',
      year: '2023',
      venue: 'INSAR',
      type: 'J',
      link: 'https://doi.org/10.2196/45957',
    },
    {
      title: 'Multimodal Job Interview Simulator for Training of Autistic Individuals',
      authors: 'Adiani, D., Breen, M., Migovich, M., Wade, J., Hunt, S., Tauseef, M., Khan, N., Colopietro, K., Lanthier, M., Swanson, A., Vogus, T., Sarkar, N.',
      year: '2023',
      venue: 'RESNA',
      type: 'J',
      link: 'https://doi.org/10.1080/10400435.2023.2188907',
    },
    {
      title: 'Participatory Design: An Essential Process For Socially Assistive Robotic Activities In Long-term Care Settings',
      authors: 'Lorraine, M., Latshaw, E., Lin, Y., Migovich, M., Ghosh, R., Khan, N., Sarkar, N., Tate, J.',
      year: '2023',
      venue: 'Innovation in Aging',
      type: 'A',
      link: 'https://doi.org/10.1093/geroni/igac059.1661',
    },
    {
      title: 'Semi-Supervised Learning for Stress Detection Using Physiological Data for Partially Labeled Data',
      authors: 'Khan, N., Sarkar, N.',
      year: '2022',
      venue: 'arXiv',
      type: 'X',
      link: 'https://arxiv.org/pdf/2206.14976',
    },
    {
      title: 'Data Collection and Annotation Tool for Asynchronous Multimodal Data',
      authors: 'Khan, N., Ghosh, R., Migovich, M., Johnson, A., Witherow, A., Taylor, C., Schroder, M., Vongpanya, T., Sarkar, M., Sarkar, N.',
      year: '2022',
      venue: 'Conference',
      type: 'C',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-05581-2_15',
    },
    {
      title: 'Iterative User Centered Design of Robot-Mediated Paired Activities for Older Adults with Mild Cognitive Impairment (MCI)',
      authors: 'Ghosh, R., Khan, N., Migovich, M., Wilson, D., Latshaw, E., Tate, J., Mion, L., Sarkar, N.',
      year: '2022',
      venue: 'Human Aspects of IT for the Aged Population',
      type: 'C',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-05654-3_2',
    },
    {
      title: 'System Architecture and User Interface Design for a Human-Machine Interaction System for Dementia Intervention',
      authors: 'Migovich, M., Ghosh, R., Khan, N., Tate, J., Mion, L., Sarkar, N.',
      year: '2021',
      venue: 'Conference',
      type: 'C',
      link: 'https://doi.org/10.1007/978-3-030-78111-8_19',
    },
    {
      title: 'Combined Model for Sensory-Based and Feedback-Based Task Switching: Solving Hierarchical Reinforcement Learning Problems Statically and Dynamically with Transfer Learning',
      authors: 'Khan, N., Phillips, J. L.',
      year: '2020',
      venue: 'Conference',
      type: 'C',
      link: 'https://doi.org/10.1109/ICTAI50040.2020.00055',
    },
    {
      title: 'Steganography GAN: Cracking Steganography With Cycle Generative Adversarial Networks',
      authors: 'Khan, N., Haan, R., Boktor, G., McComas, M., Daneshi, R.',
      year: '2020',
      venue: 'arXiv',
      type: 'X',
      link: 'https://arxiv.org/pdf/2006.04008',
    },
    {
      title: 'Combined Model for Partially-Observable and Non-Observable Task Switching: Solving Hierarchical Reinforcement Learning Problems Statically and Dynamically with Transfer Learning',
      authors: 'Khan, N., Phillips, J.',
      year: '2020',
      venue: 'arXiv',
      type: 'X',
      link: 'https://arxiv.org/pdf/1911.10425',
    },
  ];

  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type.includes(activeFilter));

  return (
    <Section
      id="publications"
      title="Publications"
      subtitle="My academic contributions to the field"
      className="bg-secondary-50"
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === 'all'
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-white text-secondary-700 hover:bg-secondary-100'
          }`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        {Object.entries(publicationTypes).map(([key, value]) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === key
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-secondary-700 hover:bg-secondary-100'
            }`}
            onClick={() => setActiveFilter(key)}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredPublications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-md p-6 block hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-secondary-900 flex-1 pr-4">
                  {pub.title}
                  <i className="fas fa-external-link-alt ml-2"></i>
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-secondary-500">{pub.year}</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                    {pub.type.split('.').map(t => publicationTypes[t] || t).join(' • ')}
                  </span>
                </div>
              </div>
              <p className="text-secondary-700 text-sm mb-2">{pub.authors}</p>
              <p className="text-primary-600 text-sm font-medium">
                {pub.venue}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Publications; 