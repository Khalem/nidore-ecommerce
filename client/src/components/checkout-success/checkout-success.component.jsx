import React from 'react';
import Confetti from 'react-confetti';

import './checkout-success.styles.scss';

const CheckoutSuccess = ({ orderNumber }) => (
    <section className='checkout-success'>
        <Confetti />
        <h1 className='checkout-success-title'>Thank you!</h1>
        <h2 className='checkout-success-details'>Your order has been placed.</h2>
        <h3 className='order-number-title'>Order number: <span>{orderNumber}</span></h3>
    </section>
);

export default CheckoutSuccess;