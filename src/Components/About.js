// src/AboutPage.js

import React from 'react';
import './About.css';

const AboutPage = () => {
  return (  
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-overview">
        <h2>Company Overview</h2>
        <p>
          Our Company is a cutting-edge educational technology company dedicated to providing innovative learning solutions.
          We strive to enhance the educational experience through technology, making learning more engaging and effective.
        </p>
      </section>
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize education by leveraging technology to create immersive and interactive learning environments.
          We are committed to empowering learners of all ages to achieve their full potential.
        </p>
      </section>
     
      <section className="about-team container-flex">
        <h2>Our Founders</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small_2x/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg" alt="Img" className="team-photo" />
            <div className="team-info">
              <h3>Sri Sumanth</h3>
              <p>CEO & Founder</p>
            </div>
          </div>
          <div className="team-member">
            <img src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg" alt="Img" className="team-photo" />
            <div className="team-info">
              <h3>Smith</h3>
              <p>Chief Technology Officer</p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
