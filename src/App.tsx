import React from 'react';
import s from './App.module.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className={s.container}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Routes>
                        <Route path="/" element={<Profile/>}/>
                        <Route path="/dialogs/*" element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
