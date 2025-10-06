import React from 'react';
import './Hero.css';
import pro_image from '../../assets/pro_image.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import prime_pro from "../../assets/prime_pro.png";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={prime_pro} alt="Profile" className='hero-image' />
      <h1 className='hero-title'>
        <span className='hero-name'>I'm Anurag Verma</span>
      </h1>
      <p className='hero-description'>
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