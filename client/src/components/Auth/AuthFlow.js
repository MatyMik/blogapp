// Signup and Login form All in 1
import 'AuthFlow.css';
import React,{useEffect, useParams} from "react";

const authform = props =>{
    const params = useParams()
    console.log(params)
    useEffect(()=>{
        console.log(params)
    },[])
    return(
        <div>
            
        </div>
    )
}

export default authform;