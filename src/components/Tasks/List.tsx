import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TaskCard from '../../common/Card/card.tsx';
import { TaskState, Task } from '../../store/reducers/task.reducer.ts';
const TaskList: React.FC = () => {
 const tasks: Array<Task> = useSelector((state: TaskState) => state.tasks.tasks);
 return (
  <Container>
   <Row>
    {tasks.length === 0 && <h3> No task found</h3>}
    {tasks.map((task, id) => (
     <Col key={id}>
      <TaskCard {...task} />
     </Col>
    ))}
   </Row>

  </Container>
 )
}

export default TaskList;