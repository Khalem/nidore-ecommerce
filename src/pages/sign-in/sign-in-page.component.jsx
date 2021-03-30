import React from 'react';

import CustomInput from '../../components/custom-input/custom-input.component';

import './sign-in-page.styles.scss';

class SignInPage extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <section className='sign-in'>
                <div className='sign-in-box'>
                    <h1 className='sign-in-title'>Sign In</h1>
                    <CustomInput 
                        label='email'
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <CustomInput 
                        label='password'
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <button type='submit'>Sign In</button>
                    <p>Don't have an account?</p>
                </div>
            </section>
        );
    }
};

export default SignInPage;