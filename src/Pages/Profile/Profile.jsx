import React from 'react';
import { useTranslation } from 'react-i18next';
import './Profile.css';
import '../../App.css';
import profileImage from '../../Assets/Img/StevenMorales.png';

function Profile() {
    const { t } = useTranslation();

    return (
        <div className="profile-container">
            <div className="profile-image">
                <img src={profileImage} alt={t('profile.name')} />
            </div>
            <div className="profile-info">
                <h1>{t('profile.name')}</h1>
                <b className='roles'>{t('profile.roles')}</b>
                <p>
                    {t('profile.description')}
                </p>
                <p className='quote'>
                    {t('profile.quote')}
                </p>
            </div>
        </div>
    );
}

export default Profile;
