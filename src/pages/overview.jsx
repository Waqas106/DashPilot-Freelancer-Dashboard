import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./overview.css";
import { Activity, Stats } from "../data/mockData";
import EarningChart from "../components/earningChart";
import ProjectTypesChart from "../components/projectTypeChart"

const Overview = () => {
  return (
    <>
      <div className="stats-section">
        <div className="stats-cards">
          {Stats.map((stat, index) => (
            <div className="st-card" key={index}>
              <div className="st-txt">
                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
              </div>
              <FontAwesomeIcon
                icon={["fas", stat.icon]}
                className={`st-icon ${stat.name}`}
              />
            </div>
          ))}
        </div>
        <div className="smy-cards">
          <div className="earnings">
            <h3>Monthly Earnings</h3>
            <EarningChart/>
          </div>
          <div className="project">
            <h3>Project Types</h3>
            <ProjectTypesChart/>
          </div>
        </div>
        <div className="activity-section">
            <h3>Recent Activity</h3>
                <div className="activity-cards">
                   {Activity.map((activity, index)=>(
                     <div className="act-card" key={index}>
                        <div className="hd">
                          <FontAwesomeIcon icon={["fas", activity.icon]} className={`activity ${activity.class}`}/>
                            <div className="txt">
                              <h4>{activity.title}</h4>
                              <p>{activity.text}</p>
                            </div>
                        </div>
                      <p>{activity.time}</p>
                    </div>
                   ))}
                </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
