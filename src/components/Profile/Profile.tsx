import React, {FC} from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/PropfileInfo';
import s from './Profile.module.css'

export const Profile: FC = () => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPosts/>
        </main>
    )
}