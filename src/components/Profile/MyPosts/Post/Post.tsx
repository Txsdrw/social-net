import React, {FC} from "react";
import s from './Post.module.css'
import avatar from '../../../../assets/avatar.png'

type PostType = {
    message: string
    id: string
    likesCount: number
}

export const Post: FC<PostType> = (props) => {
    return (
        <div className={s.post}>
            <img src={avatar} />
            <div>{props.message}</div>
            <div>Likes: {props.likesCount}</div>
        </div>
    )
}