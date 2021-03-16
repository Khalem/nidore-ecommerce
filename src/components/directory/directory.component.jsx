import React from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const Directory = ({ data }) => (
    <div className='directory-container'>
        <div className='directory'>
            {
                data.items.map((item, index) => (
                    <DirectoryItem item={item} index={index} />
                ))
            }
        </div>
    </div>
);

export default Directory;