import React, {FC} from "react";
import mountain from "../../assets/wide-mount.jpg";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile: FC = () => {
    return (
        <main >
            <div>
                <img src={mountain}/>
            </div>
            <div>ava + discrip</div>
            <MyPosts />
        </main>
    )
}