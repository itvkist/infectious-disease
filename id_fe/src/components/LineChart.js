import React from "react";
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const options = {
    legend: {
        onClick: (e, item) => {
            const index = item.datasetIndex;
            const chart = e.chart;
            const meta = chart.getDatasetMeta(index);
            const hidden = meta.hidden === null ? !meta.hidden : null;

            meta.hidden = hidden;

            chart.update();

            chart.resize();
        },
    },
};



function LineChart ({chartData}) {
    return <Line data={chartData} options={options}/>;
}

export default LineChart;