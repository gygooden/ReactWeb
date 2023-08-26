import React from 'react';
import '../../App.css';
import TeamHero from '../TeamHero';
import TeamCards from '../TeamCards';

export default function Team() {
  return (
    <>
      {/* <h1 className='team'>Team</h1>; */}
      <TeamHero/>
      <TeamCards />
    </>
  );
}
