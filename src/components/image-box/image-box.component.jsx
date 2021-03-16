import React from 'react';

import './image-box.styles.scss';

const ImageBox = ({ backgroundImage, children, handleClick }) => (
    <div className='box-container' onClick={handleClick}>
        <h2>{children}</h2>
        <div className='image-container'>
        <div className='catalogue-option' style={{ backgroundImage: `url(${backgroundImage})` }} />
        </div>
    </div>
);

export default ImageBox;