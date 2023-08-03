import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function TeamCards() {
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
              description='Description for Oscar Abilez'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Frankie Myers, PhD (Co-founder)'
              label='Co-founder'
              path='/services'
              description='Description for Frankie Myers'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Andy Gooden, MSEE (Full time funny guy)'
              label='Co-founder'
              path='/services'
              description='Description for Andy Gooden, aka Mr. Kev'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
