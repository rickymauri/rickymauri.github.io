import React, {useState, useContext, useEffect} from "react";
import "../../css/Check.css";
import { useNavigate } from "react-router-dom";
import {Login}  from "../../styles/HomePage.styles";    
import { SocketContext } from "../../context/SocketContext";

const NewAccess = () => {

    const navigate = useNavigate();
    let {studentId,formId,initSocket} = useContext(SocketContext);
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredCode, setEnteredCode] = useState('');
    const [isValid1, setIsValid1] = useState(true);
    const [isValid2, setIsValid2] = useState(true);

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const codeChangeHandler = (event) => {
        setEnteredCode(event.target.value);
    };

    const submitHandler = (event) => {

        event.preventDefault();

        const accessData = {
            username: enteredUsername,
            code: enteredCode
        };
        
        if(enteredUsername.trim().length === 0 && enteredCode.trim().length === 0){
            setIsValid1(false);
            setIsValid2(false);
            return;
        }

        if(enteredUsername.trim().length === 0){
            setIsValid1(false);
            setIsValid2(true);
            return;
        }
        
        if(enteredCode.trim().length === 0){
            setIsValid2(false);
            setIsValid1(true);
            return;
        }
           
        initSocket(false, accessData.username, 'null', accessData.code);
        setEnteredUsername('');
        setEnteredCode('');
       
    };

    useEffect(() => {
        if(studentId !== '' && formId !== '') {
            navigate('/student/form');
        }
    }, [studentId, formId]);

    return (
        <Login>
            <form onSubmit={submitHandler}>
                <div className={`form-control ${!isValid1 ? 'invalid1' : ''}`}>
                    <label>Username</label>
                    <input type="text" value={enteredUsername} onChange={usernameChangeHandler}>
                    </input>
                </div>
                <div className={`form-control ${!isValid2 ? 'invalid2' : ''}`}>
                    <label>Code</label>
                    <input type="text" pattern="[0-9]+" value={enteredCode} onChange={codeChangeHandler}></input>
                </div>
                <button className="btn-login" type="submit">Join</button>
            </form>
        </Login>
    );
};

export default NewAccess;