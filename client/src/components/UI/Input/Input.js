import React from "react"
import "./Input.css"

const input = props =>{
    return(
        <div className = "InputContainer">
            <label htmlFor = {props.title}>{props.title}</label>
            <input type={props.type} name = {props.title} className = "Input" onChange={event =>{props.clicked(event)}}/>
        </div>
    )
}

export default input;