import React, {FC} from 'react';
import s from './App.module.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export type MessagesType = {
    id: string
    message: string
}

export type UsersData = {
    id: string
    name: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type DataType = {
    profilePage: {
        posts: PostsType[]
    }
    messagesPage: {
        messages: MessagesType[]
        users: UsersData[]
    }

}

type StateType = {
    state: DataType
}

const App: FC<StateType> = ({state}) => {
    return (
            <div className={s.container}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Routes>
                        <Route path="/" element={<Profile posts={state.profilePage.posts}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs messages={state.messagesPage.messages} users={state.messagesPage.users}/>}/>
                    </Routes>
                </div>
            </div>
    );
}


export default App;
