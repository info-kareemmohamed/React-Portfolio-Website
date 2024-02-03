import About from "./components/about/about.jsx";
import Intro from "./components/intro/intro.jsx";
import React from 'react';
import ProjectsList from "./components/projectsList/ProjectsList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context";
import { useContext } from "react";

const App=()=>{
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
return <div
style={{
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }}
>
    <Toggle />
    <Intro/>
    <About/>
    <ProjectsList/>
    <Contact/>
</div>
}

export default App;