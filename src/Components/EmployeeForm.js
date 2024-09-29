import React from 'react';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  // Handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with the following data:', this.state);
    
    // Pass the employee data to the addEmployee function from props
    this.props.addEmployee(this.state);

    // Reset the form fields
    this.setState({
      name: '',
      email: '',
      phone: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default EmployeeForm;
