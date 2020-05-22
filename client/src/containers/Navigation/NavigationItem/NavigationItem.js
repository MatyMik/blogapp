import React from "react";
import './NavigationItem.css';
import {NavLink} from "react-router-dom"

const navigationItem = props =>{
    return(
        <div className = "NavigationItem">
            <NavLink to={props.to} className="inactive" activeClassName="active">{props.linkTitle}</NavLink>
        </div>
    )
}

export default navigationItem;