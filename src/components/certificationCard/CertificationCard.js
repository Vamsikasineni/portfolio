import React from "react";

const CertificationCard = ({ certification, theme }) => {
  return (
    <div className="certification-card">
      <h2>{certification.title}</h2>
      <p>{certification.subtitle}</p>
      <p>{certification.duration}</p>
      <a
        href={certification.certificate_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Certificate Link
      </a>
    </div>
  );
};

export default CertificationCard;
