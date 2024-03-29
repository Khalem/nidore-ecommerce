import React, { useEffect, useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react'
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


import './mobile-nav.styles.scss';

const MobileNav = ({ currentUser, bagItemsCount, changeSearchStatus, signOutStart }) => {
    const { pathname } = useLocation();
    const [showCatalogue, setShowCatalogue] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const linkStyle = {
        textDecoration: 'none',
        color: 'var(--dark-color)'
    };

    // toggle menu and apply styles for UX purposes
    useEffect(() => {
        // get elements required for styling (doesn't return it in the order I queried, so I logged to console to find out the order)
        const [html, nav, menuIcon, menu, overlay] = document.querySelectorAll(
            '.menu,.mobile-nav,html,.nav-overlay,.menu-icon-container'
        );
        const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

        if (menuActive) {
            menu.classList.add('slide-menu-in');
            nav.classList.add('hide-nav-bg');
            html.classList.add('hide-scroll-bar');
            overlay.classList.add('show-nav-overlay');
            html.style.paddingRight = `${scrollBarWidth}px`;
            menuIcon.style.right = `${scrollBarWidth + 75}px`;
        } else {
            menu.classList.remove('slide-menu-in');
            nav.classList.remove('hide-nav-bg');
            html.classList.remove('hide-scroll-bar');
            overlay.classList.remove('show-nav-overlay');
            html.style.paddingRight = `0`;
            menuIcon.style.right = '75px';
        }
    },[menuActive]);

    // Use function in navUtils to check pathname and change state
    useEffect(() => {
        setShowCatalogue(checkPathname(pathname));
        setMenuActive(false);
    }, [pathname]);

    // Use function in navUtils to hide nav on scroll
    useEffect(() => {
        // detect if user has clicked outside the menu
        document.addEventListener('click', e => {
            const target = e.target;

            if (target === document.getElementsByClassName('nav-overlay')[0]) {
                setMenuActive(false);
            }
        });

        // hide nav on scroll
        hideNavOnScroll(document.getElementsByClassName('mobile-nav')[0]);
    }, []);

    return (
        <Fragment>
            <nav className='mobile-nav'>
                <h1 className='nav-title'><Link to='/' style={linkStyle}>Nidore</Link></h1>
                <div className='menu-icon-container'>
                    <Hamburger 
                        toggled={menuActive} 
                        toggle={setMenuActive} 
                        size={28} 
                        label="Show menu"
                        color={menuActive ? 'var(--background-color)' : 'var(--dark-color)'}
                    />
                </div>
            </nav>
            {/* Side Menu */}
            <div className='menu'>
                <div className='menu-header'>
                    <h1 className='menu-title' onClick={() => setMenuActive(!menuActive)}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>Nidore</Link>
                    </h1>
                </div>
                <div className='menu-content'>
                    <ul className='nav-items'>
                        {
                            showCatalogue ?
                            <Fragment>
                                <li className='nav-item catalogue-item' onClick={() => setMenuActive(!menuActive)}>
                                    <Link to='/mens' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>
                                        Mens
                                    </Link>
                                </li>
                                <li className='nav-item catalogue-item' onClick={() => setMenuActive(!menuActive)}>
                                    <Link to='/womens' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>
                                        Womens
                                    </Link>
                                </li>
                            </Fragment>
                            : null
                        }
                        <li className='nav-item' onClick={() => changeSearchStatus()}><SearchIcon /> Search</li>
                        <li className='nav-item'>
                            <Link to='/shopping-bag' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>
                                <ShoppingBag className={bagItemsCount ? 'item-count' : ''}/> Shopping Bag
                            </Link>
                        </li>
                        {
                            currentUser ?
                            <li className='nav-item sign-out' onClick={signOutStart}>Sign Out</li>
                            :
                            <li className='nav-item'><Link to='sign-in' style={{ textDecoration: 'none', color: 'var(--background-color)' }}><UserIcon /> Profile</Link></li>
                        }
                    </ul>
                </div>
            </div>
            {/* Overlay */}
            <div className='nav-overlay' />
        </Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    bagItemsCount: selectBagItemsCount
});

const mapDispatchToProps = dispatch => ({
    changeSearchStatus: () => dispatch(changeSearchStatus()),
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);