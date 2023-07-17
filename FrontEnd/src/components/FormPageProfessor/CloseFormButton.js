import React,{useContext} from "react";
import { SocketContext } from "../../context/SocketContext";

const CloseFormButton = () => {
    
    const {emit,formId} = useContext(SocketContext);

    const navigateHandler = () => {

        const body = {
            formId: formId
        };

        if(body) {
            document.getElementById('button').disabled=true;   
            emit('teacher:closeForm', {body});
            alert("Form closed");
        }
    };
    
    return (
        <button className="btn-close" onClick={navigateHandler} id='button'>Close Form</button>
    );
}

export default CloseFormButton;