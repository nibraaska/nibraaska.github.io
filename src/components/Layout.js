import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'service', label: 'Service' },
  { id: 'contact', label: 'Contact' },
];

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 64, behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-secondary-200 bg-white/95 backdrop-blur">
        <div className="container-custom flex h-14 items-center justify-between">
          <a
            href="#home"
            className="font-serif text-base font-semibold text-secondary-900 no-underline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Nibraas Khan
          </a>

          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`link-quiet ${
                      activeSection === item.id ? 'text-primary-700' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="text-secondary-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="border-t border-secondary-200 bg-white md:hidden">
            <ul className="container-custom flex flex-col gap-3 py-4 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`link-quiet ${
                      activeSection === item.id ? 'text-primary-700' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="border-t border-secondary-200 bg-secondary-50">
        <div className="container-custom py-6 text-sm text-secondary-600">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-serif text-base font-semibold text-secondary-900">
                Nibraas Khan
              </p>
              <p>Machine Learning Engineer 2, Cambridge Mobile Telematics</p>
              <p>Cambridge, MA, USA</p>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <a href="mailto:nnibraas@gmail.com">nnibraas@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/citations?user=2wlosyoAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nibraaska"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/nibraas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-5 border-t border-secondary-200 pt-4 text-xs text-secondary-500">
            &copy; {new Date().getFullYear()} Nibraas Khan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
