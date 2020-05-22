import React from "react";
import "./InfoCard.css"
import LoginItems from "./LoginItems/LoginItems";
import Button from "../Button/Button";

const infoCard = props =>{
    return(
        <div className= "InfoCard">
        <h1>{props.message}</h1>
        <LoginItems logins={props.logins}/>
        <div className="FullInputContainer">
                {props.children}
                <Button buttonType = {props.buttonType}title = {props.message} clicked = {props.onButtonClicked} type = 'submit'/>
        
            <div  className = "SwitchPage">
                {props.switchPageTitle} <div onClick= {props.switchPageHandler} className="Span"> here </div>
            </div>
            </div>
        </div>
    )
}

export default infoCard;