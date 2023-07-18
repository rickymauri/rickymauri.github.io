import React, {useState, useEffect, useContext} from 'react';
import {SocketContext} from '../../context/SocketContext';
import {useNavigate} from 'react-router-dom';
import {Login} from '../../styles/HomePage.styles';

const NewForm = () => {

  let {initSocket, formId} = useContext(SocketContext);
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');
  const [isValid1, setIsValid1] = useState(true);
  const [isValid2, setIsValid2] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: enteredTitle,
      username: enteredUsername,
    };
  
    if (formData.title.trim().length === 0 && formData.username.trim().length === 0) {
      setIsValid1(false);
      setIsValid2(false);
      return;
    }

    if (formData.username.trim().length === 0) {
      setIsValid1(true);
      setIsValid2(false);
      return;
    }

    if (formData.title.trim().length === 0) {
      setIsValid1(false);
      setIsValid2(true);
      return;
    }

    initSocket(true, formData.username, formData.title,'null');
    setEnteredTitle('');
      
  };

  useEffect(() => {
    if (formId) {
      navigate('/professor/feedbacksprofessor');
    }
  }, [formId]);

  return (
    <Login>
      <form onSubmit={submitHandler}>
        <div className={`form-control ${!isValid2 ? 'invalid2' : ''}`}>
          <label>Username</label>
          <input type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>
        </div>
        <div className={`form-control ${!isValid1 ? 'invalid1' : ''}`}>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <button className='btn-form' type='submit'>
          Start Form!
        </button>
      </form>
    </Login>
  );
};

export default NewForm;
