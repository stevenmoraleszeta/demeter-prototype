import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import './DemeterMap.css';
import fincaImagenArriba from '../../Assets/Img/fincaImagenArriba.png';
import Modal from 'react-modal';

function DemeterDemo() {
    const { t, i18n } = useTranslation();
    const [activeZone, setActiveZone] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [sensorModalIsOpen, setSensorModalIsOpen] = useState(false);
    const [sensorBatteryLevel] = useState('75%');

    // Zone data structure with keys instead of hardcoded text
    // Recalculate when language changes
    const zones = useMemo(() => {
        const zonesConfig = [
            {
                zoneKey: 'zone1',
                gridArea: '1 / 1 / 2 / 2',
                plantingTypeKey: 'tomatoes',
                lastMonitoring: '01-08-2024 10:00 AM',
                lastWatering: '30-07-2024 04:00 PM',
                temperature: 20,
                idealTempRange: [18, 22],
                humidity: 65,
                idealHumidityRange: [60, 70],
                nitrogen: 90,
                idealNitrogenRange: [100, 150],
                phosphorus: 35,
                idealPhosphorusRange: [50, 70],
                potassium: 160,
                idealPotassiumRange: [200, 250],
                diseaseSuspicion: 'none',
                pestSuspicion: 'none'
            },
            {
                zoneKey: 'zone2',
                gridArea: '1 / 2 / 2 / 3',
                plantingTypeKey: 'lettuce',
                lastMonitoring: '01-08-2024 11:00 AM',
                lastWatering: '29-07-2024 06:00 PM',
                temperature: 22,
                idealTempRange: [18, 22],
                humidity: 70,
                idealHumidityRange: [60, 70],
                nitrogen: 70,
                idealNitrogenRange: [50, 80],
                phosphorus: 40,
                idealPhosphorusRange: [30, 50],
                potassium: 100,
                idealPotassiumRange: [100, 150],
                diseaseSuspicion: 'mild',
                pestSuspicion: 'high'
            },
            {
                zoneKey: 'zone3',
                gridArea: '1 / 3 / 2 / 4',
                plantingTypeKey: 'peppers',
                lastMonitoring: '01-08-2024 12:00 PM',
                lastWatering: '28-07-2024 05:00 PM',
                temperature: 25,
                idealTempRange: [20, 25],
                humidity: 60,
                idealHumidityRange: [60, 70],
                nitrogen: 85,
                idealNitrogenRange: [90, 120],
                phosphorus: 35,
                idealPhosphorusRange: [40, 60],
                potassium: 180,
                idealPotassiumRange: [150, 200],
                diseaseSuspicion: 'none',
                pestSuspicion: 'mild'
            },
            {
                zoneKey: 'zone4',
                gridArea: '1 / 4 / 2 / 5',
                plantingTypeKey: 'carrots',
                lastMonitoring: '01-08-2024 01:00 PM',
                lastWatering: '27-07-2024 07:00 PM',
                temperature: 27,
                idealTempRange: [22, 27],
                humidity: 55,
                idealHumidityRange: [60, 70],
                nitrogen: 100,
                idealNitrogenRange: [70, 100],
                phosphorus: 40,
                idealPhosphorusRange: [30, 50],
                potassium: 120,
                idealPotassiumRange: [130, 180],
                diseaseSuspicion: 'high',
                pestSuspicion: 'none'
            },
            {
                zoneKey: 'zone5',
                gridArea: '2 / 1 / 3 / 2',
                plantingTypeKey: 'onions',
                lastMonitoring: '02-08-2024 10:00 AM',
                lastWatering: '01-08-2024 04:00 PM',
                temperature: 18,
                idealTempRange: [15, 20],
                humidity: 75,
                idealHumidityRange: [60, 70],
                nitrogen: 60,
                idealNitrogenRange: [60, 90],
                phosphorus: 25,
                idealPhosphorusRange: [20, 40],
                potassium: 140,
                idealPotassiumRange: [110, 150],
                diseaseSuspicion: 'none',
                pestSuspicion: 'moderate'
            },
            {
                zoneKey: 'zone6',
                gridArea: '2 / 2 / 3 / 3',
                plantingTypeKey: 'zucchini',
                lastMonitoring: '02-08-2024 11:00 AM',
                lastWatering: '31-07-2024 06:00 PM',
                temperature: 23,
                idealTempRange: [20, 25],
                humidity: 68,
                idealHumidityRange: [60, 70],
                nitrogen: 90,
                idealNitrogenRange: [80, 110],
                phosphorus: 20,
                idealPhosphorusRange: [25, 45],
                potassium: 160,
                idealPotassiumRange: [140, 180],
                diseaseSuspicion: 'mild',
                pestSuspicion: 'none'
            },
            {
                zoneKey: 'zone7',
                gridArea: '2 / 3 / 3 / 4',
                plantingTypeKey: 'spinach',
                lastMonitoring: '02-08-2024 12:00 PM',
                lastWatering: '30-07-2024 07:00 PM',
                temperature: 24,
                idealTempRange: [15, 20],
                humidity: 70,
                idealHumidityRange: [60, 70],
                nitrogen: 65,
                idealNitrogenRange: [70, 100],
                phosphorus: 35,
                idealPhosphorusRange: [30, 50],
                potassium: 115,
                idealPotassiumRange: [120, 160],
                diseaseSuspicion: 'none',
                pestSuspicion: 'moderate'
            },
            {
                zoneKey: 'zone8',
                gridArea: '2 / 4 / 3 / 5',
                plantingTypeKey: 'broccoli',
                lastMonitoring: '02-08-2024 01:00 PM',
                lastWatering: '29-07-2024 05:00 PM',
                temperature: 26,
                idealTempRange: [20, 25],
                humidity: 58,
                idealHumidityRange: [60, 70],
                nitrogen: 75,
                idealNitrogenRange: [80, 110],
                phosphorus: 35,
                idealPhosphorusRange: [30, 50],
                potassium: 150,
                idealPotassiumRange: [130, 170],
                diseaseSuspicion: 'none',
                pestSuspicion: 'high'
            }
        ];

        return zonesConfig.map(config => {
            const zoneName = t(`demeterMap.zones.${config.zoneKey}`);
            const plantingType = t(`demeterMap.plantingTypes.${config.plantingTypeKey}`);
            
            return {
                name: zoneName,
                zoneKey: config.zoneKey,
                gridArea: config.gridArea,
                data: {
                    title: zoneName,
                    zoneKey: config.zoneKey,
                    plantingTypeKey: config.plantingTypeKey,
                    plantingType: plantingType,
                    lastMonitoring: config.lastMonitoring,
                    lastWatering: config.lastWatering,
                    temperature: config.temperature,
                    idealTempRange: config.idealTempRange,
                    humidity: config.humidity,
                    idealHumidityRange: config.idealHumidityRange,
                    nitrogen: config.nitrogen,
                    idealNitrogenRange: config.idealNitrogenRange,
                    phosphorus: config.phosphorus,
                    idealPhosphorusRange: config.idealPhosphorusRange,
                    potassium: config.potassium,
                    idealPotassiumRange: config.idealPotassiumRange,
                    diseaseSuspicion: config.diseaseSuspicion,
                    pestSuspicion: config.pestSuspicion
                }
            };
        });
    }, [t, i18n.language]);

    const determineZoneState = (zoneData) => {
        const temp = zoneData.temperature;
        const idealTempRange = zoneData.idealTempRange;
        const humidity = zoneData.humidity;
        const idealHumidityRange = zoneData.idealHumidityRange;

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

        setActiveZone(data ? { ...data.data, state: determineZoneState(data.data) } : null);
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
                    alt={t('demeterMenu.farmMap')}
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
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.plantingType')}:</strong></li>
                                <li>{activeZone.plantingType}</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.lastMonitoring')}:</strong></li>
                                <li>{activeZone.lastMonitoring}</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.lastWatering')}:</strong></li>
                                <li>{activeZone.lastWatering}</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.temperatureFound')}:</strong></li>
                                <li>{activeZone.temperature}°C</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.idealTemperature')}:</strong></li>
                                <li>{activeZone.idealTempRange[0]}-{activeZone.idealTempRange[1]}°C</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.humidity')}:</strong></li>
                                <li>{activeZone.humidity}%</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.idealHumidity')}:</strong></li>
                                <li>{activeZone.idealHumidityRange[0]}-{activeZone.idealHumidityRange[1]}%</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.nitrogen')}:</strong></li>
                                <li>{activeZone.nitrogen} ppm</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.idealNitrogen')}:</strong></li>
                                <li>{activeZone.idealNitrogenRange[0]}-{activeZone.idealNitrogenRange[1]} ppm</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.phosphorus')}:</strong></li>
                                <li>{activeZone.phosphorus} ppm</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.idealPhosphorus')}:</strong></li>
                                <li>{activeZone.idealPhosphorusRange[0]}-{activeZone.idealPhosphorusRange[1]} ppm</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.potassium')}:</strong></li>
                                <li>{activeZone.potassium} ppm</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.idealPotassium')}:</strong></li>
                                <li>{activeZone.idealPotassiumRange[0]}-{activeZone.idealPotassiumRange[1]} ppm</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.diseaseSuspicion')}:</strong></li>
                                <li>{t(`demeterMap.values.${activeZone.diseaseSuspicion}`)}</li>
                            </ul>
                            <ul className='indicador-container'>
                                <li><strong>{t('demeterMap.indicators.pestSuspicion')}:</strong></li>
                                <li>{t(`demeterMap.values.${activeZone.pestSuspicion}`)}</li>
                            </ul>
                        </ul>
                    </div>
                ) : (
                    <p>{t('demeterMap.positionCursor')}</p>
                )}
                <div className='actions-container'>
                <button className='action-button' onClick={openModal}>{t('demeterMap.labels.recommendations')}</button>
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
                contentLabel={t('demeterMap.labels.recommendations')}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>{t('demeterMap.labels.recommendations')}</h2>
                {activeZone && activeZone.zoneKey ? (
                    <div className="modal-content">
                        <h3>{activeZone.title}</h3>
                        {t(`demeterMap.recommendations.${activeZone.zoneKey}`, { returnObjects: true }).map((item, index) => (
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
