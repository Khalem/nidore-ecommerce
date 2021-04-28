import React from 'react';

import './loading.styles.scss';

const Loading = ({ loaded }) => {
    const loadingLetters = 'Loading..'.split("");

    return (
        <div className='loading-container' style={loaded ? {display: 'none'} : null}>
            <div className='loading'>
                {
                    loadingLetters.map((letter, index) => (
                        <div className='loading-letter' key={`${letter}-${index}`}>{letter}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Loading;