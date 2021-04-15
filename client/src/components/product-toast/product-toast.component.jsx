import React from 'react';

import './product-toast.styles.scss';

const ProductToast = ({ imageUrl, name, size, closeToast, toastProps }) => (
    <div className='product-toast'>
        <img src={imageUrl} alt={`${name} added to bag`} className='product-toast-img' />
        <div className='product-toast-info'>
            <p className='product-name'>{name} ({size}ml)</p>
            <p className='added-to-bag'>Has been successfuly added to your shopping bag!</p>
        </div>
    </div>
);

export default ProductToast;