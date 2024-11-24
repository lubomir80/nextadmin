"use client"
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
   {
      name: 'Sun',
      visit: 4500,
      click: 2600,
   },
   {
      name: 'Mon',
      visit: 4000,
      click: 2400,
   },
   {
      name: 'Tue',
      visit: 3500,
      click: 900,
   },
   {
      name: 'Wed',
      visit: 4000,
      click: 2400,
   },
   {
      name: 'Thu',
      visit: 3000,
      click: 1398,
   },
   {
      name: 'Fri',
      visit: 2000,
      click: 9800,
   },
   {
      name: 'Sat',
      visit: 2780,
      click: 3908,
   },
];


function Chart() {
   return (
      <div className={styles.container}>
         <h2 className={styles.title}>Weekly Recap</h2>
         <ResponsiveContainer width="100%" height="90%">
            <LineChart
               width={500}
               height={300}
               data={data}
               margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
               <Legend />
               <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
               <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
            </LineChart>
         </ResponsiveContainer>
      </div>
   )
}

export default Chart