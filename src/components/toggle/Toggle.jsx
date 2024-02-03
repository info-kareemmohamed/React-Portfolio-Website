import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { useContext } from 'react'
import {ThemeContext} from '../../context'


const Toggle=()=>{
    const theme=useContext(ThemeContext);
    const handelClick=()=>{
        theme.dispatch({type: "Toggle"});
       
    }
   
return(
    <div className='t'
    style={{backgroundColor:theme.state.darkMode ? '#000' : '#ffffff'
                   
}}
    >
        
    
        <img src={Sun} className='t-icon'/>
        <img src={Moon} className='t-icon'/>
         <div className='t-button' onClick={handelClick}
        
        style={{ left: theme.state.darkMode ? 0 : 25, backgroundColor:theme.state.darkMode ? '#ffffff' : '#000'
                   
        }}
         ></div>

    </div>
);

}

export default Toggle;