import React, {FC} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts: FC = () => {
    return (
        <div>my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message={'Hello, how are you?'}/>
                <Post message={"My name is Anton"}/>
            </div>


        </div>
    )
}