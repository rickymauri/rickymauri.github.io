import React,{useState} from "react";
import NewForm from "../components/FormPageProfessor/NewForm";
import {LoginPageContainer, FormTitle} from "../styles/HomePage.styles";

const CreateForm = () => {

  const[forms, setForm] = useState([]);

  const onAddFormHandler = (form) => {
    setForm((prevForm) => {
    return [form, ...prevForm];
  });
  }

  return(
    <LoginPageContainer>
      <FormTitle>
        <h1>Create a new form</h1>
      </FormTitle>
      <NewForm onAddForm = {onAddFormHandler}/>
    </LoginPageContainer>
  )
}

export default CreateForm;