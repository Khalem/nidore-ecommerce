import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';

import './nav.styles.scss';

const Nav = () => {
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
            <h1 className='nav-title'><Link to='/' style={{ textDecoration: 'none', color: 'var(--dark-color)' }}>Nidore</Link></h1>
            <ul className='nav-items'>
                <li className='nav-item'><SearchIcon /></li>
                <li className='nav-item'><ShoppingBag /></li>
                <li className='nav-item'><UserIcon /></li>
            </ul>
        </nav>
    );
}

export default Nav;