import React from "react";
import NewAccess from "../components/HomePageStudent/NewAccess";
import {LoginPageContainer, HomePageTitle} from "../styles/HomePage.styles";
import "../css/General.css";

const HomePageStudent = () => {

    return(
        <LoginPageContainer>
            <HomePageTitle>
                <h1>Student Login</h1>
            </HomePageTitle>
            <NewAccess/>
        </LoginPageContainer>      
    )   
}

export default HomePageStudent;
