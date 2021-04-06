import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button.component';

import { addItemToBag } from '../../redux/bag/bag.actions';

import './product-box.styles.scss';

const ProductBox = ({ id, imageUrl, name, prices, active, handleClick, brand, addItemToBag }) => {
    const addToBag = () => {
        const item = {
            id,
            brand,
            name,
            size: active,
            price: prices[active],
            imageUrl
        };

        addItemToBag(item);
    };

    return (
        <div className='product-box'>
            <div className='product-box-container'>
                <img src={imageUrl} alt={name} className='product-image' />
                <div className='prices-container'>
                    <div className='prices'>
                        {
                            Object.keys(prices).map((keyName, index) => (
                                <div 
                                    key={index} 
                                    onClick={e => handleClick(e)} 
                                    id={keyName} 
                                    className={active === keyName ? 'price active' : 'price'}
                                >
                                    <p>{keyName}ml</p>
                                    <p>€{prices[keyName]}</p>
                                </div>
                            ))
                        }
                    </div>
                    <CustomButton style={{ backgroundColor: 'var(--background-color)', color: 'var(--dark-color)'}} handleClick={addToBag}>
                        Add to Cart
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItemToBag: item => dispatch(addItemToBag(item))
});

export default connect(null, mapDispatchToProps)(ProductBox);