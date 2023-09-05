import React from 'react';
import '../../App.css';
import '../Organoids.css';

export default function Organoids() {
  return (
    <div>
    <h1 className='mission'>ORGANOIDS</h1>;   
    <div className='organoids-container'>
      <p className='organoids-description'>
      Organoids are “mini-organs” in a dish. Until now, a lack of vascularization has limited human organoid viability & growth.
      We create scalable & reproducible heart & liver vascularized organoids, and will eventually create all organ types in integrated systems.
      </p>
      <div className='organoid-videos'>
        {/* You can replace the following placeholders with your organoid video components */}
        <div className='organoid-video'>
          {/* Video 1 */}
        </div>
        <div className='organoid-video'>
          {/* Video 2 */}
        </div>
        <div className='organoid-video'>
          {/* Video 3 */}
        </div>
        <div className='organoid-video'>
          {/* Video 4 */}
        </div>
      </div>
    </div>
    </div>
  );
}
