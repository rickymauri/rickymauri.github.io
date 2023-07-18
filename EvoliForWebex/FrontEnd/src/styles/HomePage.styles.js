import styled from 'styled-components';

export const HomePageContainer = styled.div`
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: #000080;
    display: flex;
    justify-content: center;   
    color: #333;
    text-align: center;
    line-height: 1.6;
    font-size: 16px;
    align-items: center;
    flex-wrap: wrap;
`;

export const HomePageContent = styled.div`
    background-color:whitesmoke;
    width: 60%;
    border: none;
    color: #000080;
    text-align: center;
    font-size: 16px;
    padding: 70px 80px;
    border-radius: 12px;
    transition: all 0.5s;
`;

export const StartTitle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color:#000080;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`;

export const HomePageTitle = styled.h1`
    color: #000080;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const LoginPageContainer = styled.div`
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    color: #333;
    align-items: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;
`;

export const FormTitle = styled.h1`
    color: #000080;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const Login = styled.div`
    margin: 0 auto;
    padding: 40px 70px;
    width: 30%;
    max-width: 300px;
    background: rgb(58, 87, 252);
    border-radius: 12px;
    border: 2px solid #000080;

    & input {
        border-radius: 12px;
        border: 1.5px solid #000080;
    }
`;

export const ErrorContainer = styled.h1`
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    padding: 20px 90px;
    color: #000080;
    text-align: center;
    font-size: 25px;
`;
