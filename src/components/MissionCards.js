import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function MissionCards() {
  {/*MissionCards creates the cards displayed on team page, using calls to Cards.css*/}
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='We aim to significantly improve human health'
              label='Primary'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>We are a very early-stage startup that creates bigger & better vascularized organoids via hPSCs, novel hardware & AI/ML for drug discovery & regenerative therapies</li>
                    <li>We provide pharma, academia & eventually patients with products, services & partnerships</li>
                  </ul>
                </div>
              }
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MissionCards;
