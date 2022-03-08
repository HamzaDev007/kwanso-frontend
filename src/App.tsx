import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Navbar, Nav } from "react-bootstrap";
import TaskList from "./components/Tasks/List.tsx";
import CreateTask from "./components/Tasks/Create.tsx";
import DeleteTasks from "./components/Tasks/Delete.tsx";

const App: React.FC = () => {
  return (
    <Router>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">KWANSO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/list-tasks">Task List</Nav.Link>
              <Nav.Link href="/create-task">Create Task</Nav.Link>
              <Nav.Link href="/bulk-delete">Delete Tasks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <hr />

        <Routes>
          <Route exact path="/" element={<Navigate to={"/list-tasks"} />} />
          <Route path="/list-tasks" element={<TaskList />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/bulk-delete" element={<DeleteTasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;