import * as actionTypes from './actionTypes';
import axios from "../../axiosInstance"

export const postDataSendStart = ()=>{
    return {
        type: actionTypes.POST_DATA_SEND_START
    }
}

export const postDataSendSuccess = ()=>{
    return { 
        type:actionTypes.POST_DATA_SEND_SUCCESS
}
}

export const postDataSendFailed = (error)=>{
    return { 
        type: actionTypes.POST_DATA_SEND_FAILED,
        error
    }
}

export const sendPostData = formData => {
    return dispatch => {
        dispatch(postDataSendStart())
        axios.post("/post/addnewpost", formData)
        .then(result => {
            dispatch(postDataSendSuccess())
        })
        .catch(error => dispatch(postDataSendFailed(error)))
    }
}