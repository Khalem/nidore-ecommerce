import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button.component';
import BagItem from '../../components/bag-item/bag-item.component';

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
                bagItems.map(item => 
                    <BagItem item={item} />
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