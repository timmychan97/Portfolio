import React from 'react';
import CardsContainer from '../components/CardsContainer';
import Divider from '../components/Divider';
import './GalleryPage.css';

export default function GalleryPage() {
  return (
    <div className="content-wrapper-centered">
      <div className="page-content-margined">
        <h1 className="page-title">Gallery</h1>
        <Divider />
        <div className="gallery-menu">
          <CardsContainer />
        </div>
      </div>
    </div>
  );
}
