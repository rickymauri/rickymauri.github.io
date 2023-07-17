import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../context/SocketContext";

const UpdateResultsButton = (props) => {
    
    const {emit,formId,feedbacksList} = useContext(SocketContext);
    const navigate = useNavigate();

    const navigateHandler = () => {
    
        const body = {
            formId: formId
        }

    if(body){
        emit('teacher:feedbackResults', {body});
    }
      
    };

    useEffect(() => {
        if(feedbacksList.boolean){
            feedbacksList.boolean = false;
            navigate('/professor/feedbacksprofessor');
        }
    }, [feedbacksList]);
 
    return (       
        <button className="btn-result" onClick={navigateHandler}>Update Results!</button>  
    );
}

export default UpdateResultsButton;