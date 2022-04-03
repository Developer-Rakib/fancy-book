import React from 'react';
import { useState, useEffect } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    let [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    console.log(chartData);
    return (
        <div className='flex flex-wrap w-5/6 mx-auto'>
            <div className='w-1/2 border-2 '>
                <LineChart width={730} height={250} data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className='w-1/2 border-2 h-10'></div>
            <div className='w-1/2 border-2 h-10'></div>
            <div className='w-1/2 border-2 h-10'></div>
        </div>
    );
};

export default Dashboard;