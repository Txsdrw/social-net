import React, {FC} from "react";
import mountain from "../../assets/wide-mount.jpg";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile: FC = () => {
    return (
        <main className={s.main}>
            <div>
                <img src={mountain}/>
            </div>
            <div>ava + discrip</div>
            <MyPosts />
        </main>
    )
}