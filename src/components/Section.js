import React from 'react';

const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-custom">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && (
          <p className="-mt-4 mb-8 text-secondary-600 max-w-prose">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
