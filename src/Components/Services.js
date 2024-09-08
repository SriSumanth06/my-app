// src/ServicePage.js

import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and functional websites and web applications.',
    projects: [
      'E-commerce Platforms',
      'Content Management Systems',
      'Corporate Websites'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Creating high-performance mobile applications for both iOS and Android.',
    projects: [
      'Social Media Apps',
      'Fitness Trackers',
      'Productivity Tools'
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Strategies to boost your online presence and engage with your target audience.',
    projects: [
      'SEO Optimization',
      'Social Media Campaigns',
      'Pay--Click Advertising'
    ]
  }
];

const ServiceTitle = ({ title }) => (
  <div className="service-title-card">
    <h2>{title}</h2>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <p>{project}</p>
  </div>
);

const ServiceItem = ({ title, description, projects }) => (
  <div className="service-card">
    <ServiceTitle title={title} />
    <p className="service-description">{description}</p>
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
    <a href="#" className="button">Learn More</a>
  </div>
);

const ServicePage = () => (
  <div className="service-page">
    <h1 className="page-title">Our Services</h1>
    <div className="service-container">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          title={service.title}
          description={service.description}
          projects={service.projects}
        />
      ))}
    </div>
  </div>
);

export default ServicePage;
