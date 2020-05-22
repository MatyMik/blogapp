import React from "react";
import "./Backdrop.css"

const backdrop = props => {
    return (
        <div onClick = {props.clicked} className = "Backdrop"> </div>        
    )
}

export default backdrop;