import React, { useEffect, useState, Fragment } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { hideNavOnScroll, checkPathname } from '../../navUtils';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

import './mobile-nav.styles.scss';

const MobileNav = () => {
    const { pathname } = useLocation();
    const [showCatalogue, setShowCatalogue] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const linkStyle = {
        textDecoration: 'none',
        color: 'var(--dark-color)'
    };

    // toggle menu
    useEffect(() => {
        const nav = document.getElementsByClassName('menu')[0];

        if (menuActive) {
            nav.classList.add('slide-menu-in');
        } else {
            nav.classList.remove('slide-menu-in');
        }
    },[menuActive]);

    // Use function in navUtils to check pathname and change state
    useEffect(() => {
        setShowCatalogue(checkPathname(pathname));
    }, [pathname]);

    // Use function in navUtils to hide nav on scroll
    useEffect(() => {
        hideNavOnScroll(document.getElementsByClassName('nav')[0]);
    }, []);

    return (
        <Fragment>
            <nav className='mobile-nav'>
                <h1 className='nav-title'><Link to='/' style={linkStyle}>Nidore</Link></h1>
                <div className='menu-icon-container' onClick={() => setMenuActive(!menuActive)}>
                    <MenuIcon />
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
                        <li className='nav-item'><SearchIcon /> Search</li>
                        <li className='nav-item'><ShoppingBag /> Shopping Bag</li>
                        <li className='nav-item'><UserIcon /> Profile</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
};

export default MobileNav;