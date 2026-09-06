import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Education />
      <Experience />
      <Publications />
      <Skills />
      <Service />
      <Contact />
    </Layout>
  );
}

export default App;
