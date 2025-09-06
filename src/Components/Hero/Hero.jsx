import React from 'react';
import './Hero.css';
import pro_image from '../../assets/pro_image.jpg';

 
const Hero=()=>{
    return(
        <div className='hero'>
            <img src={pro_image} alt=""  />
            <h1><span>I'm Anurag verma</span> </h1>
        <p>I am currently pursuing B.Tech in Computer Science (AIML). 
With a strong foundation in Java, MERN stack, and Machine Learning, 
I enjoy solving real-world problems using technology.</p>

<div className="hero-action">
    <div className="hero-connect">Connect with me</div>
    <div className="hero-resume">My resume</div>
</div>

        </div>
    )
}

export default Hero;