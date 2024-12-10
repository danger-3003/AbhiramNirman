import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import UpComing from "./Pages/UpComing";
import Projects from "./Pages/Projects";
import OtherProjects from "./Pages/Other";
import Contact from "./Pages/Contact";

function App() {
    return (
        <>
            <Home />
            <Projects />
            <UpComing />
            <OtherProjects />
            <About />
            <Contact />
        </>
    );
}

export default App;
