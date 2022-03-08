import React from 'react'
import { Card, InputGroup } from 'react-bootstrap'
interface Task {
 name: string,
 delete?: boolean,
 checked?: boolean,
 handleCheck?: (id: string) => void,
}
const TaskCard: React.FC<Task> = (props: Task) => {
 return (
  <Card style={{ width: '18rem' }}>
   <Card.Body>
    <Card.Header>
     {props.delete ?
      <InputGroup className="mb-3">
       <InputGroup.Checkbox checked={props.checked || false} onChange={({ target }) => props.handleCheck(target.checked, props.id)} aria-label="Checkbox for following text input" />
       <InputGroup.Text>{props.name || "TASK"}</InputGroup.Text>
      </InputGroup> :
      <b> {props.name || "TASK"} </b>
     }
    </Card.Header>
   </Card.Body>
  </Card>
 )
}

export default TaskCard;