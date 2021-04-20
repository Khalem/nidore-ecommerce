import React from 'react';

import './search.styles.scss';

const Search = () => {
    const html = document.querySelector('html');
    html.classList.add('hide-scroll-bar');

    return (
        <div className='search-container'>
            <h1 className='search-title'>Search</h1>
        </div>
    );
};

export default Search;