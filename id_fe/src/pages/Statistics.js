import { React, useState, } from "react";
import LineChart from "components/LineChart";
import { DiseaseData } from "Data";

export default () => {
    
    const[pneumoniaData, setPneumoniaData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.pneumonia),
            }],
        })
    const[fluData, setFluData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.flu),
            }],
        })
    const[tuberculosisData, setTuberculosisData] = useState(
        {
            labels: DiseaseData.map((data) => data.month),
            datasets: [{
                label: "Number of Cases",
                data: DiseaseData.map((data) => data.tuberculosis),
            }],
        })

    return (
        <div style={{width: 700}}> 
            <LineChart chartData={pneumoniaData} />
            <LineChart chartData={fluData} />
            <LineChart chartData={tuberculosisData} />
        </div>
    );
};
