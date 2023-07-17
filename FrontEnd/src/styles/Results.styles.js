import styled from "styled-components";

export const FeedbackTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    margin-top: -3rem;
    font-weight: bold;
    color: #000080;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`;

export const StudentsNumber = styled.div`
    font-size: 20px;
    color: black;
    font-weight: bold;
    margin-right: 35px;
    margin-top: 15px;
`;

export const NumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`;

export const ChartContainer = styled.div`
    padding: 1rem;
    border-radius: 12px;
    background-color: #E6E6FA;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
    width: 20rem;
  
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

    & p {
        margin: 4rem 0;
        font-size: 1rem;
        color: #000080;
    }
`;

export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ResultsTitle = styled.p`
    color: #000080;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`;

export const ResultsList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;