import React, {createContext, useReducer} from 'react';
import SocketReducer from './SocketReducer';
import io from 'socket.io-client';

const initialState = {
  //Client socket reference
  socket: null,
  teacherId: '',
  studentId: '',
  isClosed: true,
  formId: '',
  formCode: '',
  feedbacksList: {
    understandingValue: [],
    complexityValue: [],
    explainationValue: [],
    boolean:false
  },
  numberOfConnectedStudents: 0,
  questions: [],
  questionsLiked: [],
};

export const SocketContext = createContext(initialState);

export const SocketProvider = ({children}) => {

  const [state, dispatch] = useReducer(SocketReducer, initialState);

  function initSocket(teacher, username, title, code) {
    const socket = io.connect('http://localhost:8080', {
      query: {
        isTeacher: teacher,
        username: username,
        title: title,
        code: code
      },
    });

    bindListeners(socket);

    dispatch({
      type: 'INIT_SOCKET',
      payload: socket,
    });
  }

  const closeSocket = () => {
    state.socket.close();
    dispatch({type: 'CLOSE_SOCKET'});
  };

  const emit = (event, payload) => {
    state.socket.emit(event, payload);
  };

  const bindListeners = (socket) => {

    socket.on('teacher:feedbackResultsPage', (formId, formCode) => {
      dispatch({
        type: 'ADD_FORM_ID_AND_CODE',
        payload: {formId, formCode},
      });
    });
  
    socket.on('all:questionUpdate', (question) => {
      if(question.numberOfLikes === 0) {
        console.log('PRIMO IF');
        dispatch({
        type: 'ADD_QUESTION',
        payload: {question}
        }); 
      } 
      else {
        console.log('ELSE');
        dispatch({
          type: 'QUESTION_UPDATE',
          payload: {question}
        });
      }
    });

    
    socket.on('student:submitFeedbackPage', (studentId, formId, isClosed) => {
      dispatch({
        type: 'ADD_STUDENT_ID_AND_FORM_ID',
        payload: {studentId, formId, isClosed},
      })
    })
 

    socket.on('teacher:feedbackResultsList', (feedbacksList, numberOfConnectedStudents) => {
      dispatch({
        type: 'ADD_TEACHER_FEEDBACKS',
        payload: {feedbacksList, numberOfConnectedStudents}
      })
    })

    socket.on('student:feedbackResultsList', (feedbacksList, numberOfConnectedStudents) => {
      dispatch({
        type: 'ADD_STUDENT_FEEDBACKS',
        payload: {feedbacksList, numberOfConnectedStudents}
      })
    }
    )
    
    socket.on('all:formIsClosed', (isClosed) => {
      dispatch({
        type: 'ADD_FORM_IS_CLOSED',
        payload: {isClosed},
      })
    }
    )
  };
  
  return (
   
    <SocketContext.Provider
      value={{
        socket: state.socket,
        formId: state.formId,
        formCode: state.formCode,
        studentId: state.studentId,
        isClosed: state.isClosed,
        teacherId: state.teacherId,
        feedbacksList: state.feedbacksList,
        numberOfConnectedStudents: state.numberOfConnectedStudents,
        questions: state.questions,
        questionsLiked: state.questionsLiked,
        emit,
        initSocket,
        closeSocket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
