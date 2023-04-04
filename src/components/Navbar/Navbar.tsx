import React, {FC} from "react";
import s from './Navbar.module.css'
import { Link} from 'react-router-dom';

export const Navbar: FC = () => {
    return (
        <>
            <nav className={s.nav}>
                <div><Link to={'/'}>Profile</Link></div>
                <div><Link to={'dialog/'}>Messages</Link></div>
                <div><Link to={'news/'}>News</Link></div>
                <div><Link to={'music/'}>Music</Link></div>
            </nav>
 </>
    )
}