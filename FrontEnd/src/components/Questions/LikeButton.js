import React, {useContext} from "react";
import { SocketContext } from "../../context/SocketContext";

const LikeButton = (props) => {

    const {emit,formId, questionsLiked, isClosed,studentId} = useContext(SocketContext);
    const {id} = props;
    
    const likeHandler = (event) => {
     
        event.preventDefault();
      
        const body = {
            questionId: id,
            formId: formId
        };

     
        if(body && questionsLiked.indexOf(body.questionId) === -1 && !isClosed) {
            questionsLiked.push(body.questionId);
            emit('student:likedQuestion',{body});
        }
        else if (isClosed && questionsLiked.indexOf(body.questionId) === -1) {
            alert("The form is closed. You cannot like a question.");
        }

    }

    return (    
        <button onClick={likeHandler} className={`btn-like ${(!studentId) ? 'invalid' : ''}`} id={id.id} disabled={`${(!studentId) ? 'true' : ''}`}><span role="img" aria-label="love">&#x2764;&#xFE0F;</span></button>
    );
};

export default LikeButton;