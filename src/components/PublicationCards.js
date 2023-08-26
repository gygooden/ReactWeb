import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function PublicationCards() {
{/*TeamCards creates the cards displayed on publication page, using calls to Cards.css*/}

const linkUrl1 = 'https://www.biorxiv.org/content/10.1101/2022.07.08.499233v1.full';
const linkUrl2 = 'https://pubmed.ncbi.nlm.nih.gov/33002105/';
const linkUrl3 = 'https://pubmed.ncbi.nlm.nih.gov/32763147/';
const linkUrl4 = 'https://pubmed.ncbi.nlm.nih.gov/30480100/';
const linkUrl5 = 'https://pubmed.ncbi.nlm.nih.gov/29086457/';
const linkUrl6 = 'https://pubmed.ncbi.nlm.nih.gov/27642787/';
const linkUrl7 = 'https://pubmed.ncbi.nlm.nih.gov/26906959/';
const linkUrl8 = 'https://pubmed.ncbi.nlm.nih.gov/24930130/';
const linkUrl9 = 'https://pubmed.ncbi.nlm.nih.gov/24141327/';
const linkUrl10 = 'https://pubmed.ncbi.nlm.nih.gov/23290139/';
const linkUrl11 = 'https://pubmed.ncbi.nlm.nih.gov/23207961/';
const linkUrl12 = 'https://pubmed.ncbi.nlm.nih.gov/22517884/';
const linkUrl13 = 'https://pubmed.ncbi.nlm.nih.gov/21943413/';
const linkUrl14 = 'https://pubmed.ncbi.nlm.nih.gov/16784327/';
const linkUrl15 = 'https://pubmed.ncbi.nlm.nih.gov/16542683/';

const handleCardClick = (url) => {
    window.open(url, '_blank');
};

  return (
    <div className='cards'>
      <h1>Check out our recent work!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Micropatterned Organoids Enable Modeling of the Earliest Stages of Human Cardiac Vascularization (2022)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl1)}
            />
            <CardItem
              src='images/img-2.jpg'
              text='Transcriptome analysis of non human primate-induced pluripotent stem cell-derived cardiomyocytes in 2D monolayer culture vs. 3D engineered heart tissue (2020)'
              label='Abilez, et al'
              onClick={() => handleCardClick(linkUrl2)}
            />
            <CardItem
              src='images/img-9.jpg'
              text='Endogenous Retrovirus-Derived lncRNA BANCR Promotes Cardiomyocyte Migration in Humans and Non-human Primates (2020)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl3)}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Big bottlenecks in cardiovascular tissue engineering (2018)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl4)}
            />
            <CardItem
              src='images/img-2.jpg'
              text='Passive Stretch Induces Structural and Functional Maturation of Engineered Heart Muscle as Predicted by Computational Modeling (2017)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl5)}
            />
            <CardItem
              src='images/img-9.jpg'
              text='iPSC-derived cardiomyocytes reveal abnormal TGF-β signalling in left ventricular non-compaction cardiomyopathy (2016)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl6)}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Stem cell reprogramming: A 3D boost (2016)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl7)}
            />
            <CardItem
              src='images/img-2.jpg'
              text='Chemically defined generation of human cardiomyocytes (2014)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl8)}
            />
            <CardItem
              src='images/img-9.jpg'
              text='Robust pluripotent stem cell expansion and cardiomyocyte differentiation via geometric patterning (2013)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl9)}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='
              Abnormal calcium handling properties underlie familial hypertrophic cardiomyopathy pathology in patient-specific induced pluripotent stem cells (2013)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl10)}
            />
            <CardItem
              src='images/img-2.jpg'
              text='Label-free electrophysiological cytometry for stem cell-derived cardiomyocyte clusters (2012)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl11)}
            />
            <CardItem
              src='images/img-9.jpg'
              text='Patient-specific induced pluripotent stem cells as a model for familial dilated cardiomyopathy (2012)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl12)}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Multiscale computational models for optogenetic control of cardiac function (2011)'
              label='Abilez,et al'
              onClick={() => handleCardClick(linkUrl13)}
            />
            <CardItem
              src='images/img-2.jpg'
              text='P19 progenitor cells progress to organized contracting myocytes after chemical and electrical stimulation: implications for vascular tissue engineering (2006)'
              label='Abilez/Myers'
              onClick={() => handleCardClick(linkUrl14)}
            />
            <CardItem
              src='images/img-9.jpg'
              text='
              A novel culture system shows that stem cells can be grown in 3D and under physiologic pulsatile conditions for tissue engineering of vascular grafts (2006)'
              label='Abilez/Myers'
              onClick={() => handleCardClick(linkUrl15)}
            />
            {/* path='/services' */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PublicationCards;
