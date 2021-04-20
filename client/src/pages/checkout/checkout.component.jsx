import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import Switch from 'react-switch';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import FormBox from '../../components/form-box/form-box.component';
import AddressFieldsContainer from '../../components/address-fields-container/address-fields-container.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CheckoutSuccess from '../../components/checkout-success/checkout-success.component';

import { selectBagItemsCount, selectBagItemsTotal } from '../../redux/bag/bag.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { clearAllItemsFromBag } from '../../redux/bag/bag.actions';

import './checkout.styles.scss';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ total, currentUser, dispatch, bagItemsCount, history }) => {
    const [sameAddress, setSameAddress] = useState(true);
    const [isProcessing, setProcessingTo] = useState(false);
    const [orderNumber, setOrderNumber] = useState(0);

    const stripe = useStripe();
    const elements = useElements();

    // if user has no items in bag, and hasn't successfully completed order, redirect
    useEffect(() => {
        if (!bagItemsCount && !orderNumber) {
            history.push('/');
        }
    },[]);

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
            const amount = total * 100;
            // send checkout data to backend to get clientSecret for payment
            const { data } = await axios.post('/payment_intents', {
                amount: amount.toFixed(0),
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

            const { clientSecret, stripeOrderNumber } = data;
            
            // get payment method
            const paymentMethodReq = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: addressDetails
            });

            if (paymentMethodReq.error) {
                toast.error(`${paymentMethodReq.error.message}`,{
                    position: toast.POSITION.TOP_CENTER
                });
                setProcessingTo(false);
                return;
            }

            // attempt to pay using payment method and clientSecret
            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id
            });

            if (error) {
                toast.error(`${error.message}`, {
                    position: toast.POSITION.TOP_CENTER
                });
                setProcessingTo(false);
                return;
            }

            // payment successful
            setProcessingTo(false);
            dispatch(clearAllItemsFromBag());
            setOrderNumber(stripeOrderNumber);
        } catch (error) {
            toast.error(`${error.message}`, {
                position: toast.POSITION.TOP_CENTER
            });
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
            iconColor: "#17ff3a",
            color: "#17ff3a"
        }
    };

    const cardElementOpts = {
        iconStyle: 'solid',
        style: iframeStyles,
        hidePostalCode: true
    };

    if (orderNumber) {
        return (
            <CheckoutSuccess orderNumber={orderNumber} />
        );
    }

    return (
        <section className='checkout'>
            <h1 className='checkout-title'>Checkout</h1>
            <FormBox handleSubmit={handleFormSubmit}>
                <h2 className='form-title'>Billing Address</h2>
                <AddressFieldsContainer addressType='' />
                {
                    !sameAddress ?
                    <div className='billing-address'>
                        <h2 className='form-title'>Shipping Address</h2>
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
                    <p className='card-warning'>Use test card: 4242 4242 4242 4242 04/25 222</p>
                    <CardElement options={cardElementOpts} />
                </div>
                <CustomButton style={{ fontWeight: 700, margin: '30px 0 0 0' }}>
                    {isProcessing ? 'Processing...' : `Pay €${total}`}
                </CustomButton>
            </FormBox>
            <ToastContainer />
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    total: selectBagItemsTotal,
    bagItemsCount: selectBagItemsCount,
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(withRouter(Checkout));