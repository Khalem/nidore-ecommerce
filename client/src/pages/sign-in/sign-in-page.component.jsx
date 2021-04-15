import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormBox from '../../components/form-box/form-box.component';

import './sign-in-page.styles.scss';
import 'react-toastify/dist/ReactToastify.css';

class SignInPage extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            processing: false
        }
    }

    // log in to firebase auth
    handleSubmit = async e => {
        e.preventDefault();

        await this.setState({ processing: true });

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            toast.error(`${error}`, {
                position: toast.POSITION.TOP_CENTER
            });
        }

        await this.setState({ processing: false });
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
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
                    <CustomButton type='submit' style={buttonStyle}>{this.state.processing ? 'Processing...' : 'Sign In'}</CustomButton>
                    <p><Link to='/sign-up' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>Don't have an account?</Link></p>
                </FormBox>
                <ToastContainer />
            </section>
        );
    }
};

export default SignInPage;