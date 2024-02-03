import './project.css'
import {ThemeContext} from '../../context'
import { useContext } from 'react'



const Project = ({img,link}) => {

  const theme=useContext(ThemeContext);
  const browserStyle = {
    backgroundColor: theme.state.darkMode ? '#ffffff' : '#000'
  };

  const circleStyle = {
    backgroundColor: theme.state.darkMode ? '#000' : '#ffffff'
  };
  return (
     <div className="p">
       <div className="p-browser"  
         style={browserStyle}
       >
         <div className="p-circle"
          style={circleStyle}
         ></div>
         <div className="p-circle"
          style={circleStyle}
         ></div>
          <div className="p-circle"
          style={circleStyle}
         ></div>
       </div>
       <a href={link} target="_blank" rel="noreferrer">
         <img src={img} alt="" className="p-img" />
       </a>
     </div>
   );
 };

export default Project;