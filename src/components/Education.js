import React from 'react';
import Section from './Section';

const educationItems = [
  {
    degree: 'Ph.D. in Computer Science',
    institution: 'Vanderbilt University',
    location: 'Nashville, TN',
    period: 'Aug 2020 – July 2026',
    description:
      'Dissertation: "Advancing Ecologically Valid Human Motion Analysis Through Wearable Sensing and Machine Learning"',
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

const Education = () => {
  return (
    <Section id="education" title="Education">
      <dl className="divide-y divide-secondary-200">
        {educationItems.map((item) => (
          <div key={item.degree} className="py-4 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <dt className="item-title">{item.degree}</dt>
              <dd className="text-sm text-secondary-500">{item.period}</dd>
            </div>
            <dd className="text-sm text-secondary-600">
              {item.institution}, {item.location}
            </dd>
            {item.description && (
              <dd className="mt-1 max-w-3xl text-sm">{item.description}</dd>
            )}
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Education;
