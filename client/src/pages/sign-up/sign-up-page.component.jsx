import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormBox from '../../components/form-box/form-box.component';

import './sign-up-page.styles.scss';

import 'react-toastify/dist/ReactToastify.css';

class SignUpPage extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            processing: false
        }
    }

    // try create user on firebase
    handleSubmit = async e => {
        e.preventDefault();

        await this.setState({ processing: true });

        const { name, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            toast.warning("Passwords don't match! Try again.", {
                position: toast.POSITION.TOP_CENTER
            });
            await this.setState({ processing: false });
            return;
        }

        try {
            // create user
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // create user doc on firestore
            await createUserProfileDocument(user, { name });

            // reset state
            this.setState({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
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
        const { name, email, password, confirmPassword } = this.state;
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
                        value={name}
                        required
                    />
                    <CustomInput 
                        label='email'
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        required
                    />
                    <CustomInput 
                        label='password'
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={password}
                        required
                    />
                    <CustomInput 
                        label='confirm password'
                        name='confirmPassword'
                        type='password'
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        required
                    />
                    <CustomButton type='submit' style={buttonStyle}>{this.state.processing ? 'Processing...' : 'Sign Up'}</CustomButton>
                    <p><Link to='/sign-in' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>Already have an account?</Link></p>
                </FormBox>
                <ToastContainer />
            </section>
        );
    }
};

export default SignUpPage;