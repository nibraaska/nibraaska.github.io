import React, { useState } from 'react';
import Section from './Section';

const publicationTypes = {
  C: 'Conference',
  J: 'Journal',
  A: 'Abstract',
  X: 'Preprint',
};

const publications = [
  {
    title: 'Reinforced Neural Processes: Memory-Efficient Time-Series Forecasting with a World-Feedback-Trained Memory Policy',
    authors: 'Khan, N., Wichern, G., Laughman, C.',
    year: '2026',
    venue: 'ICML 2026 RLxF Workshop',
    type: 'C',
    link: 'https://openreview.net/pdf?id=nfbleBiK2Q',
  },
  {
    title: 'Toward Assessing Functional Decline in Mild Cognitive Impairment Using Wearable Sensors and Explainable Machine Learning',
    authors: 'Khan, N., Davidson, L., Sarkar, N., Cole, K.R.',
    year: '2026',
    venue: 'Digital Health',
    type: 'J',
    link: 'https://doi.org/10.1177/20552076261444097',
  },
  {
    title: 'Supporting Social Interaction and Engagement in Long-Term Care Through Paired Social Robot–Virtual Reality Interactions for Older Adults with Cognitive Impairment and Apathy',
    authors: 'Migovich, M., Ghosh, R., Khan, N., Maxwell, C., Newhouse, P., Scharre, D., Tan, A., Tate, J., Mion, L., Sarkar, N.',
    year: '2026',
    venue: 'Frontiers in Dementia',
    type: 'J',
  },
  {
    title: 'A multi-site randomized clinical trial of socially assistive robots on engaging older adults with cognitive impairment residing in long-term care settings: A protocol paper',
    authors: 'Tate, J., Mion, L., Migovich, M., Ghosh, R., Khan, N., Kilpatrick, A., Scharre, D., Newhouse, P., Maxwell, C., Tan, A., Sarkar, N.',
    year: '2025',
    venue: 'Contemporary Clinical Trials',
    type: 'J',
    link: 'https://doi.org/10.1016/j.cct.2025.107980',
  },
  {
    title: 'A Universal Web-Based Tool for Multimodal Data Synchronization and Labeling',
    authors: 'Khan, N., Haan R., Shragge, I., Zilinskaite, G., Plunk, A., Staubitz, J., Rajaraman, A., Weitlauf, A., Sarkar, N.',
    year: '2025',
    venue: 'HCI International',
    type: 'C',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-93965-5_18',
  },
  {
    title: 'Engaging Older Adults and Staff in the Co-Design and Evaluation of Socially Assistive Robot and Virtual Reality Activities for Long-Term Care: User-Centered Study',
    authors: 'Ghosh, R., Khan, N., Migovich, M., Tate, J.A., Maxwell, C.A., Newhouse, P.A., Scharre, D.W., Tan, A., Mion, L.C., Sarkar, N.',
    year: '2025',
    venue: 'JMIR Aging',
    type: 'J',
    link: 'https://doi.org/10.2196/75288',
  },
  {
    title: 'Enhancing Athletic Performance Through AI: An Iterative Prompt Engineering Approach for LLM-Based Coaching Feedback',
    authors: 'Bullard, E., Khan, N., Sarkar, N.',
    year: '2025',
    venue: 'HCI International',
    type: 'C',
    link: 'https://doi.org/10.1007/978-3-031-94171-9_22',
  },
  {
    title: 'Factors Affecting Implementation of Socially Assistive Robots in Long-Term Care Facilities',
    authors: 'Tate J., Maxwell, C., Migovich, M., Khan, N., Ghosh, R., Colopietro, K., Kilpatrick, A., Sarkar, N.',
    year: '2024',
    venue: 'Innovation in Aging',
    type: 'J',
    link: 'https://doi.org/10.1093/geroni/igae098.2559',
  },
  {
    title: 'Pilot Study of a Real-time Early Agitation Capture Technology (REACT) for Children with Intellectual and Developmental Disabilities',
    authors: 'Khan, N., Plunk, A., Zhaobo, Z., Adiani, D., Staubitz, J., Weitlauf, A., Sarkar, N.',
    year: '2024',
    venue: 'Digital Health',
    type: 'J',
    link: 'https://doi.org/10.1177/20552076241287884',
  },
  {
    title: 'User-Centered Design of Socially Assistive Robotic Combined with Non-Immersive Virtual Reality-based Dyadic Activities for Older Adults Residing in Long Term Care Facilities',
    authors: 'Ghosh, R., Khan, N., Migovich, M., Tate, J., Maxwell, C., Latshaw, E., Newhouse, P., Scharre, D., Tan, A., Colopietro, K., Mion, L., Sarkar, N.',
    year: '2024',
    venue: 'arXiv',
    type: 'X',
    link: 'https://arxiv.org/pdf/2410.21197',
  },
  {
    title: 'MicroXercise: A Micro-Level Comparative and Explainable System for Remote Physical Therapy',
    authors: 'Wang, H., Khan, N., Chen, A., Sarkar, N., Wisniewski, P., Ma, M.',
    year: '2024',
    venue: 'IEEE/ACM CHASE',
    type: 'C',
    link: 'https://doi.org/10.1109/CHASE60773.2024.00017',
  },
  {
    title: 'A Novel Loss Function Utilizing Wasserstein Distance to Reduce Subject-Dependent Noise for Generalizable Models in Affective Computing HCI',
    authors: 'Khan, N., Tauseef, M., Ghosh, R., Sarkar, N.',
    year: '2024',
    venue: 'HCI International',
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
    title: 'Development of an App for Tracking Family Engagement With Early Intervention Services: Focus Groups and Pilot Evaluation Study',
    authors: 'Wagner, L., Corona, L., Khan, N., Hooper, M., Dixon, A., Munoz Lavanderos, A., Zheng, Z., Sarkar, N., Sarkar, N., Warren, Z.',
    year: '2023',
    venue: 'JMIR Human Factors',
    type: 'J',
    link: 'https://doi.org/10.2196/45957',
  },
  {
    title: 'Multimodal Job Interview Simulator for Training of Autistic Individuals',
    authors: 'Adiani, D., Breen, M., Migovich, M., Wade, J., Hunt, S., Tauseef, M., Khan, N., Colopietro, K., Lanthier, M., Swanson, A., Vogus, T., Sarkar, N.',
    year: '2023',
    venue: 'Assistive Technology',
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
    title: 'Development of a Patient-Facing Mobile Health App to Track Family Access and Engagement with Early Intervention Services in Underserved Communities',
    authors: 'Wagner, L., Corona, L., Hooper, M., Khan, N., Dixon, A., Lavanderos, A., Sarkar, N., Zheng, Z., Sarkar, N., Warren, Z.',
    year: '2023',
    venue: 'INSAR',
    type: 'A',
  },
  {
    title: 'Real-Time Analysis of Precursors to Challenging Behaviors for Intervention and Detection (RAPID) in Children with Autism Spectrum Disorder',
    authors: 'Khan, N., Plunk, A., Zheng, Z., Adiani, D., Staubitz, J., Weitlauf, A., Sarkar, N.',
    year: '2023',
    venue: 'SSRN',
    type: 'X',
    link: 'https://doi.org/10.2139/ssrn.4431502',
  },
  {
    title: 'Semi-Supervised Generative Adversarial Network for Stress Detection Using Partially Labeled Physiological Data',
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
    venue: 'HCI International',
    type: 'C',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-05581-2_15',
  },
  {
    title: 'Iterative User Centered Design of Robot-Mediated Paired Activities for Older Adults with Mild Cognitive Impairment (MCI)',
    authors: 'Ghosh, R., Khan, N., Migovich, M., Wilson, D., Latshaw, E., Tate, J., Mion, L., Sarkar, N.',
    year: '2022',
    venue: 'HCI International',
    type: 'C',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-05654-3_2',
  },
  {
    title: 'System Architecture and User Interface Design for a Human-Machine Interaction System for Dementia Intervention',
    authors: 'Migovich, M., Ghosh, R., Khan, N., Tate, J., Mion, L., Sarkar, N.',
    year: '2021',
    venue: 'HCI International',
    type: 'C',
    link: 'https://doi.org/10.1007/978-3-030-78111-8_19',
  },
  {
    title: 'Combined Model for Sensory-Based and Feedback-Based Task Switching: Solving Hierarchical Reinforcement Learning Problems Statically and Dynamically with Transfer Learning',
    authors: 'Khan, N., Phillips, J. L.',
    year: '2020',
    venue: 'IEEE ICTAI',
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

// Renders the author string with "Khan, N." emphasized, as in a reference list.
const formatAuthors = (authors) =>
  authors
    .split(/(Khan, N\.)/g)
    .map((part, index) =>
      part === 'Khan, N.' ? (
        <span key={index} className="font-medium text-secondary-800">
          {part}
        </span>
      ) : (
        part
      )
    );

const typeLabel = (type) =>
  type
    .split('.')
    .map((t) => publicationTypes[t] || t)
    .join(' · ');

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = (
    activeFilter === 'all'
      ? publications
      : publications.filter((pub) => pub.type.includes(activeFilter))
  )
    .slice()
    .sort((a, b) => b.year - a.year);

  const years = [...new Set(filtered.map((pub) => pub.year))];

  const filters = [['all', 'All'], ...Object.entries(publicationTypes)];

  return (
    <Section id="publications" title="Publications">
      <ul className="mb-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {filters.map(([key, label]) => (
          <li key={key}>
            <button
              type="button"
              onClick={() => setActiveFilter(key)}
              className={
                activeFilter === key
                  ? 'text-primary-700 underline decoration-primary-500 underline-offset-4'
                  : 'text-secondary-500 hover:text-primary-700'
              }
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <div className="divide-y divide-secondary-200">
        {years.map((year) => (
          <div key={year} className="py-4 first:pt-0 last:pb-0">
            <p className="mb-3 text-sm font-medium text-secondary-500">{year}</p>
            <ol className="space-y-4">
              {filtered
                .filter((pub) => pub.year === year)
                .map((pub) => (
                  <li key={pub.title} className="max-w-3xl">
                    <p className="item-title leading-snug">
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-900 decoration-secondary-400 hover:text-primary-700 hover:decoration-primary-600"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </p>
                    <p className="mt-1 text-sm text-secondary-600">
                      {formatAuthors(pub.authors)}
                    </p>
                    <p className="mt-0.5 text-sm text-secondary-500">
                      {pub.venue !== typeLabel(pub.type) && (
                        <>
                          <em>{pub.venue}</em>
                          <span aria-hidden="true"> · </span>
                        </>
                      )}
                      {typeLabel(pub.type)}
                    </p>
                  </li>
                ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
