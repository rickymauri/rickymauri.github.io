import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import {SocketContext} from '../../context/SocketContext';

const ExitFormProfessorButton = () => {
    
    const navigate = useNavigate();
    const {isClosed,emit,formId,closeSocket} = useContext(SocketContext);

    const navigateHandler = () => {

        const body = {
            formId: formId
        };

        if(!isClosed) {
            emit('teacher:closeForm', {body});
        };

        closeSocket();
        navigate('/');
    };

    return (
        <button className="btn-close" onClick={navigateHandler}>Exit</button>
    );
}
 
export default ExitFormProfessorButton;