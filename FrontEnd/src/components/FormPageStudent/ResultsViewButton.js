import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../context/SocketContext";

const ResultsViewButton = (props) => {
   
    const {emit,formId,feedbacksList} = useContext(SocketContext);
    const navigate = useNavigate();
    const navigateHandler = () => {

    const body = {
        formId: formId
    }

    if(body){
        emit('student:feedbackResults', {body});
    }
       
    };

    useEffect(() => {
        if(feedbacksList.boolean){
            feedbacksList.boolean = false;
            navigate('/student/feedbacksstudent');
        }
    }, [feedbacksList]);
 
    return (       
        <button className="btn-result" onClick={navigateHandler}>See Results!</button>  
    );
}

export default ResultsViewButton;