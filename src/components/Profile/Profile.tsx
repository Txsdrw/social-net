import React, {FC} from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'
import {PostsType} from '../../App';

type MyPostsType = {
    posts: PostsType[]
}


export const Profile: FC<MyPostsType> = (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </main>
    )
}