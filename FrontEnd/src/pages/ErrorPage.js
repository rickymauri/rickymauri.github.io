import React from "react";
import {ErrorContainer} from "../styles/HomePage.styles";

const ErrorPage = () => {
    return(
        <ErrorContainer>
            <h5>404 Error</h5>
            <h1>Oops!</h1>
            <br></br>
            <h3>We can't seem to find the page you're looking for.</h3>
        </ErrorContainer>
    )
}

export default ErrorPage;