/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import Header from './components/Header'; 
import EducationSection from './components/EducationSection';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to remove the loading screen and show content
    const timer = setTimeout(() => {
      setLoading(false);
      setContentVisible(true); // Trigger content visibility
    }, 5000); // 5000ms = 5 seconds

    // Clean up the timer in case the component unmounts before 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <TypeAnimation
          className='loading-screen'
          sequence={[
            'hello', 150,
            'नमस्ते', 150,
            'வணக்கம்', 150,
            'હેલો', 150,
            'bonjour', 150
          ]}
          wrapper="h1"
          speed={{type: 'keyStrokeDelayInMs', value: 121}}
          cursor={false}
          omitDeletionAnimation='false'
        />
      ) : (
        <div className='main-content'>
          <Header />
          <Element name='about'><AboutSection /></Element>
          <Element name='workex'><EducationSection /></Element>
          <Element name='project'><ProjectSection /></Element>
          <Element name='skill'><SkillsSection /></Element>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

