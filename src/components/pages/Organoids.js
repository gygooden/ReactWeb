import React from 'react';
import '../../App.css';
import '../Organoids.css';

const organoidVideos = [
  'https://www.youtube.com/embed/0I5MldVOjWg',
  'https://www.youtube.com/embed/0I5MldVOjWg',
  'https://www.youtube.com/embed/0I5MldVOjWg',
  'https://www.youtube.com/embed/0I5MldVOjWg',
];

export default function Organoids() {
  return (
    <div>
      <h1 className='mission'>ORGANOIDS</h1>
      <div className='organoids-container'>
        <p className='organoids-description'>
          Organoids are “mini-organs” in a dish. Until now, a lack of vascularization has limited human organoid viability & growth.
          We create scalable & reproducible heart & liver vascularized organoids, and will eventually create all organ types in integrated systems.
        </p>
        <div className='organoid-videos'>
          {organoidVideos.map((videoSrc, index) => (
            <div className='organoid-video' key={index}>
=              <iframe
                title={`Organoid Video ${index + 1}`}
                width='100%'
                height='200'
                src={videoSrc}
                frameBorder='0'
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
