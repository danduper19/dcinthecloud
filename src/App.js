import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="resume-container">
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;