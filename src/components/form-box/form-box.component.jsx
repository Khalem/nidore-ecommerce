import React from 'react';

import './form-box.styles.scss';

const FormBox = ({ handleSubmit, children }) => (
    <form className='form-box' onSubmit={handleSubmit}>
        {children}
    </form>
);

export default FormBox;