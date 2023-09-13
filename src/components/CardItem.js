import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  const handleLinkClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} onClick={handleLinkClick}>
          <div className='cards__item__pic-wrap' data-category={props.label}>
            <div className='card__image-container'>
              <img
                className='cards__item__img'
                alt='Travel Image'
                src={props.src}
              />
            </div>
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='card_item_team_descriptions'>{props.description}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
