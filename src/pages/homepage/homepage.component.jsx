import React, { Fragment } from 'react';

import ImageBox from '../../components/image-box/image-box.component';

import backgroundSvg from '../../assets/topography.svg';
import MensThumbnail from '../../assets/mens-thumbnail.jpg';
import WomensThumbnail from '../../assets/womens-thumbnail.jpg';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage' style={{ backgroundImage: `url(${backgroundSvg})` }}>
        <div className='homepage-header'>
            <h1>Nidore</h1>
            <h2>The world's best selling fragrances.<br />All in one place.</h2>
        </div>
        <div className='homepage-content'>
            <ImageBox backgroundImage={WomensThumbnail}>
                Womens
            </ImageBox>
            <ImageBox backgroundImage={MensThumbnail}>
                Mens
            </ImageBox>
        </div>
    </div>
);

export default HomePage;