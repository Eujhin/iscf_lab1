import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

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

const FloatingCharts = ({seconds, timestamps, xValues, yValues, zValues}) => {
    
  const [xchartData, setXChartData] = useState({
    datasets: []
  });
  const [ychartData, setYChartData] = useState({
    datasets: []
  });
  const [zchartData, setZChartData] = useState({
    datasets: []
  });

  const [chartOptions, setChartOptions] = useState({});

  console.log(seconds)
  console.log(timestamps)

  var minVal = 0

  if(!seconds){
    seconds = []
    xValues = [], yValues = [], zValues = []
  }

  for(let i=0; i < seconds.length-1; i++){
    if(seconds[seconds.length-1] - seconds[i] < 15){
        minVal = i
        break
    }
  }

    useEffect(() => {
        setXChartData({
            labels: seconds.slice(-minVal),
            datasets: [
            {
                label: "X",
                data: xValues.slice(-minVal),
                borderColor: 'red',
                backgroundColor:'red',
            },
            ],
        });
        setYChartData({
            labels: seconds.slice(-minVal),
            datasets: [
            {
                label: "Y",
                data: yValues.slice(-minVal),
                borderColor: 'springGreen',
                backgroundColor:'springGreen',
            },
            ],
        });
        setZChartData({
            labels: seconds.slice(-minVal),
            datasets: [
            {
                label: "Z",
                data: zValues.slice(-minVal),
                borderColor: 'lightSkyBlue',
                backgroundColor:'lightSkyBlue',
            },
            ],
        });

        setChartOptions({

            plugins: {
                legend: {
                    display: false
                },
                // title:{
                //     display: true,
                //     text: 'X axis'
                // },
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
                    min: minVal,
                },
                yAxis: {
                    display: false,
                },
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [timestamps]);

  return (
    <div className='p-8 grid md:grid-cols-3 grid-cols-1 gap-8'>
      <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <div className="grid place-content-center text-lg">X Axis</div>
        <Line data={xchartData} options={chartOptions} />
      </div>

      <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <div className="grid place-content-center text-lg">Y Axis</div>
        <Line data={ychartData} options={chartOptions} />
      </div>

      <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <div className="grid place-content-center text-lg">Z Axis</div>
        <Line data={zchartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default FloatingCharts;