import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function TeamCards() {
  {/*TeamCards creates the cards displayed on team page, using calls to Cards.css*/}
  return (
    <div className='cards'>
      <h1>Meet the team!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Oscar Abilez, Md, PhD (Co-founder)'
              label='Co-founder'
              path='/services'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Organoids, software, hardware</li>
                    <li>MD - Cornell, PhD - Stanford, Bioengineering</li>
                    <li>Stanford - Surgery Resident, Instructor (NIH K01), Senior Scientist</li>
                    <li>Research of 15+ yrs is basis for Bullseye</li>
                  </ul>
                </div>
              }
            />

            <CardItem
              src='images/img-2.jpg'
              text='Frankie Myers, PhD (Co-founder)'
              label='Co-founder'
              path='/services'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Organoids, software, hardware</li>
                    <li>PhD - UC Berkeley, Bioengineering</li>
                    <li>Mosaic Design Labs - Principal</li>
                    <li>Lucira Health - Director of Engineering</li>
                  </ul>
                </div>
              }
            />

            <CardItem
              src='images/img-2.jpg'
              text='Andy Gooden, MSEE (Co-founder)'
              label='Co-founder'
              path='/services'
              description={
                <div>
                  <ul className='bulleted_list'>
                    <li>Software (AI/ML), hardware</li>
                    <li>MS - Stanford, Electrical Engineering & Computer Science</li>
                    <li>OpenX - Staff Data Scientist</li>
                    <li>Hewlett Packard - Lead Image Processing Engineer</li>
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

export default TeamCards;
