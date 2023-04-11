import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../App';

type MyPostsType = {
    posts: PostsType[]
}

export const MyPosts: FC<MyPostsType> = (props) => {

    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(el=> <Post key={el.id} message={el.message} id={el.id} likesCount={el.likesCount} />)}
            </div>
        </div>
    )
}