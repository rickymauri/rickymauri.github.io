import React from "react";
import QuestionsList from "../components/Questions/QuestionsList";
import FeedbacksChart from "../components/Chart/FeedbacksChart";
import { FeedbackTitle } from "../styles/Results.styles";
import QuestionForm from "../components/Questions/QuestionForm";
import StudentsList from "../components/HomePageStudent/StudentsList";
import ExitFormButton from "../components/FormPageStudent/ExitFormButton";
import ResultsViewButton from "../components/FormPageStudent/ResultsViewButton";

const FeedbacksStudent = () => {
 
  return(
    <div>    
      <StudentsList/> 
      <FeedbackTitle>
        <h2>RESULTS OF FORM</h2>
      </FeedbackTitle>
      <div>
      <FeedbacksChart/>
      </div> 
      <br></br>
      <ResultsViewButton />
        <QuestionForm />
        <QuestionsList/> 
        <br></br>
        <ExitFormButton/>
    </div>
  )
}

export default FeedbacksStudent;
