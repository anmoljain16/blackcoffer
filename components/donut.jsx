'use client'
import Chart from 'chart.js/auto';

import {Bar} from "react-chartjs-2";
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement
} from "chart.js/auto";
import {useEffect, useState} from "react";

const Donut = ({data}) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        // Fetch JSON data or use the provided data directly


        // Extract necessary data fields
        const labels = data.map(item => item.topic + ' - ' + item.sector);
        const nData = data.map(item => item.intensity);

        // Prepare data for Chart.js
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'Intensity',
                    data: nData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1
                }
            ]
        });
    }, []);

    return (
        <div>
            <Bar data={chartData} />
        </div>
    );
};

export default Donut;
