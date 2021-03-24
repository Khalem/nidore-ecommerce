import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ handleClick, children, style }) => (
    <button className='custom-button' style={style} onClick={handleClick}>{children}</button>
);

export default CustomButton;