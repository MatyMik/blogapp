import React, {useState} from "react";
import "./PostEditor.css"
import Button from "../../components/UI/Button/Button";
//import {useParams} from "react-router";
import {validator, createFormData} from "./PostEditorHelper";
import {sendPostData} from "../../store/actions"
import {connect} from "react-redux";

const postEditor = props => {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const [validForm, setValidForm] = useState(false);
    
    //const params = useParams();    

    const postSendHandler = () => {
        const formData = createFormData({title, imageUrl, file, content, userId:props.userId});
        props.onSendPostData(formData);
    }

    const fileUploadHandler = event => {
        setFile(event.target.files[0]);
        setImageUrl("");
        event.target.nextElementSibling.innerHTML = "";
        setValidForm(validator(title, imageUrl, file, content));
    }

    const inputImageUrl = event => {
        setImageUrl(event.target.innerHTML);
        setFile("");
        event.target.previousElementSibling.value = "";
        setValidForm(validator(title, imageUrl, file, content));
    }

    const inputTitle = event => {
        setTitle(event.target.innerHTML); 
        setValidForm(validator(title, imageUrl, file, content));
    }

    const inputContent = event => {
        setContent(event.target.innerHTML);
        setValidForm(validator(title, imageUrl, file, content));
    }

    return(
        <div>
            <div className = "PostEditorContainer">
                <div className = "TitleContainer">
                    <h2>
                    Title
                    </h2>
                    <div contentEditable="true" onInput={event =>{inputTitle(event)}}>
                    
                    </div>
                </div>
                <div className = "ImageInputContainer">
                    <h2>
                    Image
                    </h2>
                    <input type = "file"  onChange = {event => fileUploadHandler(event) }/>
                    <div className = "ImageURL" contentEditable="true" value = {imageUrl} onInput={event => inputImageUrl(event)}>

                    </div>
                </div>
                <div className = "ContentContainer">
                    <h2>
                    Content
                    </h2>
                    <div contentEditable="true" value = {content} onInput={event => inputContent(event)} >

                    </div>
                </div>
                
            </div>
            <Button buttonType = "LoginButton" type = 'submit' title = 'Add new Post' clicked = {()=>postSendHandler()} disabled = {!validForm}  />       
        </div>
 
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSendPostData: (formData) => dispatch(sendPostData(formData))
    }
}

const mapStateToProps = state => {
    return {
        userId:state.auth.userId
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(postEditor);