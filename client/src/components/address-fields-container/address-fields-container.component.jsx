import React, { Fragment } from 'react';

import CustomInput from '../custom-input/custom-input.component';

import './address-fields-container.styles.scss';

class AddressFieldsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '',
            city: '',
            county: '',
            eircode: ''
        };
    }

    /* 
        I need to inject the shipping type as a prop to avoid id clashes which affects the labels behaviour
        Doing so, I need to split the input name to change the appropriate state
    */
    handleChange = e => {
        let { name, value } = e.target;

        name = name.split("_")[1];

        this.setState({ [name]: value });
    }

    render() {
        const { addressType } = this.props;

        return (
            <Fragment>
                <CustomInput 
                    name={`${addressType}_address`}
                    label={`${addressType} address`}
                    type='text'
                    value={this.state.address}
                    handleChange={this.handleChange}
                    required
                />
                <CustomInput 
                    name={`${addressType}_city`}
                    label={`${addressType} city`}
                    type='text'
                    value={this.state.city}
                    handleChange={this.handleChange}
                    required
                />
                <CustomInput 
                    name={`${addressType}_county`}
                    label={`${addressType} county`}
                    type='text'
                    value={this.state.county}
                    handleChange={this.handleChange}
                    required
                />
                <CustomInput 
                    name={`${addressType}_eircode`}
                    label={`${addressType} eircode`}
                    type='text'
                    value={this.state.eircode}
                    handleChange={this.handleChange}
                />
            </Fragment>
        );
    }
}

export default AddressFieldsContainer;