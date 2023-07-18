import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import FeedbacksProfessor from './pages/FeedbacksProfessor';
import FeedbacksStudent from './pages/FeedbacksStudent';
import HomePageStudent from './pages/HomePageStudent';
import HomePage from './pages/HomePage';
import FormStudent from './pages/FormStudent';
import CreateForm from './pages/CreateForm';
import { SocketProvider } from './context/SocketContext';

const router = createBrowserRouter([
  {
    path:'/',
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/student', element: <HomePageStudent/>},
      {path: '/student/form', element: <FormStudent/>},
      {path: '/professor/form', element: <CreateForm/>},
      {path: '/professor/feedbacksprofessor', element: <FeedbacksProfessor/>},
      {path: '/student/feedbacksstudent', element: <FeedbacksStudent/>},
      {path: '*', element: <ErrorPage/>}
    ]
  }
]);

function App() {

  return(
    <SocketProvider>
      <RouterProvider router={router}/>
    </SocketProvider>
  );
}

export default App;
