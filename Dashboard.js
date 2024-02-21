// src/components/Dashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const DashboardContent = styled.div`
  width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SectionHeader = styled.h2`
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 12px;
`;

const FormButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 8px;
`;

const Dashboard = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [managerList, setManagerList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [newEmployee, setNewEmployee] = useState('');
  const [newManager, setNewManager] = useState('');
  const [newProject, setNewProject] = useState('');

  const addEmployee = () => {
    setEmployeeList([...employeeList, newEmployee]);
    setNewEmployee('');
  };

  const addManager = () => {
    setManagerList([...managerList, newManager]);
    setNewManager('');
  };

  const addProject = () => {
    setProjectList([...projectList, newProject]);
    setNewProject('');
  };

  return (
    <DashboardContainer>
      <DashboardContent>
        <SectionHeader>Employee Management</SectionHeader>
        <FormContainer>
          <FormLabel>Add Employee:</FormLabel>
          <FormInput
            type="text"
            value={newEmployee}
            onChange={(e) => setNewEmployee(e.target.value)}
          />
          <FormButton onClick={addEmployee}>Add</FormButton>
        </FormContainer>
        <ListContainer>
          {employeeList.map((employee, index) => (
            <ListItem key={index}>{employee}</ListItem>
          ))}
        </ListContainer>

        <SectionHeader>Manager Management</SectionHeader>
        <FormContainer>
          <FormLabel>Add Manager:</FormLabel>
          <FormInput
            type="text"
            value={newManager}
            onChange={(e) => setNewManager(e.target.value)}
          />
          <FormButton onClick={addManager}>Add</FormButton>
        </FormContainer>
        <ListContainer>
          {managerList.map((manager, index) => (
            <ListItem key={index}>{manager}</ListItem>
          ))}
        </ListContainer>

        <SectionHeader>Project Management</SectionHeader>
        <FormContainer>
          <FormLabel>Add Project:</FormLabel>
          <FormInput
            type="text"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
          />
          <FormButton onClick={addProject}>Add</FormButton>
        </FormContainer>
        <ListContainer>
          {projectList.map((project, index) => (
            <ListItem key={index}>{project}</ListItem>
          ))}
        </ListContainer>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;

