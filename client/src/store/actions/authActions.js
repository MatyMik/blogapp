import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

export const loginStarted = () => {
    return {
        type:actionTypes.LOGIN_START
    }
}

export const loginSuccess = (userId, token)=>{
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userId,
        token
    }
}

export const loginFailed = (error) => {
    return {
        type:actionTypes.LOGIN_FAILED,
        error   
    }
}

export const login = (userData) => {
    return dispatch => {
        dispatch(loginStarted());
        axios.post("/auth/login", userData)
        .then(response => {
            console.log(response.data);
            //dispatch(loginSuccess());
        })
        .catch(err=>dispatch(loginFailed(err)))
    }
}

export const singupStarted = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
}

export const singupFailed = (error) => {
    return {
        type : actionTypes.SIGNUP_FAILED,
        error
    }
}

export const signupSuccess = () => {
    return {
        type: actionTypes.SIGNUP_SUCCESS
    }
}

export const signup = (userData) => {
    return dispatch => {
        dispatch(singupStarted());
        axios.post("/auth/signup", userData)
        .then(response => {
            dispatch(signupSuccess())
        })
        .catch(err => dispatch(singupFailed(err)))
    }
}