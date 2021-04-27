import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { hideNavOnScroll, checkPathname } from '../../navUtils';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectBagItemsCount } from '../../redux/bag/bag.selectors';
import { changeSearchStatus } from '../../redux/search/search.actions';
import { signOutStart } from '../../redux/user/user.actions';

import './nav.styles.scss';

const Nav = ({ currentUser, bagItemsCount, changeSearchStatus, signOutStart }) => {
    const { pathname } = useLocation();
    const [showCatalogue, setShowCatalogue] = useState(false);
    const linkStyle = {
        textDecoration: 'none',
        color: 'var(--dark-color)'
    };

    // Use function in navUtils to check pathname and change state
    useEffect(() => {
        setShowCatalogue(checkPathname(pathname));
    }, [pathname]);

    // Use function in navUtils to hide nav on scroll
    useEffect(() => {
        hideNavOnScroll(document.getElementsByClassName('nav')[0]);
    }, []);

    return (
        <nav className='nav'>
            {
                showCatalogue ?
                <ul className='catalogue-list'>
                    <li className='catalogue-item'><Link to='/mens' style={linkStyle}>Mens</Link></li>
                    <li className='catalogue-item'><Link to='/womens' style={linkStyle}>Womens</Link></li>
                </ul>
                : null
            }
            <h1 className='nav-title'><Link to='/' style={linkStyle}>Nidore</Link></h1>
            <ul className='nav-items'>
                <li className='nav-item' onClick={() => changeSearchStatus()}><SearchIcon /></li>
                <li className='nav-item'><Link to='/shopping-bag'><ShoppingBag /></Link>{bagItemsCount ? <span className='item-count' /> : null}</li>
                {
                    currentUser ?
                    <li className='nav-item' onClick={signOutStart}>Sign Out</li>
                    :
                    <li className='nav-item'><Link to='/sign-in'><UserIcon /></Link></li>
                }
            </ul>
        </nav>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    bagItemsCount: selectBagItemsCount
});

const mapDispatchToProps = dispatch => ({
    changeSearchStatus: () => dispatch(changeSearchStatus()),
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);