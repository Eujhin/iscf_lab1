import React, {useState, useEffect} from "react";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { timestampValues, yValues } from "@/pages/database";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const YChart = () => {

    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
        setChartData({
            labels: timestampValues,
            datasets:[
                {
                    label: 'Y',
                    data: yValues,
                    borderColor: 'springGreen',
                    backgroundColor:'springGreen'
                },
            ]
        })
        setChartOptions({

            plugins: {
                legend: {
                    display: false
                },
                title:{
                    display: true,
                    text: 'Y axis'
                },
            },
            elements: {
                line: {
                    borderWidth: 2,
                },
                point: {
                    radius: 0,
                    hitRadius: 3,
                }
            },
            scales: {
                xAxis: {
                    display: false,
                },
                yAxis: {
                    display: false,
                },
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
            <Line data={chartData} options={chartOptions} />
        </div>
    )
}

export default YChart