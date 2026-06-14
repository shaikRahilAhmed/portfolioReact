import './App.css'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumePage from './components/ResumePage'

function App() {
  const [isResumePage, setIsResumePage] = useState(false);

  useEffect(() => {
    // Check if URL contains /resume or ?resume
    const path = window.location.pathname;
    const search = window.location.search;
    setIsResumePage(path.includes('/resume') || search.includes('resume'));
  }, []);

  if (isResumePage) {
    return <ResumePage />;
  }

  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
