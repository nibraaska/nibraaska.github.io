import React from 'react';
import Section from './Section';

const journals = [
  'BMC Psychiatry',
  'Frontiers in Psychiatry',
  'Scientific Reports',
  'Research in Autism Spectrum Disorders',
  'Discover Applied Sciences',
  'IEEE Transactions on Intelligent Transportation Systems',
  'IEEE Transactions on Neural Systems & Rehabilitation Engineering',
  'The Egyptian Journal of Otolaryngology',
  'Pervasive and Mobile Computing',
  'Behaviour & Information Technology',
  'Young Scientist',
];

const conferences = ['IEEE RO-MAN 2025', 'ACM CHIL 2023', 'HRI 2025', 'CogSci 2025'];

const rows = [
  { label: 'Journal reviewer', venues: journals },
  { label: 'Conference reviewer', venues: conferences },
];

const Service = () => {
  return (
    <Section id="service" title="Service">
      {/* No border-t here: the section title already draws a rule directly above. */}
      <dl className="divide-y divide-secondary-200">
        {rows.map((row) => (
          <div
            key={row.label}
            className="py-3 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-x-6"
          >
            <dt className="mb-1 text-sm text-secondary-500 sm:mb-0">{row.label}</dt>
            <dd className="max-w-3xl text-sm text-secondary-700">{row.venues.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Service;
