import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import './Navbar.css';

function Navbar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li>
                    <Link to="/">{t('navbar.demeter')}</Link>
                </li>
                <li>
                    <Link to="/demeter">{t('navbar.prototype')}</Link>
                </li>
                <li>
                    <Link to="/canvas">{t('navbar.canvas')}</Link>
                </li>
                <li>
                    <Link to="/profile">{t('navbar.profile')}</Link>
                </li>
            </ul>
            <div className="language-switcher">
                <button 
                    className={`lang-button ${i18n.language === 'en' ? 'active' : ''}`}
                    onClick={() => changeLanguage('en')}
                >
                    EN
                </button>
                <button 
                    className={`lang-button ${i18n.language === 'es' ? 'active' : ''}`}
                    onClick={() => changeLanguage('es')}
                >
                    ES
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
