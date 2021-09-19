import React from 'react';
import { Link } from 'react-router-dom';

function CardItems(props) {
    const {path, label, src, text, info, price} = props;
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={path}>
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} alt="Travel" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className='cards__item__text'>{text}</h5>
                        <h5 className='cards__item__information'>{info}</h5>
                        <p className='cards__item__price'>{price}</p>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItems;
