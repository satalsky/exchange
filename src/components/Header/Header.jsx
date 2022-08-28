import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container headerContent">
                <div className="headerLogo">
                    <Link to="/"><img src="../img/logo.svg" alt="Logotype" /></Link>
                </div>
                <div className="headerNav">
                    <ul>
                        <li><Link to="/faq">Вопросы и ответы</Link></li>
                        <li><Link to="/rules">Правила</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                    <div className="headerContact">
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                            <img src="../img/telegram.png" alt="Telegram" />
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
