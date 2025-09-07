import React from 'react';
import './Contact.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import git_icon from "../../assets/git_icon.png";
import link_icon from "../../assets/link_icon.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently open to new opportunities and collaborations. Whether
            you have a project in mind, a question, or just want to say hello,
            feel free to reach out. I look forward to connecting with you!
          </p>

          <div className="contact-details">

            <div className="contact-detail1">
              <img src={mail_icon} alt="mail" />
              <p>anuragverma25840@gmail.com</p>
            </div>

            <div className="contact-detail1">
              <img src={call_icon} alt="phone" />
              <p>+91 7806008073</p>
            </div>

            <div className="contact-detail1">
              <img src={location_icon} alt="location" />
              <p>Madhya Pradesh, Bhopal, India</p>
            </div>

            {/* GitHub */}
            <div className="contact-detail1">
              <img src={git_icon} alt="github"width="50" height="50" text-decoration="none"/>
              
              <a
                href="https://github.com/6265annu"
                target="_blank"
                rel="noopener noreferrer"
              ><p>github</p>
                
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-detail1">
              <img src={link_icon} alt="linkedin"width="50" height="50" text-underline="none"/>
              <a
                href="https://www.linkedin.com/in/anurag-verma-661052296"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                linkedin</p>
              </a>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-right">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />

          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />

          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>

          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
























/*port React from 'react';
import './Contact.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import git_icon from "../../assets/git_icon.png";
import link_icon from "../../assets/link_icon.png";
                    


const Contact=()=>{
    return(
        <div className="contact-container">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                     <p>I am currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out. I look forward to connecting with you!</p>
               <div className="contact-details">


                <div className="contact-detail1">
                    <img src={mail_icon} alt=""/> <p>anuragverma25840@gmail.com</p>
                </div>


                 <div className="contact-detail1">
                    <img src={call_icon} alt=""/> <p>+91 7806008073</p>
                 </div>


                 
                   <div className="contact-detail1">
                    <img src={location_icon} alt=""/> <p>Madhya pradesh, Bhopal,India </p>
                  </div>


                   <div className="contact-detail1">
                    <img src={git_icon} alt=""/> <p>github.com/anuragverma25840</p>
                  </div>

                   
                     <div className="contact-detail1">
                    <img src={link_icon} alt=""/> <p>linkedin.com/in/anurag-verma-25840</p>
                  </div>

                  </div>
               </div>
                </div>
                <form  className="contact-right">
                    <label  htmlFor="name">Your name   </label>
                    <input type="text" id="name" name="name" placeholder= "Enter your name "   />
                    <label  htmlFor="email">Your email   </label>
                    <input type="email" id="email" name="email" placeholder= "Enter your email "   />
                    <label  htmlFor="message">Write your message here   </label>
                    <textarea  name="message"rows ="8"   placeholder="Enter youe message"   ></textarea>
                    <button className='contact-submit' type="submit">Submit now </button>
                </form>

            </div>

            </div>
    )

}

export default Contact; */