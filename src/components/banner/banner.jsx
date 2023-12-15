import React from 'react';
import './banner.css'; // Import the CSS file for styling

const Banner = () => {
  return (
    <div className="banner-container section-padding">
      <div className="banner-item">
        <h3>Tailored Teams</h3>
        <p>Tailored competent teams - pick a team that suits your needs</p>
      </div>
      <div className="banner-item">
        <h3>Same Time Zone</h3>
        <p>Easy collaboration working on the same time zone as your working hours</p>
      </div>
      <div className="banner-item">
        <h3>Cost Savings</h3>
        <p>Cost is as low as possible - 50 - 66%</p>
      </div>
    </div>
  );
};

export default Banner;
