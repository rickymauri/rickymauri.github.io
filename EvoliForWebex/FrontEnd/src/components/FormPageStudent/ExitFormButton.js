import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import {SocketContext} from '../../context/SocketContext';

const ExitFormButton = () => {
    
    const navigate = useNavigate();
    const {closeSocket} = useContext(SocketContext);

    const navigateHandler = () => {
        closeSocket();
        navigate('/');
    };
    
    return (
        <button className="btn-close" onClick={navigateHandler}>Exit</button>
    );
}
 
export default ExitFormButton;