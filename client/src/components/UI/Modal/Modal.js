import React, {Fragment} from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
import Button from "../Button/Button";

const modal = props => (
    props.showPopup ? (
    <Fragment>
        <Backdrop clicked = {props.clicked}/>
        <div className = "Modal">
        <img alt="" src={require(`../../../images/error.jpg`)} className = "ErrorImage"/>
            <div className = "MessageContainer">
                
                <div>
                    {props.message}
                </div>
            </div>
            <Button buttonType = "ErrorButton" title = "Close" clicked = {props.clicked}/>
        </div>
    </Fragment>
    ):null
)

export default modal;