import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetails from './Components/EmployeeDetails'; // Import the EmployeeDetails component
import './EmployeeForm.css';

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  useEffect(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Add Employee</h1>
                  <EmployeeForm addEmployee={addEmployee} />
                  <h1>Employee List</h1>
                  <EmployeeList employees={employees} />
                </>
              }
            />
            {/* Add the route for employee details */}
            <Route
              path="/employees/:id"
              element={<EmployeeDetails employees={employees} />}
            />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
