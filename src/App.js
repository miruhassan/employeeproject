import logo from './logo.svg';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import './EmployeeForm.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Add Employee</h1>
        <EmployeeForm />
        <h1>Employee List</h1>
      </header>
    </div>
  );
}

export default App;
