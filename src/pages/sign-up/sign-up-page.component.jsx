import React from 'react';
import { Link } from 'react-router-dom';

import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormBox from '../../components/form-box/form-box.component';

import './sign-up-page.styles.scss';

class SignUpPage extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
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
            <section className='sign-up'>
                <FormBox handleSubmit={this.handleSubmit}>
                    <h1 className='sign-in-title'>Sign Up</h1>
                    <CustomInput 
                        label='name'
                        name='name'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.name}
                        required
                    />
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
                    <CustomInput 
                        label='confirm password'
                        name='confirmPassword'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.confirmPassword}
                        required
                    />
                    <CustomButton type='submit' style={buttonStyle}>Sign Up</CustomButton>
                    <p><Link to='/sign-in' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>Already have an account?</Link></p>
                </FormBox>
            </section>
        );
    }
};

export default SignUpPage;