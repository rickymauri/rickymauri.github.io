import React, {useState, useContext, useEffect} from "react";
import { FormContainer } from "../../styles/CompileForm.styles";
import { SocketContext } from "../../context/SocketContext";


const FeedbackForm = () => {

    const {emit,formId,studentId, isClosed} = useContext(SocketContext);
    const [enteredFeedback1, setEnteredFeedback1] = useState('');
    const [enteredFeedback2, setEnteredFeedback2] = useState('');
    const [enteredFeedback3, setEnteredFeedback3] = useState('');
    const [isValid1, setIsValid1] = useState(true);
    const [isValid2, setIsValid2] = useState(true);
    const [isValid3, setIsValid3] = useState(true);

    const feedback1ChangeHandler = (event) => {
        setEnteredFeedback1(event.target.value);
    };

    const feedback2ChangeHandler = (event) => {
        setEnteredFeedback2(event.target.value);
    };

    const feedback3ChangeHandler = (event) => {
        setEnteredFeedback3(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const body = {
            understandingValue: enteredFeedback1,
            complexityValue: enteredFeedback2,
            explainationValue: enteredFeedback3,
            studentId: studentId,
            formId: formId,
        };
        
        if(enteredFeedback1.trim().length === 0 && enteredFeedback2.trim().length === 0 && enteredFeedback3.trim().length === 0){
            setIsValid1(false);
            setIsValid2(false);
            setIsValid3(false);
            return;
        }

        if(enteredFeedback1.trim().length === 0 && enteredFeedback2.trim().length === 0){
            setIsValid1(false);
            setIsValid2(false);
            setIsValid3(true);
            return;
        }

        if(enteredFeedback1.trim().length === 0 && enteredFeedback3.trim().length === 0){
            setIsValid1(false);
            setIsValid3(false);
            setIsValid2(true);
            return;
        }

        if(enteredFeedback2.trim().length === 0 && enteredFeedback3.trim().length === 0){
            setIsValid2(false);
            setIsValid3(false);
            setIsValid1(true);
            return;
        }

        if(enteredFeedback1.trim().length === 0){
            setIsValid1(false);
            setIsValid2(true);
            setIsValid3(true);
            return;
        }
        
        if(enteredFeedback2.trim().length === 0){
            setIsValid2(false);
            setIsValid1(true);
            setIsValid3(true);
            return;
        }
        
        if(enteredFeedback3.trim().length === 0){
            setIsValid3(false);
            setIsValid1(true);
            setIsValid2(true);
            return;
        }
     
        if(body && !isClosed){
            emit('student:submitFeedback', {body});
            alert("Feedback submitted successfully.");
        }
        else if (isClosed) {
            alert("The form is closed. You cannot submit a new feedback. Check the results.");
        }
        
        setIsValid1(true);
        setIsValid2(true);
        setIsValid3(true);
        event.target.btn.disabled = true;
       
        setEnteredFeedback1('');
        setEnteredFeedback2('');
        setEnteredFeedback3('');

    };
   
    return(
        <FormContainer>
            <form id="mio-modulo" onSubmit={submitHandler}>
                <div className={`feedback-control ${!isValid1 ? 'invalid1' : ''}`}>
                    <p>Select your general level of understanding:</p>
                    <input type="radio" id="1" name="comprensione" value="1"  onChange={feedback1ChangeHandler}/>
                    <label for="1">1</label>
                    <input type="radio" id="2" name="comprensione" value="2" onChange={feedback1ChangeHandler}/>
                    <label for="2">2</label>
                    <input type="radio" id="3" name="comprensione" value="3" onChange={feedback1ChangeHandler}/>
                    <label for="3">3</label>
                </div>
                <div className={`feedback-control ${!isValid2 ? 'invalid2' : ''}`}>
                    <p>How complex was the topic?</p>
                    <input type="radio" id="1" name="complessità" value="1" onChange={feedback2ChangeHandler}/>
                    <label for="1">1</label>
                    <input type="radio" id="2" name="complessità" value="2" onChange={feedback2ChangeHandler}/>
                    <label for="2">2</label>
                    <input type="radio" id="3" name="complessità" value="3" onChange={feedback2ChangeHandler}/>
                    <label for="3">3</label>
                </div>
                <div className={`feedback-control ${!isValid3 ? 'invalid3' : ''}`}>
                    <p>Was the explanation clear?</p>
                    <input type="radio" id="1" name="spiegazione" value="1" onChange={feedback3ChangeHandler}/>
                    <label for="1">1</label>
                    <input type="radio" id="2" name="spiegazione" value="2" onChange={feedback3ChangeHandler}/>
                    <label for="2">2</label>
                    <input type="radio" id="3" name="spiegazione" value="3" onChange={feedback3ChangeHandler}/>
                    <label for="3">3</label> 
                </div>
                <br></br>
                <button className="btn-feedback" type="submit" id="btn" value="submit">Submit Feedback</button>
            </form>
        </FormContainer>
    )
};

export default FeedbackForm;
