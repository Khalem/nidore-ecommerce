import React from 'react';
import { Link } from 'react-router-dom';

import './404-page.styles.scss';

const PageNotFound = () => (
    <section className='page-not-found-container'>
        <h1 className='page-not-found-title'>404</h1>
        <h2 className='page-not-found-secondary-title'>Sorry, we can't find what you're looking for.</h2>
        <Link to='/'><button className='go-back'>Bring Me Home</button></Link>
    </section>
);

export default PageNotFound;