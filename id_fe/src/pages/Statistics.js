import { React, useState, } from "react";
import LineChart from "components/LineChart";
import { DiseaseData, PredictedDiseaseData1m, PredictedDiseaseData3m, PredictedDiseaseData6m, PredictedDiseaseData2m, PredictedDiseaseData12m} from "Data";
import { useTranslation } from "react-i18next";

export default () => {

    const {t} = useTranslation()

    const [fluData, setFluData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.flu),
                hidden: false,
            },
            {
                label: "1 Month Prediction",
                data: PredictedDiseaseData1m.map((data) => data.flu),
                hidden: true,
            },
            {
                label: "2 Months Prediction",
                data: PredictedDiseaseData2m.map((data) => data.flu),
                hidden: true,
            },
            {
                label: "3 Months Prediction",
                data: PredictedDiseaseData3m.map((data) => data.flu),
                hidden: true,
            },
            {
                label: "6 Months Prediction",
                data: PredictedDiseaseData6m.map((data) => data.flu),
                hidden: true,
            },
            {
                label: "12 Months Prediction",
                data: PredictedDiseaseData12m.map((data) => data.flu),
                hidden: true,
            },],
        })
    const [covid19Data, setCovid19Data] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.covid19),
                hidden: false,
            },
            {
                label: "1 Month Prediction",
                data: PredictedDiseaseData1m.map((data) => data.covid19),
                hidden: true,
            },
            {
                label: "2 Months Prediction",
                data: PredictedDiseaseData2m.map((data) => data.covid19),
                hidden: true,
            },
            {
                label: "3 Months Prediction",
                data: PredictedDiseaseData3m.map((data) => data.covid19),
                hidden: true,
            },
            {
                label: "6 Months Prediction",
                data: PredictedDiseaseData6m.map((data) => data.covid19),
                hidden: true,
            },
            {
                label: "12 Months Prediction",
                data: PredictedDiseaseData12m.map((data) => data.covid19),
                hidden: true,
            },],
        })
    const [pneumoniaData, setPneumoniaData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.pneumonia),
                hidden: false,
            },
            {
                label: "1 Month Prediction",
                data: PredictedDiseaseData1m.map((data) => data.pneumonia),
                hidden: true,
            },
            {
                label: "2 Months Prediction",
                data: PredictedDiseaseData2m.map((data) => data.pneumonia),
                hidden: true,
            },
            {
                label: "3 Months Prediction",
                data: PredictedDiseaseData3m.map((data) => data.pneumonia),
                hidden: true,
            },
            {
                label: "6 Months Prediction",
                data: PredictedDiseaseData6m.map((data) => data.pneumonia),
                hidden: true,
            },
            {
                label: "12 Months Prediction",
                data: PredictedDiseaseData12m.map((data) => data.pneumonia),
                hidden: true,
            },],
        })
    const [hepatitisData, setHepatitisData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.hepatitis),
                hidden: false,
            },
            {
                label: "1 Month Prediction",
                data: PredictedDiseaseData1m.map((data) => data.hepatitis),
                hidden: true,
            },
            {
                label: "2 Months Prediction",
                data: PredictedDiseaseData2m.map((data) => data.hepatitis),
                hidden: true,
            },
            {
                label: "3 Months Prediction",
                data: PredictedDiseaseData3m.map((data) => data.hepatitis),
                hidden: true,
            },
            {
                label: "6 Months Prediction",
                data: PredictedDiseaseData6m.map((data) => data.hepatitis),
                hidden: true,
            },
            {
                label: "12 Months Prediction",
                data: PredictedDiseaseData12m.map((data) => data.hepatitis),
                hidden: true,
            },],
        })
    const [chickenpoxData, setChickenpoxData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.chickenpox),
                hidden: false,
            },
            {
                label: "1 Month Prediction",
                data: PredictedDiseaseData1m.map((data) => data.chickenpox),
                hidden: true,
            },
            {
                label: "2 Months Prediction",
                data: PredictedDiseaseData2m.map((data) => data.chickenpox),
                hidden: true,
            },
            {
                label: "3 Months Prediction",
                data: PredictedDiseaseData3m.map((data) => data.chickenpox),
                hidden: true,
            },
            {
                label: "6 Months Prediction",
                data: PredictedDiseaseData6m.map((data) => data.chickenpox),
                hidden: true,
            },
            {
                label: "12 Months Prediction",
                data: PredictedDiseaseData12m.map((data) => data.chickenpox),
                hidden: true,
            },],
        })
    const [dengueData, setDengueData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.dengue),
                hidden: false,
            },
            {
                label: "1 Month Prediction",
                data: PredictedDiseaseData1m.map((data) => data.dengue),
                hidden: true,
            },
            {
                label: "2 Months Prediction",
                data: PredictedDiseaseData2m.map((data) => data.dengue),
                hidden: true,
            },
            {
                label: "3 Months Prediction",
                data: PredictedDiseaseData3m.map((data) => data.dengue),
                hidden: true,
            },
            {
                label: "6 Months Prediction",
                data: PredictedDiseaseData6m.map((data) => data.dengue),
                hidden: true,
            },
            {
                label: "12 Months Prediction",
                data: PredictedDiseaseData12m.map((data) => data.dengue),
                hidden: true,
            },
            ],
        })
    const [tuberculosisData, setTuberculosisData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.tuberculosis),
                hidden: false,
            },
            {
               label: "1 Month Prediction",
                data: PredictedDiseaseData1m.map((data) => data.tuberculosis),
                hidden: true,
            },
            {
               label: "2 Months Prediction",
                data: PredictedDiseaseData2m.map((data) => data.tuberculosis),
                hidden: true,
            },
            {
               label: "3 Months Prediction",
                data: PredictedDiseaseData3m.map((data) => data.tuberculosis),
                hidden: true,
            },
            {
               label: "6 Months Prediction",
                data: PredictedDiseaseData6m.map((data) => data.tuberculosis),
                hidden: true,
            },
            {
               label: "12 Months Prediction",
                data: PredictedDiseaseData12m.map((data) => data.tuberculosis),
                hidden: true,
            },],
        })

    return (
        <div style={{ marginTop: "0px", display: "flex" }}>
            <div style={{ flex: 1, height: "260px", marginTop: "15px", marginLeft: "140px" }}>
                <LineChart chartData={fluData} />
                <h1 style={{ marginTop: "10px", marginBottom: "30px", marginLeft: "180px", fontWeight: "bold" }}>Number of Flu Cases Chart</h1>
                <LineChart chartData={covid19Data} />
                <h1 style={{ marginTop: "10px", marginBottom: "60px", marginLeft: "170px", fontWeight: "bold" }}>Number of Covid19 Cases Chart</h1>
                <LineChart chartData={hepatitisData} />
                <h1 style={{ marginTop: "10px", marginBottom: "30px", marginLeft: "160px", fontWeight: "bold" }}>Number of Hepatitis Cases Chart</h1>
                <LineChart chartData={chickenpoxData} />
                <h1 style={{ marginTop: "10px", marginBottom: "30px", marginLeft: "155px", fontWeight: "bold" }}>Number of Chickenpox Cases Chart</h1>
            </div>
            <div style={{ flex: 1, height: "260px", marginTop: "15px", marginLeft: "40px" }}>
                <LineChart chartData={pneumoniaData} />
                <h1 style={{ marginTop: "10px", marginBottom: "30px", marginLeft: "165px", fontWeight: "bold" }}>Number of Pneumonia Cases Chart</h1>
                <LineChart chartData={dengueData} />
                <h1 style={{ marginTop: "10px", marginBottom: "60px", marginLeft: "170px", fontWeight: "bold" }}>Number of Dengue Cases Chart</h1>
                <LineChart chartData={tuberculosisData} />
                <h1 style={{ marginTop: "10px", marginBottom: "30px", marginLeft: "158px", fontWeight: "bold" }}>Number of Tuberculosis Cases Chart</h1>
            </div>
        </div>
    );
};
