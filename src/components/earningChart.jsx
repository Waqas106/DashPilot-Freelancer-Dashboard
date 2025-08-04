import React from "react";
import { BarChart, Bar, XAxis, YAxis,Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { earningData } from "../data/mockData";

const EarningChart=()=>{
    return(
        <>
         <ResponsiveContainer width="100%" height={300}>
        <BarChart data={earningData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="earnings" fill="#8884d8" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
        </>
    )
}

export default EarningChart;