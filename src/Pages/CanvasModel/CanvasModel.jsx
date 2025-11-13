import React from 'react';
import { FaLeaf, FaUsers, FaChartBar, FaHandshake, FaDollarSign, FaCogs, FaTools, FaStar, FaDollarSign as FaDollarSignAlt } from 'react-icons/fa';
import './CanvasModel.css';

function CanvasModel() {
    return (
        <div className="modelo-canvas">
            <h1>Modelo Canvas: Finca Inteligente en Costa Rica</h1>

            <div className="section">
                <FaLeaf className="icon" />
                <div className="content">
                    <h2>Propuesta de Valor</h2>
                    <ul>
                        <li><strong>Cuidado del Medio Ambiente:</strong> Implementación de tecnologías sostenibles para reducir el uso de agua, plaguicidas y fertilizantes, promoviendo prácticas agrícolas eco-amigables.</li>
                        <li><strong>Automatización de la Finca:</strong> Uso de un dispositivo móvil para gestionar riego, control de plagas y recolección de datos, optimizando las operaciones agrícolas.</li>
                        <li><strong>Eficiencia en la Producción:</strong> Mejora en la gestión de recursos y reducción de costos operativos mediante el uso de sensores y sistemas automatizados.</li>
                        <li><strong>Mejora de la Salud:</strong> Aplicación de prácticas agrícolas que promuevan alimentos más saludables y reducción de químicos dañinos en los cultivos.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaUsers className="icon" />
                <div className="content">
                    <h2>Segmentos de Clientes</h2>
                    <ul>
                        <li><strong>Agricultores Sostenibles:</strong> Buscan adoptar prácticas que minimicen el impacto ambiental y mejoren la calidad de los cultivos.</li>
                        <li><strong>Empresas Agroindustriales Verdes:</strong> Interesadas en tecnologías que optimicen la producción y reduzcan el impacto ambiental.</li>
                        <li><strong>Consumidores Conscientes de la Salud:</strong> Personas que prefieren alimentos cultivados de manera sostenible y libre de químicos.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaChartBar className="icon" />
                <div className="content">
                    <h2>Canales</h2>
                    <ul>
                        <li><strong>Aplicación Web:</strong> Plataforma para el monitoreo y gestión de la finca, accesible desde cualquier dispositivo.</li>
                        <li><strong>Distribuidores de Tecnologías Verdes:</strong> Asociaciones y empresas que promueven prácticas agrícolas sostenibles.</li>
                        <li><strong>Sitio Web del Proyecto:</strong> Información sobre la tecnología, beneficios ambientales y de salud, y recursos para los usuarios.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaHandshake className="icon" />
                <div className="content">
                    <h2>Relaciones con Clientes</h2>
                    <ul>
                        <li><strong>Soporte Técnico y Capacitación:</strong> Formación sobre el uso del dispositivo y la aplicación para maximizar beneficios ambientales y de salud.</li>
                        <li><strong>Consultoría en Agricultura Sostenible:</strong> Asesoramiento sobre prácticas y técnicas agrícolas ecológicas.</li>
                        <li><strong>Alertas y Notificaciones:</strong> Información sobre el estado de los cultivos y recomendaciones para mejorar la salud y sostenibilidad.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaDollarSign className="icon" />
                <div className="content">
                    <h2>Fuentes de Ingreso</h2>
                    <ul>
                        <li><strong>Venta del Dispositivo Móvil:</strong> Ingresos por la comercialización del dispositivo que facilita la agricultura sostenible.</li>
                        <li><strong>Suscripción a la Aplicación Web:</strong> Acceso a herramientas avanzadas para la gestión eficiente y sostenible de los cultivos.</li>
                        <li><strong>Servicios de Consultoría y Mantenimiento:</strong> Asesoría en prácticas sostenibles y mantenimiento del dispositivo.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaCogs className="icon" />
                <div className="content">
                    <h2>Recursos Clave</h2>
                    <ul>
                        <li><strong>Tecnología de Sensores Ambientales:</strong> Sensores que monitorean la salud del suelo, el clima y el estado de los cultivos.</li>
                        <li><strong>Dispositivo Móvil "Deméter":</strong> Equipado para realizar tareas de monitoreo, riego automatizado y control de plagas de manera eficiente.</li>
                        <li><strong>Equipo de Desarrollo Sostenible:</strong> Ingenieros y expertos en tecnología agrícola enfocada en la sostenibilidad y salud.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaTools className="icon" />
                <div className="content">
                    <h2>Actividades Clave</h2>
                    <ul>
                        <li><strong>Desarrollo de Tecnología Ecológica:</strong> Investigación y desarrollo de sensores y dispositivos que promuevan prácticas agrícolas respetuosas con el medio ambiente.</li>
                        <li><strong>Implementación de Soluciones de Riego y Control:</strong> Automatización de sistemas para el uso eficiente de agua y plaguicidas.</li>
                        <li><strong>Educación y Capacitación:</strong> Formación para los usuarios sobre el uso de la tecnología para mejorar la salud y la sostenibilidad.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaStar className="icon" />
                <div className="content">
                    <h2>Socios Clave</h2>
                    <ul>
                        <li><strong>Nestlé:</strong> Seed capital investment. This project was presented as a prototype at the 2024 Nestlé innovation contest hackathon.</li>
                        <li><strong>Proveedores de Tecnología Ecológica:</strong> Empresas que suministran materiales y tecnologías para prácticas agrícolas sostenibles.</li>
                        <li><strong>Organizaciones Ambientales:</strong> Colaboración para validar las prácticas y promover la adopción de tecnologías verdes.</li>
                        <li><strong>Instituciones Académicas:</strong> Investigación y desarrollo conjunto para innovaciones en agricultura sostenible.</li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaDollarSignAlt className="icon" />
                <div className="content">
                    <h2>Estructura de Costos</h2>
                    <ul>
                        <li><strong>Desarrollo y Producción de Tecnología:</strong> Inversión en la creación del dispositivo móvil y la aplicación para la gestión sostenible.</li>
                        <li><strong>Marketing y Educación:</strong> Costos asociados a la promoción de prácticas sostenibles y capacitación de usuarios.</li>
                        <li><strong>Soporte y Consultoría:</strong> Gastos relacionados con el soporte técnico y los servicios de consultoría en agricultura ecológica.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CanvasModel;
