import React from 'react';
import { Link } from 'react-router-dom';

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
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
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