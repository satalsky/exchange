import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import { Outlet } from "react-router-dom";
import AssetsService from "./components/Main/Form/axios";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    const assetsService = new AssetsService();

    useEffect(() => {
        assetsService.getAssets().then(result => {
            dispatch({type: "SET_ASSETS", payload: result})
        });
        assetsService.getCryptoAssets().then(result => {
            dispatch({type: "SET_CRYPTO", payload: result})
            dispatch({type: "SET_FROM", payload: result[0]})
        });
        assetsService.getNonCryptoAssets().then(result => {
            dispatch({type: "SET_FIAT", payload: result})
            dispatch({type: "SET_TO", payload: result[1]})
        })
    }, [])

    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
