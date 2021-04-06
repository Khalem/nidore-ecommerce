import React from 'react';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import './bag-item.styles.scss';

const BagItem = ({ item: { imageUrl, name, size, brand, price, quantity } }) => (
    <div className='bag-item'>
        <img src={imageUrl} alt={name} className='bag-item-image' />
        <div className='bag-item-details'>
            <h1>{name} <span>- {size}ml</span></h1>
            <h2>{brand}</h2>
        </div>
        <div className='bag-item-edit'>
            <h3 className='quantity'><Arrow className='arrow left-arrow' />{quantity} <Arrow className='arrow' /></h3>
            <h3 className='total'><span>total:</span> €{price * quantity}</h3>
        </div>
    </div>
);

export default BagItem;