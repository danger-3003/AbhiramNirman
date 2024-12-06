import React from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Ongoing from "./Pages/Ongoing"
import Projects from "./Pages/Projects"
import OtherProjects from "./Pages/Other"
import Contact from "./Pages/Contact"

function App() {
  return (
    <>
        <Home />
        <Ongoing />
        <Projects />
        <OtherProjects />
        <About />
        <Contact />
    </>
  )
}

export default App