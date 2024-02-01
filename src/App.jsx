import About from "./components/about/about.jsx";
import Intro from "./components/intro/intro.jsx";
import React from 'react';
import ProjectsList from "./components/projectsList/ProjectsList.jsx";
import Contact from "./components/contact/Contact.jsx";

const App=()=>{
return <div>
    <Intro/>
    <About/>
    <ProjectsList/>
    <Contact/>
</div>
}

export default App;