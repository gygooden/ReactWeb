import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function TeamHero() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Our Team</h1>
      </div>
  );
}

export default TeamHero;