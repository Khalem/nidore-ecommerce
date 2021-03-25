import React, { useEffect, useState } from 'react';

import { Link, useLocation, withRouter } from 'react-router-dom';

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

    /*
        I need to hide the catalogue options when on homepage,
        as it's a bit unnecessary
    */
    useEffect(() => {
        if (pathname === '/') {
            setShowCatalogue(false);
        } else {
            setShowCatalogue(true);
        }
    }, [pathname]);

    // Function used to hide/show nav bar depending on the direction the user is scrolling
    useEffect(() => {
        let lastScroll = 0;
        const nav = document.getElementsByClassName('nav')[0];

        window.onscroll = () => {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0 && lastScroll <= currentScroll) {
                lastScroll = currentScroll;
                nav.classList.add('removeNav');
            } else {
                lastScroll = currentScroll;
                nav.classList.remove('removeNav');
            }
        };
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
                <li className='nav-item'><UserIcon /></li>
            </ul>
        </nav>
    );
}

export default withRouter(Nav);