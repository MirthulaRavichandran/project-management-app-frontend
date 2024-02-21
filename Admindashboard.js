import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admindashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EmployeeManagement from './EmployeeManagement';
import ManagerManagement from './ManagerManagement'; 
import ProjectManagement from './ProjectManagement';// Import the EmployeeManagement component

const Admindashboard = () => {
  const userInfo = {
    name: 'Admin',
    email: 'admin@example.com',
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showEmployeeManagement, setShowEmployeeManagement] = useState(false);
  const [showManagerManagement, setShowManagerManagement] = useState(false);
  const [showProjectManagement, setShowProjectManagement] = useState(false);

  const projects = [
    { id: 1, name: 'Project A', description: 'Description for Project A' },
    { id: 2, name: 'Project B', description: 'Description for Project B' },
    { id: 3, name: 'Project C', description: 'Description for Project C' },
    { id: 4, name: 'Project D', description: 'Description for Project D' },
    { id: 5, name: 'Project E', description: 'Description for Project E' },
    { id: 6, name: 'Project F', description: 'Description for Project F' },
  ];

  const handleEmployeeManagementClick = () => {
    setShowEmployeeManagement(!showEmployeeManagement);
    setShowCalendar(false); // Close the calendar when clicking on "Employee" sidebar
  };
  const handleManagerManagementClick = () => {
    setShowManagerManagement(!showManagerManagement);
    setShowCalendar(false);
    setShowEmployeeManagement(false);
  }
  const handleProjectManagementClick = () => {
    setShowProjectManagement(!showProjectManagement);
    setShowCalendar(false);
    setShowEmployeeManagement(false);
    setShowManagerManagement(false);
  }
  

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button onClick={handleEmployeeManagementClick}>Employee</button>
          </li>
          <li>
            <button onClick={handleManagerManagementClick}>Manager</button>
          </li>
          <li>
            <button onClick={handleProjectManagementClick}>Projects</button>
          </li>
          <li>
            <button onClick={() => setShowCalendar(!showCalendar)}>Calendar</button>
          </li>
          <li>
          <Link to="/Login">
              <button>Logout</button>
            </Link>
          </li>
        </ul>
      </aside>

      {showCalendar && (
        <div className="calendar-content">
          <Calendar />
        </div>
      )}

      <main className="main-content">
        <header className="header">
          <h2 className="welcome-message">Welcome Back, Admin!</h2>
          <div className="user-dropdown">
            <span className="user-info" onClick={() => setShowDropdown(!showDropdown)}>
              {userInfo.name} &#9662;
            </span>
            {showDropdown && (
              <div className="dropdown-content">
                <p>{userInfo.email}</p>
              </div>
            )}
          </div>
        </header>

        {/* Display EmployeeManagement component conditionally */}
        {showEmployeeManagement && <EmployeeManagement />}
        {showManagerManagement && <ManagerManagement />}
        {showProjectManagement && <ProjectManagement />}

       { <section className="project-list">
          <h3>Projects</h3>
          <div className="project-cards">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section> }
      </main>
    </div>
  );
};

export default Admindashboard;


