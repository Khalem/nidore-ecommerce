import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromBag, addItemToBag } from '../../redux/bag/bag.actions';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import './bag-item.styles.scss';

const BagItem = ({ item, removeItemFromBag, addItemToBag }) => {
    const { imageUrl, name, size, brand, price, quantity } = item;

    const removeItem = () => {
        removeItemFromBag(item);
    };

    const addItem = () => {
        addItemToBag(item);
    };

    return (
        <div className='bag-item'>
            <img src={imageUrl} alt={name} className='bag-item-image' />
            <div className='bag-item-details'>
                <h1>{name} <span>- {size}ml</span></h1>
                <h2>{brand}</h2>
            </div>
            <div className='bag-item-edit'>
                <h3 className='quantity'>
                    <Arrow className='arrow left-arrow' onClick={removeItem} />
                        {quantity} 
                    <Arrow className='arrow' onClick={addItem} />
                </h3>
                <h3 className='total'><span>total:</span> €{price * quantity}</h3>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItemFromBag: item => dispatch(removeItemFromBag(item)),
    addItemToBag: item => dispatch(addItemToBag(item))
});

export default connect(null, mapDispatchToProps)(BagItem);