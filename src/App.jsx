/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import Header from './components/Header'; 
import EducationSection from './components/EducationSection';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to remove the loading screen and show content
    const timer = setTimeout(() => {
      setLoading(false);
      setContentVisible(true); // Show main content
    }, 5000); // 5000ms = 5 seconds

    // Clean up the timer in case the component unmounts before 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
        <>
      <div className="loading-screen">
        <h2 className="letter-animation">
          {
            'LOADING'.split('').map((letter, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{letter}</span>
            ))
          }
        </h2>
      </div>
      <div className={`main-content`} style={{opacity: '0'}}></div>
    </>
    );
  }

  return (
    <div className={`main-content`} style={{opacity: '1'}}>
      <Header />
      <Element name='about'> <AboutSection /></Element>
      <Element name='workex'> <EducationSection /></Element>
      <Element name='project'> <ProjectSection /></Element>
      <Element name='skill'> <SkillsSection /></Element>
      <Footer />
    </div>
  );
}

export default App;
