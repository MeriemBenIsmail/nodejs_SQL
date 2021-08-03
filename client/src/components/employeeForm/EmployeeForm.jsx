import './employeeForm.css';
import Button from '../button/Button';
import { useState } from 'react';
import Axios from 'axios';

export default function EmployeeForm() {

  const [employeeList,setEmployeeList] = useState([]);
  const [name,setName] = useState('');
  const [age,setAge] = useState(0);
  const [country,setCountry] = useState('');
  const [position,setPosition] = useState('');
  const [wage,setWage] = useState(0);

  const submitHandler = (event) => {

    event.preventDefault();
    // send object to backend
    Axios.post('http://localhost:3001/create',{
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then( () => {

      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage
        }
      ]);
      
      
    });

  };

  return (
    <div className="form"> 

      <h1>Employee Form</h1>

      <form onSubmit={submitHandler}>
          <input type="text" name="name" placeholder="Enter Name" onChange={(event) => {setName(event.target.value)}} />
          
          <input type="number" name="age" placeholder="Enter Age" onChange={(event) => {setAge(event.target.value)}}/>
          
          <input type="text" name="country" placeholder="Enter Country" onChange={(event) => {setCountry(event.target.value)}}/>
          
          <input type="text" name="position" placeholder="Enter Position" onChange={(event) => {setPosition(event.target.value)}} />
         
          <input type="number" name="wage" placeholder="Enter Wage" onChange={(event) => {setWage(event.target.value)}}/>

          <Button>Add Employee</Button>



      </form>
      
    </div>
  )
}
