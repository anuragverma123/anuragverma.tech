import React from "react";
import "./Internship.css";

import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import Internship_Data from "../../assets/Internship_data.js";

const Internship = () => {
  return (
    <div id="internship"className="internship">
      <div className="internship-title">
        <h1>Experience & Internship</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="internship-container">
        {Internship_Data.map((intern, index) => (
          <div className="internship-format" key={index}>
            <h3 className="service1">{intern.i_no}</h3>
            <h2>{intern.i_role}</h2>
            <p>
              <strong>Company:</strong> {intern.company}
            </p>
            <p>
              <strong>Duration:</strong> {intern.date}
            </p>
            <p>{intern.i_desc}</p>

            <div className="internship-readmore">
              {intern.link && (
                <a
                  href={intern.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>View Offer Letter</p>
                </a>
              )}
              <img src={arrow_icon} alt="arrow icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
