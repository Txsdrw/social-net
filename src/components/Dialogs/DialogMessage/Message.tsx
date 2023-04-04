import s from './Message.module.css';
import avatar from '../../../assets/avatar.png';
import {FC} from 'react';

export const Message: FC = () => {
    return (
        <div className={s.message}>
            <div className={s.user}>
                <div className={s.userAvatar}><img src={avatar} alt=""/></div>
                <div className={s.userName}>Me</div>
            </div>
            <p className={s.messageText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    )
}
