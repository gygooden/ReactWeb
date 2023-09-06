import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  {/*HeroSection creates template for react banner applied to home page*/}
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Biotech for a Better Future</h1>
      <p>Pioneering vascularized organoids</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          to='/contact'
        >
          More about us
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;