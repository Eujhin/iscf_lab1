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
import { timestampValues, xValues, yValues, zValues } from "@/pages/database";

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

const Grafico = () => {

    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
        setChartData({
            labels: timestampValues,
            datasets:[
                {
                    label: 'X',
                    data: xValues,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor:'rgb(53, 162, 235, 0.4)'
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title:{
                    display: true,
                    text: 'Positions'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
            <Line data={chartData} options={chartOptions} />
        </div>
    )
}

export default Grafico