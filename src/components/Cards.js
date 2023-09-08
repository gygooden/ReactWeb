import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const linkUrl1 = 'https://www.biorxiv.org/content/10.1101/2022.07.08.499233v1.full';
    const linkUrl2 = 'https://pubmed.ncbi.nlm.nih.gov/33002105/';
  const linkUrl3 = 'https://pubmed.ncbi.nlm.nih.gov/32763147/';
  const linkUrl4 = 'https://pubmed.ncbi.nlm.nih.gov/30480100/';
  const linkUrl5 = 'https://pubmed.ncbi.nlm.nih.gov/29086457/';

const handleCardClick = (url) => {
    window.open(url, '_blank');
};
  return (
    <div className='cards'>
      <h1>Check out our recent projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/bioxriv.jpg'
              text='Micropatterned Organoids Enable Modeling of the Earliest Stages of Human Cardiac Vascularization (2022)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl1)}
            />
            <CardItem
              src='images/pubmed.jpg'
              text='Transcriptome analysis of non human primate-induced pluripotent stem cell-derived cardiomyocytes in 2D monolayer culture vs. 3D engineered heart tissue (2020)'
              label='Abilez, et al'
              onClick={() => handleCardClick(linkUrl2)}
            />
            <CardItem
              src='images/pubmed.jpg'
              text='Endogenous Retrovirus-Derived lncRNA BANCR Promotes Cardiomyocyte Migration in Humans and Non-human Primates (2020)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl3)}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pubmed.jpg'
              text='Big bottlenecks in cardiovascular tissue engineering (2018)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl4)}
            />
            <CardItem
              src='images/pubmed.jpg'
              text='Passive Stretch Induces Structural and Functional Maturation of Engineered Heart Muscle as Predicted by Computational Modeling (2017)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl5)}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
