import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import './EmployeeForm.css';

function App() {
  // Initialize state with data from local storage if available
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // Function to add a new employee
  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees); // Save data to local storage whenever an employee is added
  };

  // Function to save employees array to local storage
  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  // Retrieve saved employees on component mount
  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Add Employee</h1>
        {/* Pass the addEmployee function as a prop to EmployeeForm */}
        <EmployeeForm addEmployee={addEmployee} />
        <h1>Employee List</h1>
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>{employee.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
