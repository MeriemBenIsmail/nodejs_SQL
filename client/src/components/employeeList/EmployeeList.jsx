import './employeeList.css';
import Button from '../button/Button';
import { useState } from 'react';
import Axios from 'axios';



export default function EmployeeList() {
  
  const [employeeList,setEmployeeList] = useState([]);


  const getEmployees = () => {

    Axios.get('http://localhost:3001/employees').then( (response) => {

      setEmployeeList(response.data);
      
    });

  }
  
  return (
    <div className="employeeList">

      <Button onClick={getEmployees}>Show Employees</Button>

     
        
      {employeeList.map( (val,key) => {

          return (
          
              <div class="row">
                  
                  <div className="element">
                    <h4>Name:</h4>
                    <p>{val.name}</p>
                  </div>
                  <div className="element">
                    <h4>Age:</h4>
                    <p>{val.age}</p>
                  </div>
                  <div className="element">
                    <h4>Position:</h4>
                    <p>{val.position}</p>
                  </div>
                  <div className="element">
                    <h4>Country:</h4>
                    <p>{val.country}</p>
                  </div>
                  <div className="element">
                    <h4>Wage:</h4>
                    <p>{val.wage}</p>
                  </div>
                  
              
                  
                 
              </div>
              
          );

    })}

      

     
      
    </div>
  )
}
