import React from 'react';
import { Link } from 'react-router-dom';
import '../employee.css';

// A functional component for displaying a list of employees
function EmployeeList(props) {
  // Render the employee list
  return (
    <div className="employee-list">
      <ul>
        {props.employees.map((employee) => (
          <li key={employee.EmployeeId}>
            {/* Create a link to the employee detail page */}
            <Link to={`/employees/${employee.EmployeeId}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
