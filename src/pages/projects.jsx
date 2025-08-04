import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./projects.css";
import { Projectss, colors } from "../data/mockData";

const Projects = ()=>{
const [selectedStatus, setStatus]=useState('All');

const filteredProjects= Projectss.filter((project)=>{
    if(selectedStatus==="All") return true;
    return project.status === selectedStatus;
})

    return(
        <>
        <div className="projects-section">
            <div className="page-title">
                <h2>My Projects</h2>
                <p>Manage and track all your client projects</p>
            </div>
            <div className="filter-section">
                Status:
                <select value={selectedStatus} onChange={(e)=> setStatus(e.target.value)}>
                    {["All","Completed", "In-Review", "Active", "Planning"].map((sts)=>(
                        <option key={sts} value={sts}>
                            {sts}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className="projects-cards">

                {filteredProjects.map((project,index)=>{
                    const color = colors[index % colors.length];
                return(  
                    
                    <div className="project-card" key={index}>
                            <div className="project-title">
                              <div className="prj">
                                <FontAwesomeIcon icon={["fas", project.titleIcon]} className="icon" style={{color:color.main, backgroundColor:color.bg,  padding: "8px",borderRadius: "12px"}}/>
                                <div className="title">
                                    <h4>{project.title}</h4>
                                    <p>{project.company}</p>
                                </div>
                              </div>
                              <p className={`status ${project.status.toLowerCase()}`}>{project.status}</p>

                            </div>
                            <p className="pgh">{project.des}</p>
                            <span> <FontAwesomeIcon icon="calendar" /> Due: {project.date}</span>
                            <span><FontAwesomeIcon icon="dollar-sign" /> {project.payment}</span>
                            <span><FontAwesomeIcon icon="clock" /> {project.timeRem}</span>
                             <a>View details</a>
                        
                    </div>
                );
               })}
            </div>
        </div>
        </>
    )
}

export default Projects