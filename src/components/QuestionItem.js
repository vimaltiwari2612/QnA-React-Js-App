import React from "react";
import { Accordion, Badge, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { AddAnswer } from "./AddAnswer";
import { AnswerItem } from "./AnswerItem";

export default function QuestionItem({
  item,
  deleteQuestion,
  addAnswer,
  deleteAnswer,
}) {
  return (
    <div>
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {item.question} <br />
            <Badge variant="primary">
              Answers <Badge variant="light">{item.answers.length}</Badge>
            </Badge>
            <button
              className="btn btn-sm btn-danger float-right"
              onClick={() => {
                deleteQuestion(item);
              }}
            >
              Delete
            </button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th>
                      Posted Answers{" "}
                      <Badge variant="info">{item.answers.length}</Badge>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item.answers.length === 0
                    ? ""
                    : item.answers.map((answer) => {
                        return (
                          <tr>
                            <td>
                              <AnswerItem
                                key={answer}
                                item={item}
                                answer={answer}
                                deleteAnswer={deleteAnswer}
                              ></AnswerItem>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </Table>
              <AddAnswer item={item} addAnswer={addAnswer}></AddAnswer>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card></Card>
      </Accordion>
    </div>
  );
}
