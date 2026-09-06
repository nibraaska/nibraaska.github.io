import React from 'react';

const links = [
  { label: 'CV', href: 'nk_cv.pdf' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=2wlosyoAAAAJ' },
  { label: 'GitHub', href: 'https://github.com/nibraaska' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nibraas' },
  { label: 'Email', href: 'mailto:nnibraas@gmail.com' },
];

const Hero = () => {
  return (
    <section id="home" className="pt-8 pb-2 md:pt-10 md:pb-4">
      <div className="container-custom">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl mb-1">Nibraas Khan</h1>
            <p className="text-secondary-600 mb-6">
              Machine Learning Engineer 2, Cambridge Mobile Telematics
            </p>
            <p className="max-w-3xl text-secondary-700 mb-4">
              Research scientist and applied AI engineer, shipping interpretable machine
              learning from prototype to production across healthcare, industrial sensing, and
              multi-agent systems. My methods span explainable AI, few-shot learning,
              multimodal sensor fusion, LLMs, VLMs, and agentic pipelines.
            </p>
            <p className="max-w-3xl text-secondary-600 mb-5">
              Outside of work I cook, box, and hunt down new restaurants. English, plus
              conversational Hindi and Urdu.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="headshot.png"
            alt="Nibraas Khan"
            className="h-32 w-32 shrink-0 rounded-full object-cover ring-1 ring-secondary-200 sm:h-40 sm:w-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
