// ProjectManagement.js
import React, { useState } from 'react';
import './ProjectManagement.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ProjectManagement = () => {
  // Dummy project data for demonstration
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project A', description: 'Description for Project A', startDate: new Date(), endDate: new Date(), assignedEmployees: 'John Doe', assignedManager: 'Jane Doe' },
    // Add more projects as needed
  ]);

  // State for new project form
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    assignedEmployees: '',
    assignedManager: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  // Handle date changes
  const handleDateChange = (date, dateType) => {
    setNewProject((prevProject) => ({
      ...prevProject,
      [dateType]: date,
    }));
  };

  // Handle form submission
  const handleAddProject = () => {
    // Validate and add the new project to the list
    if (newProject.name && newProject.description && newProject.startDate && newProject.endDate && newProject.assignedEmployees && newProject.assignedManager) {
      setProjects((prevProjects) => [
        ...prevProjects,
        {
          id: prevProjects.length + 1,
          ...newProject,
        },
      ]);

      // Clear the form fields after adding a new project
      setNewProject({
        name: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        assignedEmployees: '',
        assignedManager: '',
      });
    } else {
      alert('Please fill in all the fields.');
    }
  };

  // Handle project deletion
  const handleDeleteProject = (projectId) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
  };

  return (
    <div className="main-content">
      <h2>Project Management</h2>

      <section>
        <h3>Projects</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Assigned Employees</th>
              <th>Assigned Manager</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.startDate.toDateString()}</td>
                <td>{project.endDate.toDateString()}</td>
                <td>{project.assignedEmployees}</td>
                <td>{project.assignedManager}</td>
                <td>
                  <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

     <section>
        <h3>Add New Project</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={newProject.name} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={newProject.description} onChange={handleInputChange} />
          </label>
          <label>
            Start Date:
            <Calendar onChange={(date) => handleDateChange(date, 'startDate')} value={newProject.startDate} />
          </label>
          <label>
            End Date:
            <Calendar onChange={(date) => handleDateChange(date, 'endDate')} value={newProject.endDate} />
          </label>
          <label>
            Assigned Employees:
            <input type="text" name="assignedEmployees" value={newProject.assignedEmployees} onChange={handleInputChange} />
          </label>
          <label>
            Assigned Manager:
            <input type="text" name="assignedManager" value={newProject.assignedManager} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleAddProject}>
            Add Project
          </button>
        </form>
      </section>
    </div>
  );
};

export default ProjectManagement;
