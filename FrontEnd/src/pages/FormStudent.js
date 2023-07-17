import React, { useEffect, useContext } from "react";
import QuestionsList from "../components/Questions/QuestionsList";
import ResultsViewButton from "../components/FormPageStudent/ResultsViewButton";
import { FormTitle, StudentTitle } from "../styles/CompileForm.styles";
import QuestionForm from "../components/Questions/QuestionForm";
import FeedbackForm from "../components/FormPageStudent/FeedbackForm";
import { SocketContext } from "../context/SocketContext";

const FormStudent = () => {

  const {isClosed} = useContext(SocketContext);
  
  useEffect(() => {
    if(isClosed) {
      alert("Form is closed. You can't answer anymore. Check the results.");
    }
  }, [isClosed]);


  return(
    <div>
      <FormTitle>
        <h1>COMPILE THE FORM</h1>
      </FormTitle>
      <div>
        <FeedbackForm/>
      </div>
      <div>
        <QuestionForm/>
      </div>
      <div>
        <StudentTitle>
          <h2>QUESTIONS OF STUDENTS</h2>
        </StudentTitle>
        <QuestionsList/>    
      </div>
      <br></br>
      <ResultsViewButton />
      </div>
  )
}

export default FormStudent;
