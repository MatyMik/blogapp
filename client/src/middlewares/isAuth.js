import React from "react";

const isAuth = props=> {
    if(props.isAuthenticated) {
        next();
    }
    props.histpry.push("/auth/login");
}

export default isAuth;