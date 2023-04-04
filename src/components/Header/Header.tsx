import React, {FC} from 'react';
import logo from '../../assets/logo192.png';
import s from './Header.module.css'

export const Header: FC = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt={'react-logo'}/>
        </header>
    )
}