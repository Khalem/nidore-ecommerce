import React from 'react';
import { Link } from 'react-router-dom';

import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormBox from '../../components/form-box/form-box.component';

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

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' });
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'var(--background-color)',
            color: 'var(--dark-color)',
            boxShadow: 'none',
            margin: '10px 0 20px 0'
        };

        return (
            <section className='sign-in'>
                <FormBox handleSubmit={this.handleSubmit}>
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
                    <CustomButton type='submit' style={buttonStyle}>Sign In</CustomButton>
                    <p><Link to='/sign-up' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>Don't have an account?</Link></p>
                </FormBox>
            </section>
        );
    }
};

export default SignInPage;