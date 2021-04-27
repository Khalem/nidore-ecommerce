import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormBox from '../../components/form-box/form-box.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up-page.styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import { selectUserError } from '../../redux/user/user.selectors';

const SignUpPage = ({ signUpStart, signUpError }) => {
    useEffect(() => {
        if (!signUpError) return;

        toast.error(`${signUpError.message}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }, [signUpError]);

    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [processing, setProcessing] = useState(false);

    const { name, email, password, confirmPassword } = userCredentials;

    // try create user on firebase
    const handleSubmit = async e => {
        e.preventDefault();
        setProcessing(true);

        if (password !== confirmPassword) {
            toast.warning("Passwords don't match! Try again.", {
                position: toast.POSITION.TOP_CENTER
            });
            setProcessing(false);
            return;
        }

        signUpStart({ name, email, password });

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
        <section className='sign-up'>
            <FormBox handleSubmit={handleSubmit}>
                <h1 className='sign-in-title'>Sign Up</h1>
                <CustomInput 
                    label='name'
                    name='name'
                    type='text'
                    handleChange={handleChange}
                    value={name}
                    required
                />
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
                <CustomInput 
                    label='confirm password'
                    name='confirmPassword'
                    type='password'
                    handleChange={handleChange}
                    value={confirmPassword}
                    required
                />
                <CustomButton type='submit' style={buttonStyle}>{processing ? 'Processing...' : 'Sign Up'}</CustomButton>
                <p><Link to='/sign-in' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>Already have an account?</Link></p>
            </FormBox>
            <ToastContainer />
        </section>
    );
};

const mapStateToProps = createStructuredSelector({
    signUpError: selectUserError
});

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);