import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import '../../App.css';
import './DemeterMenu.css';
import { FaMap, FaTasks, FaBoxes, FaUser, FaChalkboardTeacher, FaLeaf, FaBrain, FaCircle, FaBook } from 'react-icons/fa';

// Configura el elemento raíz para el modal
Modal.setAppElement('#root');

function DemeterMenu() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleButtonClick = (path, messageKey) => {
        if (path === 'mapa') {
            navigate(`/demeter/map`);
        } else if (path === 'ai') {
            navigate(`/demeter/ai`);
        } else if (path === 'tutorial') {
            window.open('https://youtu.be/QOyhXv3qfaI?si=eUaVVCOc5vqhWb7d', '_blank');
        } else {
            setModalMessage(t(messageKey));
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    return (
        <>
            <div className="demeter-menu">
                <div className="menu-button" onClick={() => handleButtonClick('mapa')}>
                    <FaMap className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.farmMap')}</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('ai')}>
                    <FaBrain className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.artificialIntelligence')}</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('tutorial')}>
                    <FaBook className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.tutorial')}</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('tareas', 'demeterMenu.modal.tasks')}>
                    <FaTasks className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.tasks')}</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('inventario', 'demeterMenu.modal.inventory')}>
                    <FaBoxes className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.inventory')}</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('personal', 'demeterMenu.modal.personnel')}>
                    <FaUser className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.personnel')}</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('capacitaciones', 'demeterMenu.modal.training')}>
                    <FaChalkboardTeacher className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.training')}</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('recursos-ecologicos', 'demeterMenu.modal.ecologicalResources')}>
                    <FaLeaf className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.ecologicalResources')}</div>
                </div>
                <div className="menu-button" onClick={() => handleButtonClick('', 'demeterMenu.modal.others')}>
                    <FaCircle className="menu-icon" />
                    <div className="menu-text">{t('demeterMenu.others')}</div>
                </div>

                <Modal
                    isOpen={showModal}
                    onRequestClose={closeModal}
                    contentLabel={t('demeterMenu.modal.title')}
                    className="modal"
                    overlayClassName="modal-overlay"
                >
                    <h2>{t('demeterMenu.modal.title')}</h2>
                    <p>{modalMessage}</p>
                    <button onClick={closeModal}>{t('demeterMenu.modal.close')}</button>
                </Modal>
            </div>
        </>
    );
}

export default DemeterMenu;
