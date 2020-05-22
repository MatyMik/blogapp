import React from "react"
import LoginItem from "./LoginItem/LoginItem";
import "./LoginItems.css"

const loginItem = props => {
    const loginitems = props.logins.map(login=>(
        <LoginItem imgName={login.title} key = {login.title}/>
    ))
    return(
        <div className = "LoginItemsContainer">
            {loginitems}
        </div>
    )
}

export default loginItem;