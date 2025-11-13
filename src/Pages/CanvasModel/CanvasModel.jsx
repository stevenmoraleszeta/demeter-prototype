import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLeaf, FaUsers, FaChartBar, FaHandshake, FaDollarSign, FaCogs, FaTools, FaStar, FaDollarSign as FaDollarSignAlt } from 'react-icons/fa';
import './CanvasModel.css';

function CanvasModel() {
    const { t } = useTranslation();

    const formatItem = (text) => {
        const parts = text.split(': ');
        if (parts.length > 1) {
            return { label: parts[0], description: parts.slice(1).join(': ') };
        }
        return { label: text, description: '' };
    };

    const renderListItem = (key) => {
        const item = formatItem(t(key));
        return <li key={key}><strong>{item.label}:</strong> {item.description}</li>;
    };

    return (
        <div className="modelo-canvas">
            <h1>{t('canvasModel.title')}</h1>

            <div className="section">
                <FaLeaf className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.valueProposition.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.valueProposition.environmentalCare')}
                        {renderListItem('canvasModel.valueProposition.farmAutomation')}
                        {renderListItem('canvasModel.valueProposition.productionEfficiency')}
                        {renderListItem('canvasModel.valueProposition.healthImprovement')}
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaUsers className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.customerSegments.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.customerSegments.sustainableFarmers')}
                        {renderListItem('canvasModel.customerSegments.greenAgroindustrial')}
                        {renderListItem('canvasModel.customerSegments.healthConscious')}
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaChartBar className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.channels.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.channels.webApp')}
                        {renderListItem('canvasModel.channels.greenDistributors')}
                        {renderListItem('canvasModel.channels.projectWebsite')}
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaHandshake className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.customerRelationships.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.customerRelationships.technicalSupport')}
                        {renderListItem('canvasModel.customerRelationships.sustainableConsulting')}
                        {renderListItem('canvasModel.customerRelationships.alertsNotifications')}
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaDollarSign className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.revenueStreams.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.revenueStreams.deviceSales')}
                        {renderListItem('canvasModel.revenueStreams.webAppSubscription')}
                        {renderListItem('canvasModel.revenueStreams.consultingServices')}
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaCogs className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.keyResources.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.keyResources.sensorTechnology')}
                        {renderListItem('canvasModel.keyResources.demeterDevice')}
                        {renderListItem('canvasModel.keyResources.developmentTeam')}
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaTools className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.keyActivities.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.keyActivities.ecoTechnologyDevelopment')}
                        {renderListItem('canvasModel.keyActivities.irrigationControlImplementation')}
                        {renderListItem('canvasModel.keyActivities.educationTraining')}
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaStar className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.keyPartners.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.keyPartners.nestle')}
                        {renderListItem('canvasModel.keyPartners.greenSuppliers')}
                        {renderListItem('canvasModel.keyPartners.environmentalOrganizations')}
                        {renderListItem('canvasModel.keyPartners.academicInstitutions')}
                    </ul>
                </div>
            </div>

            <div className="section">
                <FaDollarSignAlt className="icon" />
                <div className="content">
                    <h2>{t('canvasModel.costStructure.title')}</h2>
                    <ul>
                        {renderListItem('canvasModel.costStructure.technologyDevelopment')}
                        {renderListItem('canvasModel.costStructure.marketingEducation')}
                        {renderListItem('canvasModel.costStructure.supportConsulting')}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CanvasModel;
