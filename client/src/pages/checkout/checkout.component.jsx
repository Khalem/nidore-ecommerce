import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Switch from 'react-switch';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

import FormBox from '../../components/form-box/form-box.component';
import AddressFieldsContainer from '../../components/address-fields-container/address-fields-container.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectBagItemsTotal } from '../../redux/bag/bag.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './checkout.styles.scss';

const Checkout = ({ total, currentUser }) => {
    const [sameAddress, setSameAddress] = useState(true);
    const [isProcessing, setProcessingTo] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleFormSubmit = async event => {
        event.preventDefault();

        const billingAddress = {
            city: event.target._city.value,
            line1: event.target._address.value,
            state: event.target._county.value,
            postal_code: event.target._eircode.value,
            country: 'IE'
        };

        const addressDetails = {
            name: currentUser.name,
            email: currentUser.email,
            address: billingAddress
        };

        setProcessingTo(true);

        const cardElement = elements.getElement('card');

        try {
            // send checkout data to backend to get clientSecret for payment
            const { data: clientSecret } = await axios.post('/payment_intents', {
                amount: total * 100,
                name: currentUser.name,
                shippingAddress: sameAddress ? billingAddress
                                : {
                                    city: event.target.shipping_city.value,
                                    line1: event.target.shipping_address.value,
                                    state: event.target.shipping_county.value,
                                    postal_code: event.target.shipping_eircode.value,
                                    country: 'IE'
                                }
            });
            
            // get payment method
            const paymentMethodReq = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: addressDetails
            });

            if (paymentMethodReq.error) {
                alert(paymentMethodReq.error.message);
                setProcessingTo(false);
                return;
            }

            // attempt to pay using payment method and clientSecret
            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id
            });

            if (error) {
                alert(error.message);
                setProcessingTo(false);
                return;
            }

            setProcessingTo(false);
            alert('Payment successful!');
        } catch (error) {
            alert(error.message);
        }

    };

    const iframeStyles = {
        base: {
            color: "#fff",
            fontSize: "18px",
            iconColor: "#fff",
            "::placeholder": {
                color: "#bababa"
            }
        },
        invalid: {
            iconColor: "#ff1749",
            color: "#ff1749"
        },
        complete: {
            iconColor: "##17ff3a",
            color: "#17ff3a"
        }
    };

    const cardElementOpts = {
        iconStyle: 'solid',
        style: iframeStyles,
        hidePostalCode: true
    };

    return (
        <section className='checkout'>
            <h1 className='checkout-title'>Checkout</h1>
            <FormBox handleSubmit={handleFormSubmit}>
                <h2 className='form-title'>Billing Address</h2>
                <AddressFieldsContainer addressType='' />
                {
                    !sameAddress ?
                    <div className='billing-address'>
                        <h2 className='form-title'>Billing Address</h2>
                        <AddressFieldsContainer addressType='shipping' />
                    </div>
                    : null
                }
                <h2 className='form-title'>Same address for shipping?</h2>
                {/* label required for accessibility */}
                <label>
                    <Switch onChange={() => setSameAddress(!sameAddress)} checked={sameAddress} width={42} height={21} handleDiameter={19} />
                </label>
                <div className='card-container'>
                    <h2 className='form-title'>Card Details</h2>
                    <CardElement options={cardElementOpts} />
                </div>
                <CustomButton style={{ fontWeight: 700, margin: '30px 0 0 0' }}>
                    {isProcessing ? 'Processing...' : `Pay €${total}`}
                </CustomButton>
            </FormBox>
        </section>
    );
};

const mapStatetoProps = createStructuredSelector({
    total: selectBagItemsTotal,
    currentUser: selectCurrentUser
});

export default connect(mapStatetoProps)(Checkout);