import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import '../../App.css';
import './LandingPage.css';

function LandingPage() {
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalImage, setModalImage] = useState('');

    const openModal = (content, imageURL) => {
        setModalContent(content);
        setModalImage(imageURL);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalContent('');
        setModalImage('');
    };

    return (
        <>
            <header className="page-header">
                <h1 className='header-title'>{t('landingPage.title')}</h1>
                <p className="header-pharse">{t('landingPage.subtitle')}</p>
                <a href="#demeter-info" className="header-button">{t('landingPage.discoverMore')}</a>
            </header>

            <section id="demeter-info" className="demeter-info">
                <h2 className="demeter-info-description">{t('landingPage.description')}</h2>
            </section>

            <section className="project-context-section">
                <div className="context-card">
                    <div className="context-icon">📌</div>
                    <div className="context-content">
                        <h3 className="context-title">{t('landingPage.projectContext.title')}</h3>
                        <p className="context-text" dangerouslySetInnerHTML={{ __html: t('landingPage.projectContext.text') }}></p>
                    </div>
                </div>
                <div className="context-card philosophy-card">
                    <div className="context-icon">💡</div>
                    <div className="context-content">
                        <h3 className="context-title">{t('landingPage.projectPhilosophy.title')}</h3>
                        <p className="context-text">{t('landingPage.projectPhilosophy.text')}</p>
                    </div>
                </div>
            </section>

            <section className="devices-container">
                <div className="device demeter-sensor" onClick={() => openModal(t('landingPage.devices.sensor.modal'), require('../../Assets/Img/dispositivoSensor.png'))}>
                    <h2>{t('landingPage.devices.sensor.title')}</h2>
                    <p>{t('landingPage.devices.sensor.description')}</p>
                </div>
                <div className="device demeter-system" onClick={() => openModal(t('landingPage.devices.system.modal'), require('../../Assets/Img/demeterMap.png'))}>
                    <h2>{t('landingPage.devices.system.title')}</h2>
                    <p>{t('landingPage.devices.system.description')}</p>
                </div>
                <div className="device demeter-ai" onClick={() => openModal(t('landingPage.devices.ai.modal'), require('../../Assets/Img/demeterAI.png'))}>
                    <h2>{t('landingPage.devices.ai.title')}</h2>
                    <p>{t('landingPage.devices.ai.description')}</p>
                </div>
            </section>

            <section className="demo-access">
                <h1>{t('landingPage.demo.title')}</h1>
                <p className="demo-access-description">{t('landingPage.demo.description')}</p>
                <a href="/demeter" className="demo-button" target="_blank" rel="noopener noreferrer">{t('landingPage.demo.button')}</a>
            </section>

            <section className="video-demo">
                <h2>{t('landingPage.video.title')}</h2>
                <div className="video-container">
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/fqPYxWVQjyc"
                        title="Video Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={t('landingPage.modal.deviceDescription')}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <img className="modal-image" src={modalImage} alt={t('landingPage.modal.deviceDescription')} />
                <p>{modalContent}</p>
                <button onClick={closeModal}>{t('landingPage.modal.close')}</button>
            </Modal>
        </>
    );
}

export default LandingPage;
