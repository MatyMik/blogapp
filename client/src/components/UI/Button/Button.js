import React from "react";
import "./Button.css";

const button = props => {
    return(
        <div className="ButtonContainer">
            <button className={props.buttonType} type = {props.type} onClick={props.clicked} disabled = {props.disabled ? "disabled" :null} >
                {props.title}
            </button>
        </div>

    
    
    )
}

export default button;