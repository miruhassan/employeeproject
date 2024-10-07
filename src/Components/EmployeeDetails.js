import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetails = ({ employees }) => {
  const { id } = useParams(); // Get the employee id from the URL
  const employee = employees[id]; // Use the id to find the employee

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      {/* You can add more fields based on what the employee object contains */}
    </div>
  );
};

export default EmployeeDetails;
