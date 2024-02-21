// EmployeeManagement.js
import React, { useState } from 'react';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
  // Dummy employee data for demonstration
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John ', position: 'Software Engineer', email: 'john@gmail.com', role: 'Employee', project: 'Project A' },
    { id: 2, name: 'Harish', position: 'Project Engineer', email: 'harish@gmail.com', role: 'Employee', project: 'Project B' },
    // Add more employees as needed
  ]);

  // State for new employee form
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    email: '',
    role: '',
    project: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleAddEmployee = () => {
    // Validate and add the new employee to the list
    if (newEmployee.name && newEmployee.position && newEmployee.email && newEmployee.role && newEmployee.project) {
      setEmployees((prevEmployees) => [
        ...prevEmployees,
        {
          id: prevEmployees.length + 1,
          ...newEmployee,
        },
      ]);

      // Clear the form fields after adding a new employee
      setNewEmployee({
        name: '',
        position: '',
        email: '',
        role: '',
        project: '',
      });
    } else {
      alert('Please fill in all the fields.');
    }
  };
  // Handle project deletion
  const handleDeleteEmployee = (employeeId) => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== employeeId));
  };


  return (
    <div className="main-content">
      <h2>Employee Data</h2>

     {/* Display a table of employees */}
     <section>
        <h3>Employees</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Role</th>
              <th>Project</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
                <td>{employee.project}</td>
                <td>
                  <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Form for adding a new employee */}
      <section>
        <h3>Add New Employee</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={newEmployee.name} onChange={handleInputChange} />
          </label>
          <label>
            Position:
            <input type="text" name="position" value={newEmployee.position} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={newEmployee.email} onChange={handleInputChange} />
          </label>
          <label>
            Role:
            <select name="role" value={newEmployee.role} onChange={handleInputChange}>
              <option value="">Select Role</option>
              <option value="Employee">Employee</option>
            </select>
          </label>
          <label>
            Project:
            <input type="text" name="project" value={newEmployee.project} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleAddEmployee}>
            Add Employee
          </button>
        </form>
      </section>
    </div>
  );
};

export default EmployeeManagement;
