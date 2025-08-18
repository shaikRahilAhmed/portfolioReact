import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
    </div>
  )
}

export default App
