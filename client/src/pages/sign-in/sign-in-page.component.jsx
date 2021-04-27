import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormBox from '../../components/form-box/form-box.component';

import { signInStart } from '../../redux/user/user.actions';
import { selectUserError } from '../../redux/user/user.selectors';

import './sign-in-page.styles.scss';
import 'react-toastify/dist/ReactToastify.css';

const SignInPage = ({ signInStart, signInError }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const [processing, setProcessing] = useState(false);

    const { email, password } = userCredentials;

    useEffect(() => {
        if (!signInError) return;

        toast.error(`${signInError.message}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }, [signInError]);

    // log in to firebase auth
    const handleSubmit = async e => {
        e.preventDefault();
        setProcessing(true);

        signInStart(email, password);

        setProcessing(false);
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }

    const buttonStyle = {
        backgroundColor: 'var(--background-color)',
        color: 'var(--dark-color)',
        boxShadow: 'none',
        margin: '10px 0 20px 0'
    };

    return (
        <section className='sign-in'>
            <FormBox handleSubmit={handleSubmit}>
                <h1 className='sign-in-title'>Sign In</h1>
                <CustomInput 
                    label='email'
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    required
                />
                <CustomInput 
                    label='password'
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    value={password}
                    required
                />
                <CustomButton type='submit' style={buttonStyle}>{processing ? 'Processing...' : 'Sign In'}</CustomButton>
                <p><Link to='/sign-up' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>Don't have an account?</Link></p>
            </FormBox>
            <ToastContainer />
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    signInError: selectUserError
});

const mapDispatchToProps = dispatch => ({
    signInStart: (email, password) => dispatch(signInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);