import React, {useState, Fragment, useEffect} from "react";
import axios from "../../axiosInstance";
import Modal from "../../components/UI/Modal/Modal";

const errorHandler = (WrappedComponent) => {
    
    //get the error
    //that comes from axios, so I have to import axios
    // return the wrapped component with an extra modal added that if there is an error the modal will become visible

    return props => {
        const [error, setError] = useState(null)
        const [showPopup, setShowPopup] = useState(false);
        
        useEffect( () => {
            const reqInterceptor = axios.interceptors.request.use( req => {
                setError(null);
                setShowPopup(false);
                return req;
            })
            const resInterceptor = axios.interceptors.response.use( res => res , err => {
                
                if (err) {
                    setShowPopup(true)
                }
                    console.log(err.response);
                setError(err.response.data.message);
            })

            return function cleanup() {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            }
        },[])
        const closePopup = () => {
            setShowPopup(false)
        }

        return (
            <Fragment>
                <Modal showPopup = {showPopup} message = {error} clicked = {closePopup} />
                <WrappedComponent {...props} />
            </Fragment>
        )
    }
}

export default errorHandler;