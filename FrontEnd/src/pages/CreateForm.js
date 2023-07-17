import React from "react";
import NewForm from "../components/FormPageProfessor/NewForm";
import {LoginPageContainer, FormTitle} from "../styles/HomePage.styles";

const CreateForm = () => {

  return(
    <LoginPageContainer>
      <FormTitle>
        <h1>Create a new form</h1>
      </FormTitle>
      <NewForm/>
    </LoginPageContainer>
  )
}

export default CreateForm;