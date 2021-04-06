import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import CustomButton from '../../components/custom-button/custom-button.component';

import './bag-page.styles.scss';

const BagPage = ({ bagItems }) => {
    const getCompleteTotal = () => {
        let completeTotal = 0;
        bagItems.forEach(({ price, quantity }) => {
            completeTotal+= price * quantity;
        });

        return completeTotal;
    };

    const buttonStyles = {
        backgroundColor: 'var(--dark-color)',
        color: 'var(--background-color)',
        boxShadow: 'none',
        minWidth: '35%',
        padding: '20px 10px',
        fontWeight: '500'
    };

    return (
        <div className='bag-page'>
            <h1 className='bag-page-title'>Your shopping bag</h1>
            {
                bagItems.map(({ brand, name, size, price, imageUrl, quantity }) => 
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
                )
            }
            <div className='bag-cta'>
                <h1 className='complete-total'>total: €{getCompleteTotal()}</h1>
                <CustomButton name='checkout' style={buttonStyles}>Go to Checkout</CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = ({ bag }) => ({
    bagItems: bag.bagItems
});

export default connect(mapStateToProps)(BagPage);