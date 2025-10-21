import React from 'react';
import './index.scss';

const ProfessionalSummary = () => {
  return (
    <div className="professional-summary">
      <div className="summary-card">
        <h3>Professional Summary</h3>
        <p>
          Full-stack developer with <strong>4+ years</strong> of experience in .NET, React, and mobile development. 
          <strong>4 patents earned</strong> at GE Appliances, <strong>top nationwide salesperson</strong> at Charter Communications, 
          and successful freelancer with expertise in scalable web applications and cross-platform mobile solutions.
        </p>
        <div className="key-achievements">
          <div className="achievement">
            <span className="number">4</span>
            <span className="label">Patents Earned</span>
          </div>
          <div className="achievement">
            <span className="number">#1</span>
            <span className="label">Nationwide Sales</span>
          </div>
          <div className="achievement">
            <span className="number">4+</span>
            <span className="label">Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
