import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Service from './components/Service';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Skills />
      <Service />
      <Contact />
    </Layout>
  );
}

export default App;
