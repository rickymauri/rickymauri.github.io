import React, {useContext} from "react";
import { SocketContext } from "../../context/SocketContext";

const LikeButton = (id) => {

    const {emit,formId, questionsLiked, isClosed,studentId} = useContext(SocketContext);
    
    const likeHandler = (event) => {
     
        event.preventDefault();
      
        const body = {
            questionId: id.id,
            formId: formId
        };

        if(!studentId) {
            alert("You cannot like a question as a teacher.");
        }
        else if(body && questionsLiked.indexOf(body.questionId) === -1 && !isClosed) {
            questionsLiked.push(body.questionId);
            emit('student:likedQuestion',{body});
        }
        else if (isClosed && questionsLiked.indexOf(body.questionId) === -1) {
            alert("The form is closed. You cannot like a question.");
        }

    }

    return (    
        <button onClick={likeHandler} className="btn-like" id={id.id}>&#x2764;&#xFE0F;</button>
    );
};

export default LikeButton;