import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faChartLine, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="side-title">
         <FontAwesomeIcon icon={faSuitcase} className="title-logo"/>
        <div className="title">
            <h2>DashPilot</h2>
            <p>Dashboard</p>
        </div>
      </div>
      <div className="links">
        <Link to="/" className="nav-link"><FontAwesomeIcon icon = {faChartLine} className="icon"/>Overview </Link>
        <Link to="/projects" className="nav-link"> <FontAwesomeIcon icon={faFolderOpen} className="icon" />Projects</Link>
      </div>
    </div>
  )
}

export default Sidebar
