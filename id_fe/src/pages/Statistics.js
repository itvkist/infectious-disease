import { React, useState, } from "react";
import LineChart from "components/LineChart";
import { DiseaseData } from "Data";

export default () => {

    const [fluData, setFluData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Flu Cases",
                data: DiseaseData.map((data) => data.flu),
            },
            {
                label: "Number of Cases Prediction",
                data: [null, null, null, null, null, null, null, 3, 3, 3, 1, 0],
            }],
        })
    const [covid19Data, setCovid19Data] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Covid19 Cases",
                data: DiseaseData.map((data) => data.covid19),
            },
            {
                label: "Number of Cases Prediction",
                data: [null, null, null, null, null, null, null, 3, 1, 3, 1, 1],
            }],
        })
    const [pneumoniaData, setPneumoniaData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Pneumonia Cases",
                data: DiseaseData.map((data) => data.pneumonia),
            },
            {
                label: "Number of Cases Prediction",
                data: [null, null, null, null, null, null, null, 10, 9, 6, 8, 9],
            }],
        })
    const [hepatitisData, setHepatitisData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Hepatitis Cases",
                data: DiseaseData.map((data) => data.hepatitis),
            },
            {
                label: "Number of Cases Prediction",
                data: [null, null, null, null, null, null, null, 1, 1, 2, 2, 1],
            }],
        })
    const [chickenpoxData, setChickenpoxData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Chickenpox Cases",
                data: DiseaseData.map((data) => data.chickenpox),
            },
            {
                label: "Number of Cases Prediction",
                data: [null, null, null, null, null, null, null, 1, 1, 3, 4, 2],
            }],
        })
    const [dengueData, setDengueData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Dengue Cases",
                data: DiseaseData.map((data) => data.dengue),
            },
            {
                label: "Number of Cases Prediction",
                data: [null, null, null, null, null, null, null, 6, 3, 2, 3, 2],
            }],
        })
    const [tuberculosisData, setTuberculosisData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Tuberculosis Cases",
                data: DiseaseData.map((data) => data.tuberculosis),
            },
            {
                label: "Number of Cases Prediction",
                data: [null, null, null, null, null, null, null, 2, 1, 3, 4, 2],
            }],

        })

    return (

        <div style={{ marginTop: "20px", display: "flex" }}>
            <div style={{ marginTop: "0px", marginLeft: "120px" }}>
                <LineChart chartData={fluData} />
                <h1 style={{ marginTop: "8px", marginBottom: "22px", marginLeft: "80px", fontWeight: "bold" }}>Biểu đồ số ca bệnh cúm</h1>
                <LineChart chartData={covid19Data} />
                <h1 style={{ marginTop: "8px", marginBottom: "22px", marginLeft: "75px", fontWeight: "bold" }}>Biểu đồ sô ca bệnh covid</h1>

            </div>
            <div style={{ marginTop: "0px", marginLeft: "160px" }}>
                <LineChart chartData={hepatitisData} />
                <h1 style={{ marginTop: "8px", marginBottom: "22px", marginLeft: "78px", fontWeight: "bold" }}>Biểu đồ số ca bệnh viêm gan</h1>
                <LineChart chartData={chickenpoxData} />
                <h1 style={{ marginTop: "8px", marginBottom: "22px", marginLeft: "76px", fontWeight: "bold" }}>Biểu đồ số ca bệnh thủy đậu</h1>
                <LineChart chartData={pneumoniaData} />
                <h1 style={{ marginTop: "8px", marginBottom: "22px", marginLeft: "72px", fontWeight: "bold" }}>Biểu đồ số ca bệnh viêm phổi</h1>
            </div>
            <div style={{ marginTop: "0px", marginLeft: "160px" }}>
                <LineChart chartData={dengueData} />
                <h1 style={{ marginTop: "8px", marginBottom: "22px", marginLeft: "55px", fontWeight: "bold" }}>Biểu đồ số ca bệnh sốt xuất huyết</h1>
                <LineChart chartData={tuberculosisData} />
                <h1 style={{ marginTop: "8px", marginBottom: "22px", marginLeft: "92px", fontWeight: "bold" }}>Biểu đồ số ca bệnh lao</h1>
            </div>
        </div>
    );
};
