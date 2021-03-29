import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-in-page.styles.scss';

const SignInPage = () => (
    <section className='sign-in'>
        <div className='sign-in-box'>
            <h1 className='sign-in-title'>Sign In</h1>
            <input type='email' placeholder='email' className='input' />
            <input type='password' placeholder='password' className='input' />
            <button type='submit'>Sign In</button>
            <p>Don't have an account?</p>
        </div>
    </section>
);

export default SignInPage;