import React, { Component } from "react";
import "./Certifications.css";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { certifications } from "../../portfolio"; // Assuming you have your certifications data correctly structured in portfolio.js
import { Fade } from "react-reveal";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certifications">
        <div className="certifications-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certifications-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <div className="certifications-body-div">
          {certifications.certifications.map((certification, index) => (
            <CertificationCard
              certification={certification}
              theme={theme}
              key={index}
            />
          ))}{" "}
          {/* Add the closing parenthesis here */}
        </div>
      </div>
    );
  }
}

export default Certifications;
