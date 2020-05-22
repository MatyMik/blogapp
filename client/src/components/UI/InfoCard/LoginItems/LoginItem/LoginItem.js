import React from "react"
import "./LoginItem.css"

const loginItem = props =>(
    <img alt="" src={require(`../../../../../images/${props.imgName}.png`)} className = "LoginItem"/>
)

export default loginItem;