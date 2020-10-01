import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="content-wrapper-centered HomePage">
      <div className="page-content-margined">
        <h1 className="page-title">Timmy Chan</h1>
        <div className="description">
          <p>
            Full stack developer with expertise in Web Development,
            Back End, design, 3D Systems and Management. Held multiple
            workshops and courses for students from different studies
            at NTNU. Loves to work on projects outside of school.
          </p>
          <Link to="/Projects">Explore Projects</Link>
        </div>
      </div>
    </div>
  );
}
