import React from "react";
import './Ser.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_Data from "../../assets/services_data.js";
import arrow_icon from '../../assets/arrow_icon.svg';

const Ser = () => {
    return (
        <div className="services">
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
    )
}
export default Ser;
