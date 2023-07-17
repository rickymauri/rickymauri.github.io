import styled from "styled-components";

export const FormContainer = styled.div`
    margin: 0 auto;
    width: 60%;
    padding: 20px;
    border: 2px solid #B0C4DE;
    border-radius: 10px;
    background: #E6E6FA;
`;

export const FormTitle = styled.h1`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #000080;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`;

export const NewQuestionContainer = styled.div`
    width: 80%;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    color: #000080;
`;

export const TextAreaContainer = styled.div`
    margin: 0 auto;
    margin-left: 10px;
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    border-radius: 10px;
    font-weight: bold;
    color: #000080;
`;


export const StudentTitle = styled.h2`
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    color: #000080;    
`;

export const QuestionsList  = styled.div`
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 13px;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
    align-content: center;
    box-shadow: 0 0 10px #ccc;
    transition: a
    width: 30px;
    word-wrap: break-word;
`;

export const QuestionContainer = styled.div`
    display: flex;
    justify-content:end;
    flex-direction: column;
    align-items: flex-end;
    padding: 3px;
`;

export const LikeText = styled.div`
   margin-top: 11px;
   font-weight: bold;
   font-size: 14px;
`;

export const NoQuestion = styled.h3`
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    color: rgb(255, 0, 0);
`;

export const LikeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const DeleteButton = styled.div`
    margin-top: max-content;
    margin-right: 4px;
`;

export const QuestionText = styled.div`
    padding-right: 40px;
    padding-top: 10px;
    font-weight: bold;
    font-size: 15px;
`;