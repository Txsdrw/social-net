import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {state} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <BrowserRouter>
    <App state={state}/>
    </BrowserRouter>)
