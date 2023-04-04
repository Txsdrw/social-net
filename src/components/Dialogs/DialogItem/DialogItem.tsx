import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css'

type DialogItemType = {
    name: string
    id: string
}

export const DialogItem: FC<DialogItemType> = (props) => {
    return (
        <li><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></li>
    )
}