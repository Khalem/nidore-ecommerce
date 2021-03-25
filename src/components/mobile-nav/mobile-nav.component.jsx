import React, { useEffect, useState, Fragment } from 'react';

import { Link, useLocation, withRouter } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

import './mobile-nav.styles.scss';

const MobileNav = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'var(--dark-color)'
    };

    const [menuActive, setMenuActive] = useState(false);

    // toggle menu
    useEffect(() => {
        const nav = document.getElementsByClassName('menu')[0];

        if (menuActive) {
            nav.classList.add('slide-menu-in');
        } else {
            nav.classList.remove('slide-menu-in');
        }
    },[menuActive]);

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
                    <h1 className='menu-title'><Link to='/' style={{ textDecoration: 'none', color: 'var(--background-color)' }}>Nidore</Link></h1>
                </div>
                <div className='menu-content'>
                    <ul className='nav-items'>
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