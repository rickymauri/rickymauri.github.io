export default (state, action) => {
  switch (action.type) {
    case 'INIT_SOCKET':
      return {
        ...state,
        socket: action.payload,
      };
    case 'CLOSE_SOCKET':
      return {
        ...state,
        socket: null,
      };
    case 'ADD_FORM_ID_AND_CODE':
      return {
        ...state,
        formId: action.payload.formId,
        formCode: action.payload.formCode,
        isClosed: action.payload.isClosed,
      };
    case 'ADD_STUDENT_ID_AND_FORM_ID':
      return {
        ...state,
        studentId: action.payload.studentId,
        formId: action.payload.formId,
        isClosed: action.payload.isClosed,
      }
    case 'ADD_FEEDBACKS':
     return {
      ...state,
      feedbacksList: action.payload.feedbacksList,
      numberOfConnectedStudents: action.payload.numberOfConnectedStudents,
     } 
    case 'ADD_QUESTION':
      return {
        ...state,
        questions: [...state.questions, action.payload.question],
      };
    case 'QUESTION_UPDATE':
      if(state.questions.findIndex((question) => question.questionId === action.payload.question.questionId) === -1){  
        return {
          ...state,
          questions: [...state.questions, action.payload.question],
        };
      } else {
          return {
            ...state,
            questions: state.questions.map((question) => {
              if(question.questionId === action.payload.question.questionId) {
                return action.payload.question;
              } else {
                return question;
              }
            }),
        };
      }
    case 'ADD_FORM_IS_CLOSED':
      return {
        ...state,
        isClosed: action.payload.isClosed,
      }
    default:
      return state;
  }
};
