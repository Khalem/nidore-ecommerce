import React, { Fragment } from 'react';

import MensThumbnail from '../../assets/mens-thumbnail.jpg';
import WomensThumbnail from '../../assets/womens-thumbnail.jpg';

import './homepage.styles.scss';

const HomePage = () => (
    <Fragment>
        <header className='homepage-header'>
            <h1>Nidore</h1>
            <h2>The world's best selling fragrances.<br />All in one place.</h2>
        </header>
        <main className='homepage-content'>
            <div className='catalogue-option' style={{ backgroundImage: `url(${WomensThumbnail})` }}>
                <h2>Womens</h2>
            </div>
            <div className='catalogue-option' style={{ backgroundImage: `url(${MensThumbnail})` }}>
                <h2>Mens</h2>
            </div>
        </main>
    </Fragment>
);

export default HomePage;