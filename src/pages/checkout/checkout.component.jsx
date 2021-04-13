import React, { useState } from 'react';
import Switch from 'react-switch';

import FormBox from '../../components/form-box/form-box.component';
import AddressFieldsContainer from '../../components/address-fields-container/address-fields-container.component';

import './checkout.styles.scss';

const Checkout = () => {
    const [sameAddress, setSameAddress] = useState(true);

    return (
        <section className='checkout'>
            <h1 className='checkout-title'>Checkout</h1>
            <FormBox>
                <h2 className='form-title'>Shipping Address</h2>
                <AddressFieldsContainer addressType={!sameAddress ? 'shipping' : ''} />
                {
                    !sameAddress ?
                    <div className='billing-address'>
                        <h2 className='form-title'>Billing Address</h2>
                        <AddressFieldsContainer addressType='billing' />
                    </div>
                    : null
                }
                <h2 className='form-title'>Same address for billing?</h2>
                {/* label required for accessibility */}
                <label>
                    <Switch onChange={() => setSameAddress(!sameAddress)} checked={sameAddress} width={42} height={21} handleDiameter={19} />
                </label>
            </FormBox>
        </section>
    );
};

export default Checkout;