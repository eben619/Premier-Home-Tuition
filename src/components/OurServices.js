import React from 'react';
import consulting from "../assets/img/consulting.svg";
import './OurServices.css'; // Import CSS file for custom styling

export const OurServices = () => {
  return (
    <section className="services-section" id="services">
      <div className="background-container">
        <img className="full-background-image" src={consulting} alt="Background Image" />
      </div>
    </section>
  )
}

export default OurServices;