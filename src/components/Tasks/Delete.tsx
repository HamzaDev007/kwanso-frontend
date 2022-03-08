import React, { useState } from 'react';
import { Col, Container, Row, InputGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TaskCard from '../../common/Card/card.tsx';
import { setTask } from '../../store/actions/task.action.ts';
import { TaskState, Task } from '../../store/reducers/task.reducer.ts';

const DeleteTasks: React.FC = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const tasks: Array<Task> = useSelector((state: TaskState) => state.tasks.tasks);
 const [checked, setChecked] = useState({})
 const handleCheck = (isCheck: boolean, id: string) => {
  var checks = {}
  if (!isCheck) {
   Object.keys(checked).map((taskId) => {
    if (id !== taskId && checked[taskId]) checks[taskId] = true;
   })
  } else {
   checks = { ...checked };
   checks[id] = true;
  }
  setChecked(checks)
 }

 const handleCheckAll = (isChecked: boolean) => {
  if (!isChecked) {
   setChecked({});
  } else {
   let checks = {}
   tasks.map(task => {
    checks[task.id] = true;
   });
   setChecked(checks);
  }
 }

 const handleDelete = () => {
  if (Object.keys(checked).length === 0) {
   return alert('Select Task first')
  }
  let newTasks: Array<Task> = [...tasks];
  newTasks = newTasks.filter((task) => {
   if (!checked[task.id]) return task;
  })
  dispatch(setTask(newTasks));
  setChecked({})
  navigate("/")
 }

 return (
  <Container>
   <Row>
    {tasks.length ?
     <Col>
      <InputGroup className="mb-3">
       <InputGroup.Checkbox onChange={({ target }) => handleCheckAll(target.checked)} aria-label="Checkbox for following text input" />
       <InputGroup.Text> Select All </InputGroup.Text>
      </InputGroup>
     </Col>
     : <h3> No Task found</h3>
    }
    {Object.keys(checked).length ?
     <Col>
      <Button onClick={handleDelete} > Delete Selected </Button>
     </Col>
     : ''
    }
   </Row>
   <Row>
    {tasks.map((task, id) => (
     <Col key={id}>
      <TaskCard {...task} delete={true} handleCheck={handleCheck} checked={checked[task.id]} />
     </Col>
    ))}
   </Row>

  </Container>
 )
}

export default DeleteTasks;