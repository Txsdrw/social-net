import React, {FC} from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar: FC = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to={'/'} className={({isActive}) => isActive ? s.active : ''}>Profile</NavLink></div>
            <div><NavLink to={'/dialogs'} className={({isActive}) => isActive ? s.active : ''}>Messages</NavLink></div>
            <div><NavLink to={'/news'} className={({isActive}) => isActive ? s.active : ''}>News</NavLink></div>
            <div><NavLink to={'/music'} className={({isActive}) => isActive ? s.active : ''}>Music</NavLink></div>
        </nav>
    )
}