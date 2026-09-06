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

const Service = () => {
  return (
    <Section id="service" title="Service">
      <dl className="divide-y divide-secondary-200 border-t border-secondary-200">
        <div className="py-3 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-x-6">
          <dt className="mb-1 text-sm text-secondary-500 sm:mb-0">Journal reviewer</dt>
          <dd>
            <ul className="max-w-3xl space-y-1 text-sm">
              {journals.map((journal) => (
                <li key={journal}>{journal}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-x-6">
          <dt className="mb-1 text-sm text-secondary-500 sm:mb-0">Conference reviewer</dt>
          <dd>
            <ul className="max-w-3xl space-y-1 text-sm">
              {conferences.map((conf) => (
                <li key={conf}>{conf}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </Section>
  );
};

export default Service;
