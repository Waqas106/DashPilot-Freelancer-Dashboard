import React, { useState } from "react";
import { notifications } from "../data/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notification=()=>{
    const [open, setOpen]=useState(false);
    return(
        <div className="notification-section" style={{position: "relative"}}>
            <div className="ntf-icon" onClick={()=> setOpen(!open)} style={{position: "relative", cursor: "pointer", }}>
                <FontAwesomeIcon icon="bell"/>
                {notifications.length > 0 && <span style={{color: "red", fontSize: "0.9rem", position: "absolute", top: "-5px", fontWeight: "bold" }}>{notifications.length}</span>}
            </div>
            {open && ( 
            <div className="ntf-dropDown" style={{position: "absolute", top: "40px", right: 0, width: "300px", background: "#fff", padding: "10px", zIndex: "2", borderRadius:"12px", boxShadow: "0px 0px 0px 1px rgba(0, 0 , 0, 1)"}}>
                <h4>Notifications</h4>
                {notifications.length ===0?(
                    <p>No Notifications</p>
                ):(
                notifications.slice(0,3).map((notif)=>(
                    <div className="ntf-message" key={notif.id} style={{backgroundColor: "#f4f9f8", padding: "10px", margin:"8px"}}>
                        <p style={{fontSize: "0.9rem"}}>{notif.message}</p>
                        <span style={{fontSize: "0.7rem"}}>{notif.time}</span>
                   </div>
                ))
                )}
            </div>
            )}
        </div>
    )
}

export default Notification;