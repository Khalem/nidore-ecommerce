import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ handleClick, children }) => (
    <button className='custom-button' onClick={handleClick}>{children}</button>
);

export default CustomButton;