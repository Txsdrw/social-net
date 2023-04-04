import {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './DialogMessage/Message';


export const Dialogs: FC = () => {
    return (
        <div className={s.dialog}>
            <div className={s.userList}>
                DIALOGS
                <ul>
                    <DialogItem id={'1'} name={'Bob'}/>
                    <DialogItem id={'2'} name={'Julia'}/>
                    <DialogItem id={'3'} name={'Anton'}/>
                    <DialogItem id={'4'} name={'John'}/>
                    <DialogItem id={'5'} name={'Elena'}/>
                </ul>
            </div>
            <div className={s.messages}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        </div>
    )
}