import React from "react";
import { useNavigate } from "react-router-dom";

const ResultsViewButton = () => {
   
    const navigate = useNavigate();
    const navigateHandler = () => {
    
        navigate('/student/feedbacksstudent');
        
    };
 
    return (       
        <button className="btn-result" onClick={navigateHandler}>See Results!</button>  
    );
}

export default ResultsViewButton;