import React,{useContext} from "react";
import {StudentsNumber, NumberContainer} from '../../styles/Results.styles';
import {SocketContext} from '../../context/SocketContext';

const StudentsList = () => {

    const {numberOfConnectedStudents} = useContext(SocketContext);

    return(
        <NumberContainer>
            <div id="cerchio"/>
            <StudentsNumber> 
                {numberOfConnectedStudents}     
            </StudentsNumber>
        </NumberContainer>    
    )
};

export default StudentsList;