import * as actionTypes from "../actions/actionTypes";

const initialState = {
    userId:null,
    error:null,
    loading:false,
    isAuthenticated: false,
    signedUp: false
}

const authReducer = (state=initialState, action) =>{
    switch (action.type) {
        case (actionTypes.LOGIN_START):
            return {
                ...state,
                loading:true,
                isAuthenticated: false
            }
        case (actionTypes.LOGIN_SUCCESS):
            return {
                ...state,
                loading:false,
                userId:action.userId,
                token:action.token,
                isAuthenticated: true
            }
        case (actionTypes.LOGIN_FAILED):
            return {
                ...state,
                loading:false,
                error: action.error
            }
        case(actionTypes.SIGNUP_START):
            return {
                ...state,
                loading: true
            }
        case(actionTypes.SIGNUP_FAILED):
            return {
                ...state,
                error:action.error,
                loading:false
            }
        case(actionTypes.SIGNUP_SUCCESS):
            return {
                ...state,
                loading: false,
                signedUp: true
            }
        default:
            return state;
    }
    
}

export default authReducer;