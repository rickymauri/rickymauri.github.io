import React from "react";
import {DeleteButton, LikeContainer, LikeText, QuestionContainer, QuestionText}   from "../../styles/CompileForm.styles";
import LikeButton from "./LikeButton";
import DeleteQuestionButton from "./DeleteQuestionButton";

const QuestionItem = (props) => {

    const {id, text, numberOfLikes} = props;
    const [isDeleted, setIsDeleted] = React.useState(false);

    return(
        <div className={`questions-list ${isDeleted ? 'invalid' : ''}`}>
            <QuestionText>
                {text}
            </QuestionText>
            <QuestionContainer>
                <DeleteButton>
                    <DeleteQuestionButton
                        isDeleted={isDeleted}
                        onDeleteQuestion= {setIsDeleted}
                    />
                </DeleteButton>
                <LikeContainer>
                    <LikeText>
                        {numberOfLikes}
                    </LikeText>
                    <div>
                        <LikeButton 
                            id={id}
                        />
                    </div>
                </LikeContainer>
            </QuestionContainer>
        </div>
    );
};

export default QuestionItem;
