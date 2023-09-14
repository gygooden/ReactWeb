import React from 'react';
import '../../App.css';
import '../Organoids.css';

export default function Mission() {
  return (
    <div>
      <h1 className='mission'>Our Mission</h1>
      <div className='organoids-container'>
        <p className='organoids-description'>
          We aim to significantly improve human health<br /><br />
          We are a very early-stage startup that creates bigger & better vascularized organoids via hPSCs, novel hardware & AI/ML for drug discovery & regenerative therapies<br /><br />
          We provide pharma, academia & eventually patients with products, services & partnerships
        </p>
      </div>
    </div>
  );
}