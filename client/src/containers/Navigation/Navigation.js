import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./Navigation.css"

const navigation = props => {
    const state = {
        links: [
            {
                linkTitle:"My Posts",
                to:"/posts"
            },{
                linkTitle:"New Post",
                to:"/newpost"
            },{
                linkTitle:"Profile",
                to:"/profile"
            }
        ]
    }
    const navigationItems = state.links.map(link =>{
        return(
            <NavigationItem to={link.to} linkTitle={link.linkTitle} key = {link.linkTitle} />
        )
    })

    return(
        <div className = "Container">
            {navigationItems}
            <button id = "logoutButton">Logout</button>
        </div>
    )
}

export default navigation;