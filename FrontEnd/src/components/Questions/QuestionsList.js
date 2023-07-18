import React, { useContext } from "react";
import QuestionItem from "./QuestionItem";
import {NoQuestion} from "../../styles/CompileForm.styles";
import { SocketContext } from "../../context/SocketContext";

const QuestionsList = () => {

    const {questions} = useContext(SocketContext);
   
    questions.sort((a, b) => {
        return b.numberOfLikes - a.numberOfLikes;
    });
    
    if(questions.length === 0) {
        return (
            <NoQuestion>
                <h3>No questions yet</h3>
            </NoQuestion>
        )
    }
    
    return(

        <ul>
            {questions.map((question) => (
                <QuestionItem
                    id={question.questionId}
                    text={question.text}
                    numberOfLikes={question.numberOfLikes}
                />
            ))}
        </ul>   
    )
};

export default QuestionsList;