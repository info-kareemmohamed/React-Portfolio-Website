import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_52y8o98",
        "template_b8xd9qq",
        formRef.current,
        "dt5w-C9BUYxo2eA4N"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputStyle = {
    backgroundColor: darkMode && "#333" , color:darkMode && "#ffffff"
    };


  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
             01118646602
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              info.kareemmohamed@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              The country is Egypt, Cairo Governorate
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b>Let's create something extraordinary together! I'm here and ready to collaborate on your next project. 
            Reach out, and let's turn your ideas into reality.

          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
          <input style={inputStyle} type="text" placeholder="Name" name="user_name"  required/>
            <input style={inputStyle} type="text" placeholder="Subject" name="user_subject"  required />
            <input style={inputStyle} type="text" placeholder="Email" name="user_email"  required/>
            <textarea style={inputStyle} rows="5" placeholder="Message" name="message"  required/>
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;