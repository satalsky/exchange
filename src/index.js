import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Rules from "./components/Main/Rules/Rules";
import Main from "./components/Main/Main";
import Contacts from "./components/Main/Contacts/Contacts";
import FAQ from "./components/Main/FAQ/FAQ";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/" element={<Main />} />
                        <Route path="/rules" element={<Rules />}/>
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/faq" element={<FAQ />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
