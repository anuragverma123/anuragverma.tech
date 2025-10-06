import React, { useState, useEffect, useRef } from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import pro_image from '../../assets/pro_image.jpg';
import prime_pro from "../../assets/prime_pro.png";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [animatedSkills, setAnimatedSkills] = useState({});
    const aboutRef = useRef(null);

    const skills = [
        { name: "C++", level: 80 },
        { name: "Python", level: 40 },
        { name: "Java", level: 60 },
        { name: "JavaScript", level: 70 },
        { name: "React js", level: 40 },
        { name: "Node.js", level: 40 },
        { name: "SQL", level: 40 },
        { name: "MongoDB", level: 50 },
        { name: "HTML/CSS", level: 80 }
    ];

    const achievements = [
        {
            title: "Finalist",
            description: "Finalist in Young Indians Hackathon (Yi IDS 4.0)",
            icon: "🏆"
        },
        {
            title: "IEEE Research paper",
            description: "Contributor to IEEE research work, focusing on innovative applications in technology.",
            icon: "📄"
        },
        {
            title: "Web Development",
            description: "Developed multiple responsive websites using MERN stack, enhancing user experience and functionality.",
            icon: "💻"
        }
    ];

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Animate skills with delay
                    skills.forEach((skill, index) => {
                        setTimeout(() => {
                            setAnimatedSkills(prev => ({
                                ...prev,
                                [skill.name]: skill.level
                            }));
                        }, index * 150);
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div id="about" className={`about ${isVisible ? 'visible' : ''}`} ref={aboutRef}>
            {/* Animated Background */}
            <div className="about-bg-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-line line-1"></div>
                <div className="decoration-line line-2"></div>
            </div>

            {/* Title Section */}
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Theme Pattern" className="theme-pattern" />
            </div>

            {/* Main Content */}
            <div className="about-sections">
                {/* Left Image Section */}
                <div className="about-left">
                    <div className="image-container">
                        <img src={prime_pro} alt="Profile" className="profile-image" />
                        <div className="image-overlay"></div>
                        <div className="image-border"></div>
                        <div className="floating-badge badge-1">AI/ML</div>
                        <div className="floating-badge badge-2">Full Stack</div>
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="about-right">
                    {/* Paragraphs */}
                    <div className="about-para">
                        <p className="para-animated">
                            My goal is to become a skilled <span className="highlight-text">software engineer</span> and <span className="highlight-text">AI specialist</span>, contributing to impactful projects that combine innovation with practical use.
                        </p>
                        <p className="para-animated para-delay">
                            I enjoy exploring how data, algorithms, and intelligent systems can solve real-world problems. My skills include working with <span className="highlight-text">Python</span>, <span className="highlight-text">Java</span>, <span className="highlight-text">MERN stack</span>, and <span className="highlight-text">SQL</span>, and I am constantly learning new technologies to strengthen my foundation in AI/ML.
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="about-skills">
                        <h3 className="skills-heading">Technical Skills</h3>
                        {skills.map((skill, index) => (
                            <div 
                                key={skill.name}
                                className={`about-skill ${hoveredSkill === skill.name ? 'hovered' : ''}`}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="skill-header">
                                    <p className="skill-name">{skill.name}</p>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar-container">
                                    <div 
                                        className="skill-bar"
                                        style={{ 
                                            width: `${animatedSkills[skill.name] || 0}%`,
                                            transition: 'width 1s ease-out'
                                        }}
                                    >
                                        <div className="skill-bar-glow"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            <div className="about-achievements">
                <h2 className="achievements-title">Key Achievements</h2>
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div 
                            key={index}
                            className="achievement-card"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="achievement-icon">{achievement.icon}</div>
                            <h3 className="achievement-title">{achievement.title}</h3>
                            <p className="achievement-description">{achievement.description}</p>
                            <div className="card-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;