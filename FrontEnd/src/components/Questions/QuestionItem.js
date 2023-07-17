import React from "react";
import {TimeView, QuestionsList, QuestionContainer, QuestionText}   from "../../styles/CompileForm.styles";
import LikeButton from "./LikeButton";

const QuestionItem = (question) => {

    return(
        <QuestionsList>
            <h3>
                {question.text}
            </h3>
            <QuestionContainer>
                <QuestionText>
                    <h3>{question.numberOfLikes}</h3>
                </QuestionText>
                <LikeButton id={question.id}/>
            </QuestionContainer>
            <TimeView>
                {question.time}
            </TimeView>
        </QuestionsList>
    );
};

export default QuestionItem;
