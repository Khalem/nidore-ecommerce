import React, { useEffect, useState } from 'react';

import { Link, useLocation, withRouter } from 'react-router-dom';

import { hideNavOnScroll, checkPathname } from '../../navUtils';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';

import './nav.styles.scss';

const Nav = () => {
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
                <li className='nav-item'><SearchIcon /></li>
                <li className='nav-item'><ShoppingBag /></li>
                <li className='nav-item'><Link to='/sign-in'><UserIcon /></Link></li>
            </ul>
        </nav>
    );
}

export default withRouter(Nav);