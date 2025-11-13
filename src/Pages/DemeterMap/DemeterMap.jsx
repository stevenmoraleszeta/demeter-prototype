import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import './DemeterMap.css';
import fincaImagenArriba from '../../Assets/Img/fincaImagenArriba.png';
import Modal from 'react-modal';

function DemeterDemo() {
    const { t } = useTranslation();
    const [activeZone, setActiveZone] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [sensorModalIsOpen, setSensorModalIsOpen] = useState(false);
    const [sensorBatteryLevel] = useState('75%');

    const zones = [
        {
            name: 'Zona 1',
            gridArea: '1 / 1 / 2 / 2',
            data: {
                title: 'Zona 1',
                indicators: [
                    'Tipo de plantación: Tomates',
                    'Última fecha y hora de monitoreo: 01-08-2024 10:00 AM',
                    'Última fecha y hora de riego: 30-07-2024 04:00 PM',
                    'Temperatura encontrada: 20°C',
                    'Temperatura ideal: 18-22°C',
                    'Humedad: 65%',
                    'Humedad ideal: 60-70%',
                    'Nitrógeno: 90 ppm',
                    'Nitrógeno ideal: 100-150 ppm',
                    'Fósforo: 35 ppm',
                    'Fósforo ideal: 50-70 ppm',
                    'Potasio: 160 ppm',
                    'Potasio ideal: 200-250 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Ninguna'
                ],
                recommendations: [
                    'Aplicar fertilizante rico en fósforo para corregir la deficiencia.'
                ]
            }
        },
        {
            name: 'Zona 2',
            gridArea: '1 / 2 / 2 / 3',
            data: {
                title: 'Zona 2',
                indicators: [
                    'Tipo de plantación: Lechugas',
                    'Última fecha y hora de monitoreo: 01-08-2024 11:00 AM',
                    'Última fecha y hora de riego: 29-07-2024 06:00 PM',
                    'Temperatura encontrada: 22°C',
                    'Temperatura ideal: 18-22°C',
                    'Humedad: 70%',
                    'Humedad ideal: 60-70%',
                    'Nitrógeno: 70 ppm',
                    'Nitrógeno ideal: 50-80 ppm',
                    'Fósforo: 40 ppm',
                    'Fósforo ideal: 30-50 ppm',
                    'Potasio: 100 ppm',
                    'Potasio ideal: 100-150 ppm',
                    'Sospecha de enfermedad: Leve',
                    'Sospecha de plaga: Alta'
                ],
                recommendations: [
                    'Aplicar fertilizante rico en nitrógeno y potasio.',
                    'Implementar medidas de control de plagas.',
                    'Revisar plantas enfermas.'
                ]
            }
        },
        {
            name: 'Zona 3',
            gridArea: '1 / 3 / 2 / 4',
            data: {
                title: 'Zona 3',
                indicators: [
                    'Tipo de plantación: Pimientos',
                    'Última fecha y hora de monitoreo: 01-08-2024 12:00 PM',
                    'Última fecha y hora de riego: 28-07-2024 05:00 PM',
                    'Temperatura encontrada: 25°C',
                    'Temperatura ideal: 20-25°C',
                    'Humedad: 60%',
                    'Humedad ideal: 60-70%',
                    'Nitrógeno: 85 ppm',
                    'Nitrógeno ideal: 90-120 ppm',
                    'Fósforo: 35 ppm',
                    'Fósforo ideal: 40-60 ppm',
                    'Potasio: 180 ppm',
                    'Potasio ideal: 150-200 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Leve'
                ],
                recommendations: [
                    'Reducir la aplicación de fertilizantes ricos en potasio.',
                    'Vigilar y controlar la plaga.'
                ]
            }
        },
        {
            name: 'Zona 4',
            gridArea: '1 / 4 / 2 / 5',
            data: {
                title: 'Zona 4',
                indicators: [
                    'Tipo de plantación: Zanahorias',
                    'Última fecha y hora de monitoreo: 01-08-2024 01:00 PM',
                    'Última fecha y hora de riego: 27-07-2024 07:00 PM',
                    'Temperatura encontrada: 27°C',
                    'Temperatura ideal: 22-27°C',
                    'Humedad: 55%',
                    'Humedad ideal: 60-70%',
                    'Nitrógeno: 100 ppm',
                    'Nitrógeno ideal: 70-100 ppm',
                    'Fósforo: 40 ppm',
                    'Fósforo ideal: 30-50 ppm',
                    'Potasio: 120 ppm',
                    'Potasio ideal: 130-180 ppm',
                    'Sospecha de enfermedad: Alta',
                    'Sospecha de plaga: Ninguna'
                ],
                recommendations: [
                    'Reducir la aplicación de fertilizantes ricos en nitrógeno.',
                    'Aumentar la aplicación de fertilizantes ricos en potasio.',
                    'Revisar y tratar las enfermedades.'
                ]
            }
        },
        {
            name: 'Zona 5',
            gridArea: '2 / 1 / 3 / 2',
            data: {
                title: 'Zona 5',
                indicators: [
                    'Tipo de plantación: Cebollas',
                    'Última fecha y hora de monitoreo: 02-08-2024 10:00 AM',
                    'Última fecha y hora de riego: 01-08-2024 04:00 PM',
                    'Temperatura encontrada: 18°C',
                    'Temperatura ideal: 15-20°C',
                    'Humedad: 75%',
                    'Humedad ideal: 60-70%',
                    'Nitrógeno: 60 ppm',
                    'Nitrógeno ideal: 60-90 ppm',
                    'Fósforo: 25 ppm',
                    'Fósforo ideal: 20-40 ppm',
                    'Potasio: 140 ppm',
                    'Potasio ideal: 110-150 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Moderada'
                ],
                recommendations: [
                    'Aplicar fertilizantes ricos en nitrógeno y fósforo.',
                    'Implementar medidas de control de plagas.'
                ]
            }
        },
        {
            name: 'Zona 6',
            gridArea: '2 / 2 / 3 / 3',
            data: {
                title: 'Zona 6',
                indicators: [
                    'Tipo de plantación: Calabacines',
                    'Última fecha y hora de monitoreo: 02-08-2024 11:00 AM',
                    'Última fecha y hora de riego: 31-07-2024 06:00 PM',
                    'Temperatura encontrada: 23°C',
                    'Temperatura ideal: 20-25°C',
                    'Humedad: 68%',
                    'Humedad ideal: 60-70%',
                    'Nitrógeno: 90 ppm',
                    'Nitrógeno ideal: 80-110 ppm',
                    'Fósforo: 20 ppm',
                    'Fósforo ideal: 25-45 ppm',
                    'Potasio: 160 ppm',
                    'Potasio ideal: 140-180 ppm',
                    'Sospecha de enfermedad: Leve',
                    'Sospecha de plaga: Ninguna'
                ],
                recommendations: [
                    'Aplicar fertilizante rico en fósforo.',
                    'Vigilar y tratar las enfermedades leves.'
                ]
            }
        },
        {
            name: 'Zona 7',
            gridArea: '2 / 3 / 3 / 4',
            data: {
                title: 'Zona 7',
                indicators: [
                    'Tipo de plantación: Espinacas',
                    'Última fecha y hora de monitoreo: 02-08-2024 12:00 PM',
                    'Última fecha y hora de riego: 30-07-2024 07:00 PM',
                    'Temperatura encontrada: 24°C',
                    'Temperatura ideal: 15-20°C',
                    'Humedad: 70%',
                    'Humedad ideal: 60-70%',
                    'Nitrógeno: 65 ppm',
                    'Nitrógeno ideal: 70-100 ppm',
                    'Fósforo: 35 ppm',
                    'Fósforo ideal: 30-50 ppm',
                    'Potasio: 115 ppm',
                    'Potasio ideal: 120-160 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Moderada'
                ],
                recommendations: [
                    'Aplicar fertilizante rico en nitrógeno y potasio.',
                    'Implementar medidas de control de plagas.'
                ]
            }
        },
        {
            name: 'Zona 8',
            gridArea: '2 / 4 / 3 / 5',
            data: {
                title: 'Zona 8',
                indicators: [
                    'Tipo de plantación: Brócoli',
                    'Última fecha y hora de monitoreo: 02-08-2024 01:00 PM',
                    'Última fecha y hora de riego: 29-07-2024 05:00 PM',
                    'Temperatura encontrada: 26°C',
                    'Temperatura ideal: 20-25°C',
                    'Humedad: 58%',
                    'Humedad ideal: 60-70%',
                    'Nitrógeno: 75 ppm',
                    'Nitrógeno ideal: 80-110 ppm',
                    'Fósforo: 35 ppm',
                    'Fósforo ideal: 30-50 ppm',
                    'Potasio: 150 ppm',
                    'Potasio ideal: 130-170 ppm',
                    'Sospecha de enfermedad: Ninguna',
                    'Sospecha de plaga: Alta'
                ],
                recommendations: [
                    'Aplicar fertilizante rico en nitrógeno.',
                    'Implementar medidas de control de plagas intensivas.'
                ]
            }
        }
    ];

    const determineZoneState = (indicators) => {
        const temp = parseInt(indicators.find(ind => ind.includes('Temperatura encontrada')).split(': ')[1]);
        const idealTempRange = indicators.find(ind => ind.includes('Temperatura ideal')).split(': ')[1].split('-').map(Number);
        const humidity = parseInt(indicators.find(ind => ind.includes('Humedad')).split(': ')[1]);
        const idealHumidityRange = [40, 60]; // Ejemplo de rango ideal

        // Definir márgenes para estado amarillo
        const tempMargin = 2; // Rango de margen para temperatura en estado amarillo
        const humidityMargin = 10; // Rango de margen para humedad en estado amarillo

        if (temp < idealTempRange[0] - tempMargin || temp > idealTempRange[1] + tempMargin ||
            humidity < idealHumidityRange[0] - humidityMargin || humidity > idealHumidityRange[1] + humidityMargin) {
            return 'red'; // Estado rojo si está fuera del rango ideal
        } else if (temp < idealTempRange[0] || temp > idealTempRange[1] ||
            humidity < idealHumidityRange[0] || humidity > idealHumidityRange[1]) {
            return 'yellow'; // Estado amarillo si está cerca del límite ideal
        }
        return 'green'; // Estado verde si todo está en el rango ideal
    };

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Encuentra la zona correspondiente
        const gridX = Math.floor((x / rect.width) * 4) + 1; // Divide en 4 columnas
        const gridY = Math.floor((y / rect.height) * 2) + 1; // Divide en 2 filas

        const data = zones.find(zone => {
            const [rowStart, colStart, rowEnd, colEnd] = zone.gridArea.split(' / ').map(Number);
            return gridX >= colStart && gridX < colEnd && gridY >= rowStart && gridY < rowEnd;
        });

        setActiveZone(data ? { ...data.data, state: determineZoneState(data.data.indicators) } : null);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSensorModalIsOpen(false);
    };

    const openSensorModal = () => {
        setSensorModalIsOpen(true);
    };

    return (
        <div className="demo-container">
            <div className="grid-container" onMouseMove={handleMouseMove}>
                <img
                    src={fincaImagenArriba}
                    alt="Mapa de Finca"
                    className="demo-image"
                />
                {zones.map((zone, index) => (
                    <div
                        key={index}
                        className={`zone ${activeZone && activeZone.title === zone.data.title ? `zone-${activeZone.state}` : ''}`}
                        style={{ gridArea: zone.gridArea }}
                    >
                        {zone.name}
                    </div>
                ))}
                <div
                    className="sensor"
                    style={{ top: '20%', left: '30%' }} 
                    onClick={openSensorModal}
                >
                    {t('demeterMap.sensor', 'Sensor')}
                </div>
                <div
                    className="sensor"
                    style={{ top: '78%', left: '78%' }} 
                    onClick={openSensorModal}
                >
                    {t('demeterMap.sensor', 'Sensor')}
                </div>
                <div
                    className="sensor"
                    style={{ top: '80%', left: '20%' }} 
                    onClick={openSensorModal}
                >
                    {t('demeterMap.sensor', 'Sensor')}
                </div>
            </div>
            <div className="zone-data-section">
                {activeZone ? (
                    <div className="zone-data">
                        <h4>{activeZone.title}</h4>
                        <p>{t('demeterMap.idealIndices')}</p>
                        <ul>
                            {activeZone.indicators.map((item, index) => {
                                const parts = item.split(':');
                                const label = parts[0].trim();
                                const value = parts.slice(1).join(':').trim();
                                
                                // Map Spanish labels to translation keys
                                const labelMap = {
                                    'Tipo de plantación': 'demeterMap.indicators.plantingType',
                                    'Última fecha y hora de monitoreo': 'demeterMap.indicators.lastMonitoring',
                                    'Última fecha y hora de riego': 'demeterMap.indicators.lastWatering',
                                    'Temperatura encontrada': 'demeterMap.indicators.temperatureFound',
                                    'Temperatura ideal': 'demeterMap.indicators.idealTemperature',
                                    'Humedad': 'demeterMap.indicators.humidity',
                                    'Humedad ideal': 'demeterMap.indicators.idealHumidity',
                                    'Nitrógeno': 'demeterMap.indicators.nitrogen',
                                    'Nitrógeno ideal': 'demeterMap.indicators.idealNitrogen',
                                    'Fósforo': 'demeterMap.indicators.phosphorus',
                                    'Fósforo ideal': 'demeterMap.indicators.idealPhosphorus',
                                    'Potasio': 'demeterMap.indicators.potassium',
                                    'Potasio ideal': 'demeterMap.indicators.idealPotassium',
                                    'Sospecha de enfermedad': 'demeterMap.indicators.diseaseSuspicion',
                                    'Sospecha de plaga': 'demeterMap.indicators.pestSuspicion'
                                };
                                
                                const translationKey = labelMap[label] || label;
                                const translatedLabel = t(translationKey, label);
                                
                                return (
                                    <ul key={index} className='indicador-container'>
                                        <li>
                                            <strong>{translatedLabel}:</strong>
                                        </li>
                                        <li>{value}</li>
                                    </ul>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <p>{t('demeterMap.positionCursor')}</p>
                )}
                <div className='actions-container'>
                <button className='action-button' onClick={openModal}>{t('demeterMap.recommendations')}</button>
                <button
                    className='action-button'
                    onClick={() => {
                        alert(t('demeterMap.wateringAlert'));
                    }}
                >
                    {t('demeterMap.waterZone')}
                </button>
                <button
                    className='action-button'
                    onClick={() => {
                        alert(t('demeterMap.notImplemented'));
                    }}
                >
                    {t('demeterMap.statisticalData')}
                </button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={t('demeterMap.recommendations')}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>{t('demeterMap.recommendations')}</h2>
                {activeZone ? (
                    <div className="modal-content">
                        <h3>{activeZone.title}</h3>
                        {activeZone.recommendations.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                ) : (
                    <p>{t('demeterMap.noData')}</p>
                )}
                <button onClick={closeModal} className='modal-close-button'>{t('demeterMap.close')}</button>
            </Modal>
            <Modal
                isOpen={sensorModalIsOpen}
                onRequestClose={closeModal}
                contentLabel={t('demeterMap.sensorBattery')}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>{t('demeterMap.sensorBattery')}</h2>
                <p>{t('demeterMap.batteryLevel', { level: sensorBatteryLevel })}</p>
                <p>{t('demeterMap.chargeInstructions')}</p>
                <p>{t('demeterMap.sensorInstructions')}</p>
                <button onClick={closeModal} className='modal-close-button'>{t('demeterMap.close')}</button>
            </Modal>
        </div>
    );
}

export default DemeterDemo;
