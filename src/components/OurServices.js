import React from 'react';
import consulting from "../assets/img/consulting.svg";
import './OurServices.css';

export const OurServices = () => {
  return (
    <section className="services-section" id="services">
      <div className="background-container">
        <img className="full-background-image" src={consulting} alt="Background Image" />
      </div>
      
      {/* Title header at top */}
      <div className="services-header">
        <h2>Our Services</h2>
      </div>
      
      <div className="services-content">
        {/* Home & Online Tuition/Schooling Section - Left Bottom */}
        <div className="service-card">
          <h3>Home & Online Tuition/Schooling</h3>
          <p>
            We provide flexible, one-on-one tutoring—either at home or online—covering 
            both the GES and British curricula. Our experienced tutors personalize each 
            lesson to support every student's learning style and academic goals.
          </p>
        </div>
        
        {/* Test Preparation Section - Right Bottom */}
        <div className="service-card">
          <h3>Test Preparation</h3>
          <p>
            Exam success starts with the right preparation. At Classic Home Tuition, 
            we offer expert test prep services for:
          </p>
          <ul>
            <li>BECE & WASSCE (GES)</li>
            <li>IGCSE, O-Level, A-Level, IB (British Curriculum)</li>
            <li>SAT, IELTS, GRE, and other international exams</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OurServices;