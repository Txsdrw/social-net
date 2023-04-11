import {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './DialogMessage/Message';
import {MessagesType, UsersData} from '../../App';

type DialogsType = {
    messages: MessagesType[]
    users: UsersData[]
}

export const Dialogs: FC<DialogsType> = (props) => {

    return (
        <div className={s.dialog}>
            <div className={s.userList}>
                DIALOGS
                <ul>
                    {props.users.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)}
                </ul>
            </div>
            <div className={s.messages}>
                {props.messages.map(el => <Message key={el.id} message={el.message} id={el.id} />)}
            </div>
        </div>
    )
}