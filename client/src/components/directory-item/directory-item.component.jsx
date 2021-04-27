import React from 'react';
import { withRouter } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = ({ item, index, history, match }) => (
    <div className='product-item' key={index} onClick={() => history.push(`${match.url}/${item.id}`)}>
        <img src={item.imageUrl} alt={`${item.name}`} className='product-image' />
        <div className='product-details'>
            <p className='product-name'>{item.name}</p>
            <p className='product-brand'>{item.brand}</p>
            <p className='product-price'>€{item.prices[Object.keys(item.prices)[0]].toFixed(2)}</p>
        </div>
    </div>
);

export default withRouter(DirectoryItem);