import React, {useState, useContext} from "react";
import { NewQuestionContainer, TextAreaContainer } from "../../styles/CompileForm.styles";
import { SocketContext } from "../../context/SocketContext";
const QuestionForm = () => {
   
    const {emit, formId, isClosed} = useContext(SocketContext);
    const [enteredText, setEnteredText] = useState('');
    const [isValid, setIsValid] = useState(true);
   
    const textChangeHandler = (event) => {
        setEnteredText(event.target.value);
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const body = {
            questionText: enteredText,
            formId: formId
        }        
        
        if (body.questionText.trim().length === 0) {
            setIsValid(false);
            return;
        }

        if(body && !isClosed) {
            emit('student:submitQuestion',{body});
        }
        else if (isClosed) {
            alert("The form is closed. You cannot submit a question.");
        }
        
        setEnteredText('');
    };

    return (
        <NewQuestionContainer>
            <form onSubmit={submitHandler}>
                <h4>New Question:</h4>
                <TextAreaContainer>
                    <textarea className="textarea" type="textarea" onChange={textChangeHandler} value={enteredText} placeholder="Enter your question..."></textarea>
                </TextAreaContainer>
                <button className="btn-question" type="submit">Add Question</button>
            </form>
        </NewQuestionContainer>
    );
};

export default QuestionForm;