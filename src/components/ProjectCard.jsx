import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function ProjectCard({ title, githubLink, description, features, technology, images }) {
    return (
      <Card.Body className="section-body">
        <div className='d-flex align-items-start'>
          <div className='flex-grow-1'>
            <a href={githubLink} aria-label="GitHub link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="title-container" style={{ marginBottom: '5px' }}>
                <h3>{title}</h3>
                <i className="fa fa-github fa-x2"></i>
              </div>
            </a>
            <h5>Overview</h5>
            <p>{description}</p>
            <h5>Features</h5>
            <ul className='text-body'>{features.map((feature, index) => <li key={index}><b>{feature.name}:</b> {feature.details}</li>)}</ul>
            <h5>Technology</h5>
            <p>{technology}</p>
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className="img-fluid rounded" style={{ width: 'auto', height: '220px', marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            ))}
          </div>
        </div>
      </Card.Body>
    );
  }
  
export default ProjectCard;  