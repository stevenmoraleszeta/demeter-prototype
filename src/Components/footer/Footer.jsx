import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import './Footer.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="app-footer">
            <p>{t('footer.copyright')}</p>
        </footer>
    )
}

export default Footer;