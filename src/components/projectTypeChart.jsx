import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { projectTypes } from "../data/mockData";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const ProjectTypesChart=()=>{
    return(
        <>
         <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie 
            data={projectTypes}
            dataKey="value"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {projectTypes.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
        </>

    )
}

export default ProjectTypesChart;