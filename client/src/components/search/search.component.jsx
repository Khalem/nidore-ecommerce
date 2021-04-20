import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectAllItems } from '../../redux/shop/shop.selectors';
import { selectSearchStatus } from '../../redux/search/search.selectors';
import { changeSearchStatus } from '../../redux/search/search.actions';

import { ReactComponent as Close } from '../../assets/close.svg';

import './search.styles.scss';

const Search = ({ hidden, changeSearchStatus, shopItems, history, match }) => {
    const [results, setResults] = useState([]);
    const [value, setValue] = useState('');

    /* 
        When user closes search, state still stores,
        so I had to write something that would reset it each time
        the user closed search
    */
    useEffect(() => {
        if (!hidden) {
            setResults([]);
            setValue('');
        }
    }, [hidden]);

    const handleChange = event => {
        const { value } = event.target;
        setValue(value);

        if (!value) {
            setResults([]);
            return;
        }

        const searchResults = shopItems.filter(item => checkForMatch(item.name, value ) || checkForMatch(item.brand, value));

        setResults([...searchResults]);
    };

    const handleClick = result => {
        history.push(`${match.url}${result.category}/${result.id}`);
        changeSearchStatus();
    };

    const checkForMatch = (item, value) => {
        return item.toLowerCase().includes(value.toLowerCase());
    };

    const html = document.querySelector('html');
    html.classList.add('hide-scroll-bar');

    // if hidden, exit
    if (hidden) {
        return null;
    }

    return (
        <div className='search-container'>
            <input type='text' name='search' placeholder='Search..' className='search-input' autoComplete='off' onChange={handleChange}/>
            <Close onClick={() => changeSearchStatus()} className='close-search' />
            <div className='search-results'>
                { 
                    results.length ?
                    results.map((result, index) => (
                        <h1 key={index} className='result' onClick={() => handleClick(result)}>{result.name}</h1>
                    )) 
                    : value ?
                    <h1 className='no-results'>We're sorry, we couldn't find what you're looking for.</h1>
                    : null
                }
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    hidden: selectSearchStatus,
    shopItems: selectAllItems
});

const mapDispatchToProps = dispatch => ({
    changeSearchStatus: () => dispatch(changeSearchStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));