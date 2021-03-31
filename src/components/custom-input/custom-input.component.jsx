import React, { useEffect } from 'react';

import './custom-input.styles.scss';

const CustomInput = ({ handleChange, label, name, value, ...otherProps  }) => {
    // if user has input anything into field, make label active
    useEffect(() => {
        const inputLabel = document.getElementById(label);

        if (!value) {
            inputLabel.classList.add('input-label');
            inputLabel.classList.remove('active-label');

        } else {
            inputLabel.classList.add('active-label');
            inputLabel.classList.remove('input-label');
        }
    }, [value]);

    return (
        <div className='input-container'>
            <input 
                className='input' 
                name={name} 
                onChange={handleChange}
                value={value}
                {...otherProps} 
            />
            <label htmlFor={name} className='input-label' id={label}>{label}</label>
        </div>
    );
};

export default CustomInput;