import React from "react";
import { Card } from "react-bootstrap";
import AddQuestion from "./AddQuestion.js";
import QuestionsList from "./QuestionsList.js";

function HomePage(props) {
  return (
    <div>
      <Card border="success" >
        <Card.Header >
          <center>
            <h2>{props.name}</h2>
          </center>
          <AddQuestion addQuestion={props.addQuestion}></AddQuestion>
        </Card.Header>
        <Card.Body>
          <QuestionsList
            database={props.database}
            deleteQuestion={props.deleteQuestion}
            addAnswer={props.addAnswer}
            deleteAnswer={props.deleteAnswer}
          ></QuestionsList>
        </Card.Body>
        <Card.Footer>
            <label  className="float-right"><strong>&#169;Vimal Tiwari 2021</strong></label>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default HomePage;
