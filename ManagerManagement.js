// ManagerManagement.js
import React, { useState } from 'react';
import './ManagerManagement.css';

const ManagerManagement = () => {
  // Dummy Manager data for demonstration
  const [manager, setManager] = useState([
    { id: 1, name: 'Aarthi', position: 'Software Lead', email: 'aarthinatarajan@gmail.com', role: 'Manager', project: 'Project A' },
    { id: 2, name: 'Sruti', position: 'Techinal Lead', email: 'srutiparthipan@gmail.com', role: 'Manager', project: 'Project B' },
    // Add more managers as needed
  ]);

  // State for new manager form
  const [newManager, setNewManager] = useState({
    name: '',
    position: '',
    email: '',
    role: '',
    project: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewManager((prevManager) => ({
      ...prevManager,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleAddManager = () => {
    // Validate and add the new Manager to the list
    if (newManager.name && newManager.position && newManager.email && newManager.role && newManager.project) {
      setManager((prevManager) => [
        ...prevManager,
        {
          id: prevManager.length + 1,
          ...newManager,
        },
      ]);

      // Clear the form fields after adding a new Manager
      setNewManager({
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
  const handleDeleteManager = (managerId) => {
    setManager((prevManager) => prevManager.filter((manager) => manager.id !== managerId));
  };


  return (
    <div className="main-content">
      <h2>Manager Data</h2>

     {/* Display a table of Managers */}
     <section>
        <h3>Managers</h3>
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
            {manager.map((manager) => (
              <tr key={manager.id}>
                <td>{manager.id}</td>
                <td>{manager.name}</td>
                <td>{manager.position}</td>
                <td>{manager.email}</td>
                <td>{manager.role}</td>
                <td>{manager.project}</td>
                <td>
                  <button onClick={() => handleDeleteManager(manager.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Form for adding a new manager */}
      <section>
        <h3>Add New Manager</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={newManager.name} onChange={handleInputChange} />
          </label>
          <label>
            Position:
            <input type="text" name="position" value={newManager.position} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={newManager.email} onChange={handleInputChange} />
          </label>
          <label>
            Role:
            <select name="role" value={newManager.role} onChange={handleInputChange}>
              <option value="">Select Role</option>
              <option value="Manager">Manager</option>
            </select>
          </label>
          <label>
            Project:
            <input type="text" name="project" value={newManager.project} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleAddManager}>
            Add Manager
          </button>
        </form>
      </section>
    </div>
  );
};

export default ManagerManagement;
