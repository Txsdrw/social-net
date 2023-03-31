import React, {FC} from "react";
import s from './Navbar.module.css'


export const Navbar: FC = () => {
    return (
        <nav className={s.nav}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
        </nav>
    )
}