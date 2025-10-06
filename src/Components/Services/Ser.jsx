

























import React from "react";
import './Ser.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_Data from "../../assets/services_data.js";
import arrow_icon from '../../assets/arrow_icon.svg';

const Ser = () => {
    return (
        <div className="space">
        <div id="service" className="services">
            <div className="services-title">
                <h1>Certifications & Achievements</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="services-container">
                {services_Data.map((service, index) => {
                    return (
                        <div className="service-format" key={index}>
                            <h3 className="service1">{service.c_no}</h3>
                            <h2>{service.c_name}</h2>
                            <p>{service.provider}</p>
                            <p>{service.date}</p>
                            <p>{service.validity}</p>
                            <p>{service.c_desc}</p>
                            <div className="services-readmore">
                                <a href={service.link}> <p>Link</p>
                                 
                                      </a>
                                      <img src={arrow_icon} alt="arrow icon" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}
export default Ser;















// import React, { useState, useEffect } from "react";

// const services_Data = [
//   {
//     c_no: "01",
//     c_name: "AWS Certified Solutions Architect",
//     provider: "Amazon Web Services",
//     date: "Jan 2024",
//     validity: "Valid until Jan 2027",
//     c_desc: "Professional certification demonstrating expertise in designing distributed systems on AWS",
//     link: "#"
//   },
//   {
//     c_no: "02",
//     c_name: "React Professional Certification",
//     provider: "Meta",
//     date: "Dec 2023",
//     validity: "Lifetime",
//     c_desc: "Advanced certification in React development and modern frontend practices",
//     link: "#"
//   },
//   {
//     c_no: "03",
//     c_name: "Google Cloud Professional",
//     provider: "Google Cloud",
//     date: "Nov 2023",
//     validity: "Valid until Nov 2025",
//     c_desc: "Certification in cloud architecture and infrastructure management",
//     link: "#"
//   }
// ];

// const Ser = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div id="service" style={styles.services}>
//       <div style={{
//         ...styles.servicesTitle,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
//         transition: 'all 0.8s ease-out'
//       }}>
//         <h1 style={styles.titleText}>Certifications & Achievements</h1>
//         <div style={styles.titleUnderline}></div>
//       </div>

//       <div style={styles.servicesContainer}>
//         {services_Data.map((service, index) => {
//           const isHovered = hoveredIndex === index;
//           return (
//             <div
//               key={index}
//               style={{
//                 ...styles.serviceFormat,
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible 
//                   ? isHovered ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)'
//                   : 'translateY(50px)',
//                 transition: `all ${0.5 + index * 0.1}s ease-out`,
//                 transitionDelay: isVisible ? `${index * 0.15}s` : '0s',
//                 boxShadow: isHovered 
//                   ? '0 25px 50px rgba(223, 52, 149, 0.3)' 
//                   : '0 10px 30px rgba(0, 0, 0, 0.1)'
//               }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div style={{
//                 ...styles.numberBadge,
//                 transform: isHovered ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
//                 transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
//               }}>
//                 <h3 style={styles.serviceNumber}>{service.c_no}</h3>
//               </div>
              
//               <h2 style={{
//                 ...styles.serviceName,
//                 color: isHovered ? '#DF3495' : '#1a1a1a'
//               }}>{service.c_name}</h2>
              
//               <p style={styles.provider}>{service.provider}</p>
              
//               <div style={styles.dateContainer}>
//                 <p style={styles.date}>{service.date}</p>
//                 <span style={styles.separator}>•</span>
//                 <p style={styles.validity}>{service.validity}</p>
//               </div>
              
//               <p style={styles.description}>{service.c_desc}</p>
              
//               <a 
//                 href={service.link}
//                 style={{
//                   ...styles.readmore,
//                   transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
//                   transition: 'all 0.3s ease'
//                 }}
//               >
//                 <span style={styles.linkText}>View Certificate</span>
//                 <svg 
//                   width="20" 
//                   height="20" 
//                   viewBox="0 0 20 20" 
//                   fill="none"
//                   style={{
//                     transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
//                     transition: 'all 0.3s ease'
//                   }}
//                 >
//                   <path 
//                     d="M4 10h12m0 0l-4-4m4 4l-4 4" 
//                     stroke="#DF3495" 
//                     strokeWidth="2" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </a>
              
//               <div style={{
//                 ...styles.hoverGlow,
//                 opacity: isHovered ? 1 : 0,
//                 transition: 'opacity 0.4s ease'
//               }}></div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   services: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '80px 170px',
//     gap: '80px',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     position: 'relative',
//     minHeight: '100vh'
//   },
//   servicesTitle: {
//     position: 'relative',
//     textAlign: 'center',
//   },
//   titleText: {
//     fontSize: '48px',
//     fontWeight: '700',
//     background: 'linear-gradient(135deg, #1a1a1a 0%, #DF3495 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     marginBottom: '20px',
//     letterSpacing: '-0.5px'
//   },
//   titleUnderline: {
//     width: '200px',
//     height: '4px',
//     background: 'linear-gradient(90deg, transparent, #DF3495, transparent)',
//     margin: '0 auto',
//     borderRadius: '2px',
//     animation: 'shimmer 2s infinite'
//   },
//   servicesContainer: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//     gap: '40px',
//     width: '100%',
//     maxWidth: '1200px'
//   },
//   serviceFormat: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//     padding: '40px',
//     borderRadius: '20px',
//     border: '1px solid rgba(223, 52, 149, 0.1)',
//     background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
//     cursor: 'pointer',
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   numberBadge: {
//     width: '60px',
//     height: '60px',
//     borderRadius: '50%',
//     background: 'linear-gradient(135deg, #DF3495 0%, #FF6B9D 100%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'flex-start'
//   },
//   serviceNumber: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#ffffff',
//     margin: 0
//   },
//   serviceName: {
//     fontSize: '24px',
//     fontWeight: '700',
//     margin: 0,
//     transition: 'color 0.3s ease',
//     lineHeight: '1.3'
//   },
//   provider: {
//     fontSize: '16px',
//     color: '#666',
//     margin: 0,
//     fontWeight: '500'
//   },
//   dateContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '14px',
//     color: '#888'
//   },
//   date: {
//     margin: 0
//   },
//   separator: {
//     color: '#DF3495',
//     fontWeight: '700'
//   },
//   validity: {
//     margin: 0
//   },
//   description: {
//     fontSize: '15px',
//     color: '#555',
//     lineHeight: '1.6',
//     margin: 0,
//     flexGrow: 1
//   },
//   readmore: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     textDecoration: 'none',
//     marginTop: '10px',
//     width: 'fit-content'
//   },
//   linkText: {
//     color: '#DF3495',
//     fontSize: '16px',
//     fontWeight: '600',
//     letterSpacing: '0.3px'
//   },
//   hoverGlow: {
//     position: 'absolute',
//     top: '-50%',
//     left: '-50%',
//     width: '200%',
//     height: '200%',
//     background: 'radial-gradient(circle, rgba(223, 52, 149, 0.1) 0%, transparent 70%)',
//     pointerEvents: 'none'
//   }
// };

// export default Ser;