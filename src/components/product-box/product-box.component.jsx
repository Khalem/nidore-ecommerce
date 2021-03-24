import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import './product-box.styles.scss';

const ProductBox = ({ imageUrl, name, prices }) => (
    <div className='product-box'>
        <div className='product-box-container'>
            <img src={imageUrl} alt={name} className='product-image' />
            <div className='prices-container'>
                <div className='prices'>
                    {
                        Object.keys(prices).map((keyName, index) => (
                            <div key={index}>
                                <p className='ml'>{keyName}ml</p>
                                <p className='price'>€{prices[keyName]}</p>
                            </div>
                        ))
                    }
                </div>
                <CustomButton style={{ backgroundColor: 'var(--background-color)', color: 'var(--dark-color)'}}>
                    Add to Cart
                </CustomButton>
            </div>
        </div>
    </div>
);

export default ProductBox;