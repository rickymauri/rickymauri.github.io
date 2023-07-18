import React from "react";
import { Link } from "react-router-dom";
import { StartTitle } from "../../styles/HomePage.styles";
import Button from "./Button";
import { HomePageContent } from "../../styles/HomePage.styles";

const Inizio = (props) => {
    
    return(
        <HomePageContent>
            <StartTitle>
                <h1>WELCOME!</h1>
                <h3>Choose one option:</h3>
            </StartTitle>
            <div>
                <Link to="/professor/form">
                    <Button type="submit" onClick={props.onClick}>CREATE FORM
                    </Button>
                </Link>
                <Link to="/student">
                    <Button type="submit" onClick={props.onClick}>JOIN FORM
                    </Button>
                </Link>
            </div>
        </HomePageContent>
    )
}

export default Inizio;