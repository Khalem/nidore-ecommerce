import React from 'react';
import { withRouter } from 'react-router-dom';

import ImageBox from '../../components/image-box/image-box.component';

import MensThumbnail from '../../assets/mens-thumbnail.jpg';
import WomensThumbnail from '../../assets/womens-thumbnail.jpg';

import './homepage.styles.scss';

const HomePage = ({ history, match }) => (
    <section className='homepage'>
        <div className='homepage-header'>
            <h1>Nidore</h1>
            <h2>The world's best selling fragrances.<br />All in one place.</h2>
        </div>
        <div className='homepage-content'>
            <ImageBox backgroundImage={WomensThumbnail} handleClick={() => history.push(`${match.url}womens`)}>
                Womens
            </ImageBox>
            <ImageBox backgroundImage={MensThumbnail} handleClick={() => history.push(`${match.url}mens`)}>
                Mens
            </ImageBox>
        </div>
    </section>
);

export default withRouter(HomePage);