import React from 'react';

import './directory-item.styles.scss';

const DirectoryItem = ({ item, index }) => (
    <div className='product-item' key={index}>
        <img src={item.imageUrl} alt={`${item.name} image`} className='product-image' />
        <div className='product-details'>
            <p className='product-name'>{item.name}</p>
            <p className='product-brand'>{item.brand}</p>
            <p className='product-price'>€{item.prices[Object.keys(item.prices)[0]]}</p>
        </div>
    </div>
);

export default DirectoryItem;