import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './DemeterAI.css';

const DemeterAI = () => {
    const { t, i18n } = useTranslation();
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    // Question keys in the order they should appear
    const questionKeys = [
        'demeterAI.questions.whatIsFarm',
        'demeterAI.questions.howImproveAgriculture',
        'demeterAI.questions.whatAreGreenAgrochemicals',
        'demeterAI.questions.howMakeGreenAgrochemicals',
        'demeterAI.questions.recommendedPlantations',
        'demeterAI.questions.productivityIdeas',
        'demeterAI.questions.sustainableAgriculture',
        'demeterAI.questions.composting',
        'demeterAI.questions.permaculture',
        'demeterAI.questions.organicPestControl',
        'demeterAI.questions.dripIrrigation',
        'demeterAI.questions.improveSoilQuality',
        'demeterAI.questions.biofertilizers',
        'demeterAI.questions.hydroponicCultivation',
        'demeterAI.questions.precisionFarming',
        'demeterAI.questions.fruitTreePruning',
        'demeterAI.questions.agroecology',
        'demeterAI.questions.preventSoilErosion',
        'demeterAI.questions.conservationAgriculture',
        'demeterAI.questions.homemadeFertilizers',
        'demeterAI.questions.verticalFarming',
        'demeterAI.questions.soilSalinity',
        'demeterAI.questions.regenerativeAgriculture',
        'demeterAI.questions.soilAnalysis',
        'demeterAI.questions.integratedPestManagement',
        'demeterAI.questions.directSeeding',
        'demeterAI.questions.coverCrops',
        'demeterAI.questions.irrigationWaterAnalysis',
        'demeterAI.questions.terraceCultivation',
        'demeterAI.questions.preventCropDiseases',
        'demeterAI.questions.medicinalPlants',
        'demeterAI.questions.seedCollection',
        'demeterAI.questions.sprinklerIrrigation',
        'demeterAI.questions.waterManagement',
        'demeterAI.questions.agroforestry',
        'demeterAI.questions.agriculturalManagementPlan',
        'demeterAI.questions.organicAgriculture',
        'demeterAI.questions.automaticIrrigation',
        'demeterAI.questions.greenhouses',
        'demeterAI.questions.waterEfficiency',
        'demeterAI.questions.biologicalPestControl',
        'demeterAI.questions.manureFermentation',
        'demeterAI.questions.precisionAgricultureTechniques',
        'demeterAI.questions.soilNutrientAnalysis',
        'demeterAI.questions.furrowPlanting',
        'demeterAI.questions.homeComposting',
        'demeterAI.questions.conservationAgriculture2',
        'demeterAI.questions.improveSoilStructure',
        'demeterAI.questions.intercropping',
        'demeterAI.questions.agriculturalWaste',
        'demeterAI.questions.urbanAgriculture',
        'demeterAI.questions.verticalGarden',
        'demeterAI.questions.algaeCultivation',
        'demeterAI.questions.cropSelection',
        'demeterAI.questions.raisedBedCultivation',
        'demeterAI.questions.improveSoilFertility',
        'demeterAI.questions.potCultivation',
        'demeterAI.questions.rainwaterHarvesting',
        'demeterAI.questions.biostimulants',
        'demeterAI.questions.gardenSoilAnalysis',
        'demeterAI.questions.nutrientManagement',
        'demeterAI.questions.preventSoilContamination',
        'demeterAI.questions.weedControl',
        'demeterAI.questions.waterManagementTechniques',
        'demeterAI.questions.mushroomCultivation',
        'demeterAI.questions.climateSmartAgriculture',
        'demeterAI.questions.organicWasteManagement',
        'demeterAI.questions.agroforestrySystems',
        'demeterAI.questions.cropPlan',
        'demeterAI.questions.waterCultivation',
        'demeterAI.questions.tropicalCropPlanting',
        'demeterAI.questions.biomassCultivation',
        'demeterAI.questions.fertilizationPlan',
        'demeterAI.questions.tuberCultivation',
        'demeterAI.questions.fruitTreePlanting',
        'demeterAI.questions.soillessCultivation',
        'demeterAI.questions.diseaseResistance',
        'demeterAI.questions.aromaticPlants',
        'demeterAI.questions.rainwaterCapture',
        'demeterAI.questions.cerealCultivation',
        'demeterAI.questions.greenhousePestManagement',
        'demeterAI.questions.regenerativeAgricultureTechniques',
        'demeterAI.questions.automatedIrrigation',
        'demeterAI.questions.soilConservationAgriculture',
        'demeterAI.questions.ornamentalPlantCultivation',
        'demeterAI.questions.verticalCultivationSystems',
        'demeterAI.questions.irrigationPlan',
        'demeterAI.questions.precisionAgriculture',
        'demeterAI.questions.medicinalPlantCultivation2',
        'demeterAI.questions.efficientComposting',
        'demeterAI.questions.alternativeSubstrates',
        'demeterAI.questions.culinaryHerbs',
        'demeterAI.questions.biodynamicAgriculture',
        'demeterAI.questions.homeCultivationSystem',
        'demeterAI.questions.spiceCultivation',
        'demeterAI.questions.plantPruning',
        'demeterAI.questions.ecologicalAgriculture',
        'demeterAI.questions.greenhouseCultivationSystem',
        'demeterAI.questions.hydroponicCrops',
        'demeterAI.questions.cropPlanning',
        'demeterAI.questions.permaculturalAgriculture',
        'demeterAI.questions.containerCultivationSystem',
        'demeterAI.questions.legumeCultivation',
        'demeterAI.questions.edibleRootCultivation',
        'demeterAI.questions.recycledWaterCultivation',
        'demeterAI.questions.herbGarden',
        'demeterAI.questions.intensiveAgriculture',
        'demeterAI.questions.cropHarvesting',
        'demeterAI.questions.tunnelCultivation',
        'demeterAI.questions.aquaponicsSystem',
        'demeterAI.questions.synergisticAgriculture',
        'demeterAI.questions.pestManagementPlan',
        'demeterAI.questions.raisedBedCultivation2',
        'demeterAI.questions.cropVarietySelection',
        'demeterAI.questions.perennialPlantCultivation',
        'demeterAI.questions.flowerGarden',
        'demeterAI.questions.climateControlSystems',
        'demeterAI.questions.nutrientRecyclingSystem',
        'demeterAI.questions.mountainAgriculture',
        'demeterAI.questions.edibleFlowerCultivation',
        'demeterAI.questions.closedSystemCultivation',
        'demeterAI.questions.aquaponicSystems',
        'demeterAI.questions.succulentPlantCultivation',
        'demeterAI.questions.leafyVegetableCultivation',
        'demeterAI.questions.aridZoneCultivation',
        'demeterAI.questions.organicFertilizationSystems',
        'demeterAI.questions.tropicalFruitCultivation',
        'demeterAI.questions.subsistenceAgriculture',
        'demeterAI.questions.vegetableGarden',
        'demeterAI.questions.mixedCropTechniques',
        'demeterAI.questions.climbingPlantCultivation',
        'demeterAI.questions.communityAgriculture',
        'demeterAI.questions.aquaticSubstrateSystem',
        'demeterAI.questions.acidicSoilTechniques',
        'demeterAI.questions.indoorPlantCultivation',
        'demeterAI.questions.socialAgriculture',
        'demeterAI.questions.fertileSoilSystem',
        'demeterAI.questions.renewableEnergySystems',
        'demeterAI.questions.aromaticPlantCultivation2'
    ];

    const getResponseKey = (questionKey) => {
        return questionKey.replace('questions', 'responses');
    };

    const handleSelectChange = (e) => {
        const questionKey = e.target.value;
        setSelectedQuestion(questionKey);
        setLoading(true);

        const responseKey = getResponseKey(questionKey);
        const translatedResponse = t(responseKey, '');
        
        if (translatedResponse) {
            setResponse(translatedResponse);
        } else {
            setResponse(t('demeterAI.noInfo'));
        }

        setLoading(false);
    };

    return (
        <div className='demeter-page'>
        <div className="demeterai-container">
            <h2 className="demeterai-title">{t('demeterAI.title')}</h2>
            <p className="demeterai-subtitle">{t('demeterAI.subtitle')}</p>
            <div className="demeterai-select-container">
                <select
                    value={selectedQuestion}
                    onChange={handleSelectChange}
                    className="demeterai-select"
                >
                    <option value="" disabled>{t('demeterAI.selectQuestion')}</option>
                    {questionKeys.map((questionKey, index) => (
                        <option key={index} value={questionKey}>
                            {t(questionKey)}
                        </option>
                    ))}
                </select>
            </div>
            {loading && <p className="demeterai-loading">{t('demeterAI.loading')}</p>}
            <div className="demeterai-response">
                <h3 className="demeterai-response-title">{t('demeterAI.response')}</h3>
                <p className="demeterai-response-text">{response}</p>
            </div>
        </div></div>
    );
};

export default DemeterAI;
