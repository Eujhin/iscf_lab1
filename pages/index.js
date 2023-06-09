import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Chart from '../components/Grafico'
import DataRefresh from '../components/DataRefresh'
import Alarms from '@/components/alarms'

import IndCharts from '@/components/IndCharts'
//import FloatingCharts from '@/components/floatingCharts'

import DashboardSWR from './swrdashboard.js'

import React, { useState } from "react";

export default function Home() {


//console.log(xValues)

const [intervalTime, setIntervalTime] = useState(2);

const {seconds, timeStamps, xValues, yValues,  zValues} = DashboardSWR(intervalTime)

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard monitorização ISCF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-blue-100 min-h-screen'>
        <Header /> 
        <div className='p-8 grid md:grid-cols-4 grid-cols-1 gap-4'>
          <Chart seconds={seconds} timestamps={timeStamps} xValues={xValues} yValues={yValues} zValues={zValues}/>
          <DataRefresh intervalTime={intervalTime} setIntervalTime={setIntervalTime}/>
          {/* <Alarms /> */}
        </div>
          <IndCharts seconds={seconds} timestamps={timeStamps} xValues={xValues} yValues={yValues} zValues={zValues}/>
          {/* <FloatingCharts seconds={seconds} timestamps={timeStamps} xValues={xValues} yValues={yValues} zValues={zValues}/> */}
      </main>
    </>
  )
}
