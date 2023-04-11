import s from './Message.module.css';
import avatar from '../../../assets/avatar.png';
import {FC} from 'react';

type MessageType ={
    id: string
    message: string
}

export const Message: FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            <div className={s.user}>
                <div className={s.userAvatar}><img src={avatar} alt=""/></div>
                <div className={s.userName}>Me</div>
            </div>
            <p className={s.messageText}>{props.message}</p>
        </div>
    )
}
