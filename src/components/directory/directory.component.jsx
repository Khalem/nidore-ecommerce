import React from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const Directory = ({ data }) => {
    return (
        <div className='directory-container'>
            <div className='directory'>
                {
                    data.map((item, index) => (
                        <DirectoryItem item={item} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default Directory;