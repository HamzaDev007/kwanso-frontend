import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTask } from '../../store/actions/task.action.ts';
import { TaskState, Task } from '../../store/reducers/task.reducer.ts';

const CreateTask: React.FC = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const tasks: Array<Task> = useSelector((state: TaskState) => state.tasks.tasks);
 const [name, setName] = useState('');

 const handleChange = ({target}) => {
  setName(target.value);
 }

 const handleCreate = (e) => {
  e.preventDefault();
  const task: Task = {
   id: new Date().getTime(),
   name: name
  }
  const newTasks: Array<Task> = [...tasks];
  newTasks.push(task);
  dispatch(setTask(newTasks))
  setName('')
  navigate("/")
 }
 return (
  <Container>
   <Form onChange={handleChange} onSubmit={handleCreate} >
    <Form.Group className="mb-3" controlId="forTaskName">
     <Form.Label>Task Name</Form.Label>
     <Form.Control type="text" placeholder="Enter Task Name" defaultValue={name} />
    </Form.Group>

    <Button variant="primary" type="submit">
     Create
    </Button>
   </Form>
  </Container>
 )
}

export default CreateTask;