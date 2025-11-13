import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../App.css';
import './LandingPage.css';

function LandingPage() {
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
                <h1 className='header-title'>DEMÉTER</h1>
                <p className="header-pharse">Revoluciona la agricultura con tecnología avanzada</p>
                <a href="#demeter-info" className="header-button">Descubre Más</a>
            </header>

            <section id="demeter-info" className="demeter-info">
                <h2 className="demeter-info-description">Deméter es un sistema avanzado que transforma la agricultura mediante tecnología y automatización. Optimiza la producción alimentaria con dispositivos de recolección de datos y sistemas automatizados. Mi objetivo es proporcionar alimentos de alta calidad, promoviendo prácticas agrícolas sostenibles y apoyando a la comunidad agrícola. Deméter minimiza el uso de recursos naturales, reduce la huella de carbono y protege la biodiversidad, mejorando la eficiencia y evitando la contaminación. Empoderamos a los agricultores locales con acceso a tecnologías avanzadas y datos precisos, promoviendo la equidad y el desarrollo económico. Con Deméter, la agricultura del futuro es verde, justa y próspera.</h2>
            </section>

            <section className="project-context-section">
                <div className="context-card">
                    <div className="context-icon">📌</div>
                    <div className="context-content">
                        <h3 className="context-title">Project Context</h3>
                        <p className="context-text">This project was presented in 2024 as a prototype at a <strong>Nestlé innovation contest hackathon</strong>, demonstrating the potential of technology-driven solutions for sustainable agriculture.</p>
                    </div>
                </div>
                <div className="context-card philosophy-card">
                    <div className="context-icon">💡</div>
                    <div className="context-content">
                        <h3 className="context-title">Project Philosophy</h3>
                        <p className="context-text">The essence of this project goes beyond demonstrating technical complexity. Rather, it represents one of many project ideas and prototype initiatives I have developed over the years. As a natural creative leader, I am ambitious, tenacious, organized, and passionate about acquiring and sharing knowledge. This project serves as a testament to my continuous pursuit of innovation and my commitment to transforming ideas into tangible solutions that can make a meaningful impact.</p>
                    </div>
                </div>
            </section>

            <section className="devices-container">
                <div className="device demeter-sensor" onClick={() => openModal('El dispositivo sensor móvil, es un bloque fácil de desplazar que permite recolectar datos precisos sobre humedad, temperatura, nutrientes, enfermedades y plagas. Estos datos ayudan a tomar decisiones informadas para mejorar la salud y productividad de los cultivos.', require('../../Assets/Img/dispositivoSensor.png'))}>
                    <h2>Dispositivo Sensor</h2>
                    <p>Recolección de datos (humedad, temperatura, nutrientes).</p>
                </div>
                <div className="device demeter-system" onClick={() => openModal('El Sistema de Administración proporciona una visualización completa y análisis de datos. Facilita el manejo de cultivos, inventario, educación, zonas, personal, tareas, y más, optimizando la eficiencia de la finca.', require('../../Assets/Img/demeterMap.png'))}>
                    <h2>Sistema de Administración</h2>
                    <p>Visualización y análisis de datos.</p>
                </div>
                <div className="device demeter-ai" onClick={() => openModal('La Inteligencia Artificial de Deméter optimiza la gestión de la finca analizando datos de cultivos, inventario, educación, y más. Mejora la toma de decisiones y la eficiencia operativa. Permite el más rápido aprendizaje y búsqueda de la información.', require('../../Assets/Img/demeterAI.png'))}>
                    <h2>Inteligencia Artificial</h2>
                    <p>Mejora la gestión de tu finca con IA que optimiza cultivos, inventario, educación, y más.</p>
                </div>
            </section>

            <section className="demo-access">
                <h1>Pruebe el Simulador del Sistema Deméter</h1>
                <p className="demo-access-description">El prototipo está diseñado para ilustrar cómo funcionaría el prototipo en una finca real, brindando una visión clara y práctica de su impacto y operación en un entorno agrícola auténtico.</p>
                <a href="/demeter" className="demo-button" target="_blank" rel="noopener noreferrer">Acceder al Prototipo</a>
            </section>

            <section className="video-demo">
                <h2>Mi Proyecto en Dos Minutos</h2>
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
                contentLabel="Descripción del Dispositivo"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <img className="modal-image" src={modalImage} alt="Descripción del Dispositivo" />
                <p>{modalContent}</p>
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </>
    );
}

export default LandingPage;
