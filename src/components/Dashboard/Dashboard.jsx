import React from 'react';
import { useState, useEffect } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    let [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])

    // data 
    const ChartData1 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];
    const ChartData2 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];

    return (
        <div className='flex flex-wrap w-full sm:w-5/6 mx-auto my-5'>
            <div className='w-full lg:w-1/2 '>
                <ResponsiveContainer className="mx-auto" width={'90%'} height={260}>
                    <LineChart data={chartData}
                        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip className=''></Tooltip>
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#32b3ea" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className='w-full lg:w-1/2'>
                <ResponsiveContainer className="mx-auto" width={'90%'} height={260}>
                    <AreaChart data={chartData}
                        margin={{ top: 10, right: 0, left: 10, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#32b3ea" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#32b3ea" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#32b3ea" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className='w-full lg:w-1/2 mt-5'>
                <ResponsiveContainer className="mx-auto" width={'90%'} height={260}>
                    <BarChart margin={{ top: 10, right: 0, left: 20, bottom: 0 }} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#32b3ea" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className='w-full lg:w-1/2 mt-5'>
                <ResponsiveContainer className="mx-auto" width={'90%'} height={260}>
                    <PieChart>
                        <Tooltip />
                        <Pie data={ChartData1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#32b3ea" />
                        <Pie data={ChartData2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;