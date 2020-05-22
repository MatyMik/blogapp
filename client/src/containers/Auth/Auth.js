import React,{Fragment, useEffect, useState} from "react";
import InfoCard from "../../components/UI/InfoCard/InfoCard";
import Input from "../../components/UI/Input/Input";
import {useParams} from "react-router-dom"
import "./Auth.css"
import {connect} from "react-redux";
import {login, signup} from "../../store/actions"
import {createFormData} from "./AuthHelpers"
import errorHandler from "../ErrorHandler/ErrorHandler";

const Auth = props =>{
    const state = {
        possiblePages:['login', 'signup'],
        inputTags: [
            {
                type:'email',
                name:'Email',
                pages:['login', 'signup']
            },
            {
                type:'password',
                name:'Password',
                pages:['login', 'signup']
            },{
                type:'password',
                name:'Confirm Password',
                pages:['signup']
            }

        ],
        logins:[{title:"fblogin"}, {title:"googlelogin"}]
    }
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const params = useParams();
    
    useEffect(()=>{
        return state.possiblePages.includes(params.page) ? undefined : props.history.push('/auth/login')
    },[params])

    useEffect(()=>{
        console.log(props);
        if(!props.loading && params.page === 'login' && props.isAuthenticated){
            return props.history.push("/");
        }
        if(!props.loading && params.page === 'signup' && props.signedUp){
            setPasswordValue("");
            setConfirmPasswordValue("");
            return props.history.push("/auth/login");
        }
        return ;
    },[props])

    const message = params.page==='login' ? "Login": "Sign up";
    const switchPageTitle = params.page==='login' ? "Not yet singed up? Register ": "Already signed up? Log in ";
    const setInputValue=(event) => {
        console.log(event.target.value)
        if(event.target.name==='Email') {
            setEmailValue(event.target.value);
        } else if(event.target.name==='Password') {
            setPasswordValue(event.target.value);
        } else if(event.target.name==='Confirm Password') {
            setConfirmPasswordValue(event.target.value);
        }
        //test if input is valid
    }
    const inputs = state.inputTags.map(inputTag =>{
        let setValue = null;
        if(inputTag.name==='Email') {
            setValue = emailValue;
        } else if(inputTag.name==='Password') {
            setValue = passwordValue;
        } else if(inputTag.name==='Confirm Password') {
            setValue = confirmPasswordValue;
        }
        return(
            inputTag.pages.includes(params.page) ? 
            <Input type = {inputTag.type} key = {inputTag.name} title = {inputTag.name} value = {setValue} clicked={setInputValue}/>: 
            null
        )
    })

    
    const onSignupButtonClicked = async function(event){
        event.preventDefault();
        //test if input is valid?
        const functionToExecute = params.page === 'login' ? props.onLogin : props.onSignup;
        functionToExecute(createFormData(emailValue, passwordValue, confirmPasswordValue, params.page))
    }

    const switchPageHandler = () => {
        let nextPage = 'login';
        if (params.page === 'login') {
            nextPage = 'signup';
        }
        props.history.push("/auth/"+nextPage);
    }
    return (
        <Fragment>
            <InfoCard message = {message}
            onEmailClick={setEmailValue}
            emailValue = {emailValue}
            passwordValue={passwordValue}
            confirmPasswordValue={confirmPasswordValue}
            onPasswordClick={setPasswordValue}
            onConfirmPasswordClick={setConfirmPasswordValue}
            logins={state.logins}
            onButtonClicked = {onSignupButtonClicked}
            switchPageTitle = {switchPageTitle}
            buttonType ="LoginButton"
            switchPageHandler = {switchPageHandler}>
            
                {inputs}
            </InfoCard>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        userId: state.auth.userId,
        token: state.auth.token,
        isAuthenticated: state.auth.isAuthenticated,
        signedUp: state.auth.signedUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (userData) => dispatch(login(userData)),
        onSignup: (userData) => dispatch(signup(userData))
    }
}

export default errorHandler(connect(mapStateToProps, mapDispatchToProps)(Auth));