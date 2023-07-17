import React from "react";
import Div100vh from "react-div-100vh";
import QuestionsList from "../components/Questions/QuestionsList";
import FeedbacksChart from "../components/Chart/FeedbacksChart";
import CloseFormButton from "../components/FormPageProfessor/CloseFormButton";
import { FeedbackTitle } from "../styles/Results.styles";
import StudentsList from "../components/HomePageStudent/StudentsList";
import UpdateResultsButton from "../components/FormPageProfessor/UpdateResultsButton";
import { SocketContext } from "../context/SocketContext";
import { useContext } from "react";
import ExitFormProfessorButton from "../components/FormPageProfessor/ExitFormProfessorButton";

const FeedbacksProfessor = () => {

  const {formCode} = useContext(SocketContext);

  return(
    <div>
      <StudentsList/> 
      <FeedbackTitle>
        <h2>RESULTS OF FORM</h2>
        <h4>Code: {formCode}</h4>
      </FeedbackTitle>
      <FeedbacksChart/>
      <br></br>
      <UpdateResultsButton/>
      <QuestionsList />
      <br></br>
      <CloseFormButton/>      
      <ExitFormProfessorButton/>
    </div>
  )
}

export default FeedbacksProfessor;
