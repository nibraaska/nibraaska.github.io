import React from 'react';
import Section from './Section';

const venues = [
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
  'IEEE RO-MAN 2025',
  'ACM CHIL 2023',
  'HRI 2025',
  'CogSci 2025',
];

const Service = () => {
  return (
    <Section id="service" title="Service">
      <dl className="divide-y divide-secondary-200 border-t border-secondary-200">
        <div className="py-3 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-x-6">
          <dt className="mb-1 text-sm text-secondary-500 sm:mb-0">Reviewer</dt>
          <dd className="max-w-3xl text-sm text-secondary-700">{venues.join(', ')}</dd>
        </div>
      </dl>
    </Section>
  );
};

export default Service;
