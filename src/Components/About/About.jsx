import React from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import pro_image from '../../assets/pro_image.jpg';
const About=()=>{
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1 >About Me</h1>
                <img src={theme_pattern}  alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={pro_image} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>My goal is to become a skilled software engineer and AI specialist, contributing to impactful projects that combine innovation with practical use.</p>
                        <p>I enjoy exploring how data, algorithms, and intelligent systems can solve real-world problems. My skills include working with Python, Java, MERN stack, and SQL, and I am constantly learning new technologies to strengthen my foundation in AI/ML.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>C++</p> <hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Python</p> <hr style={{width:"40%"}}/></div>
                        <div className="about-skill"><p>Java</p> <hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React js</p> <hr style={{width:"40%"}}/></div>
                        <div className="about-skill"><p>Node.js</p> <hr style={{width:"40%"}}/></div>
                        <div className="about-skill"><p>SQL</p> <hr style={{width:"40%"}}/></div>
                        <div className="about-skill"><p>MongoDB</p> <hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>HTML/CSS</p> <hr style={{width:"80%"}}/>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievments">
                <div className="about-achievment">
                    <h1>Finalist</h1>
                    <p>Finalist in Young Indians Hackathon (Yi IDS 4.0)</p>
                </div>
                <hr/>
                <div className="about-achievment">
                    <h1>IEEE Research paper</h1>
                    <p>Contributor to IEEE research work, focusing on innovative<br></br> applications in technology.</p>
                </div>
                <hr/>
                <div className="about-achievment">
                    <h1>Web Development</h1>
                    <p>Developed multiple responsive websites using <br></br> MERN stack, enhancing 
                        user experience and functionality.</p>
                </div>
                
                

            </div>
        </div>
    )


    }
        export default About;   



