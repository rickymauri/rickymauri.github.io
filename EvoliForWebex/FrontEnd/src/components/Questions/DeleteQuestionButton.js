import React from "react";
import { SocketContext } from "../../context/SocketContext";
import { useContext } from "react";

const DeleteQuestionButton = (props) => {

    const {studentId, isClosed} = useContext(SocketContext);
    const {isDeleted, onDeleteQuestion} = props;
    
    const deleteHandler = (event) => {
     
        event.preventDefault();

        if(isClosed){
            onDeleteQuestion(true);
        }
        else {
            alert("The form is not closed. You cannot delete a question.");
        }
        
    };

    return (    
        <button onClick={deleteHandler} className={`btn-delete ${(studentId) ? 'invalid' : ''}`} disabled={`${(studentId || isDeleted) ? 'true' : ''}`}>&#10006;</button>
    );
};

export default DeleteQuestionButton;
