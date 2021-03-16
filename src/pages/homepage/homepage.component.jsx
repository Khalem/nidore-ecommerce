import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import ImageBox from '../../components/image-box/image-box.component';

import backgroundSvg from '../../assets/topography.svg';
import MensThumbnail from '../../assets/mens-thumbnail.jpg';
import WomensThumbnail from '../../assets/womens-thumbnail.jpg';

import './homepage.styles.scss';

const HomePage = ({ history, match }) => (
    <div className='homepage' style={{ backgroundImage: `url(${backgroundSvg})` }}>
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
    </div>
);

export default withRouter(HomePage);