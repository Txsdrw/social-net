import mountain from '../../../../assets/wide-mount.jpg';
import React from 'react';
import s from './ProfileInfo.module.css'
import avatar from '../../../../assets/avatar.png'

export const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <div>
                <img src={mountain}/>
            </div>
            <div>
                <div className={s.avatar}><img src={avatar}/></div>
                <div>
                    Биография
                </div>
            </div>
        </div>
    )
}