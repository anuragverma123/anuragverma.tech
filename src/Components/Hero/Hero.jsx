import React from 'react';
import './Hero.css';
import pro_image from '../../assets/pro_image.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={pro_image} alt="Profile" />
      <h1><span>I'm Anurag Verma</span></h1>
      <p>
        I am currently pursuing B.Tech in Computer Science (AIML). 
        With a strong foundation in Java, MERN stack, and Machine Learning, 
        I enjoy solving real-world problems using technology.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            Connect with me
          </AnchorLink>
        </div>

        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1lGRN2qJJ9DsjzmV0Rm8cdR2otjyZlJs7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;










/*import React from 'react';
import './Hero.css';
import pro_image from '../../assets/pro_image.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

 
const Hero=()=>{
    return(
        <div id='home' className='hero'>
            <img src={pro_image} alt=""  />
            <h1><span>I'm Anurag verma</span> </h1>
        <p>I am currently pursuing B.Tech in Computer Science (AIML). 
With a strong foundation in Java, MERN stack, and Machine Learning, 
I enjoy solving real-world problems using technology.</p>

<div className="hero-action">
    <div className="hero-connect" 
    <AnchorLink className="anchor-link" href="#contact" offset={50}>
      Connect with me 
      </AnchorLink>
      </div>

    
    <div className="hero-resume">
  <a
    href="https://drive.google.com/file/d/1lGRN2qJJ9DsjzmV0Rm8cdR2otjyZlJs7/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
  >
    My resume
  </a>
</div>

</div>

        </div>
    )
}

export default Hero;*/