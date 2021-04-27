import React from 'react';
import { Card } from 'react-bootstrap';
import AddQuestion from './AddQuestion.js'
import QuestionsList from './QuestionsList.js';

function HomePage(props) {
    return (
        <div>
             <Card>
             <Card.Header>
           <h3>{props.name}</h3>
           <AddQuestion addQuestion={props.addQuestion}></AddQuestion>
           </Card.Header>
  <Card.Body> 
  <QuestionsList database={props.database} deleteQuestion={props.deleteQuestion} addAnswer={props.addAnswer}></QuestionsList>
       
  </Card.Body>
  </Card>
         </div>
    )
}

export default HomePage;