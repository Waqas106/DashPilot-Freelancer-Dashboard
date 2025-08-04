import React from "react";
import Notification from "./notification";

const  Header=()=>{
    return(
       <>
        <header>
        <h2>DashPilot</h2>
        <div className="hdr">
            <p>Streamline Your Day</p>
            <Notification/>
        </div>
        </header>
       </>
    )
}

export default Header