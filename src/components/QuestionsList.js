import React from "react";
import { Badge, Table } from "react-bootstrap";
import QuestionItem from "./QuestionItem";

export default function QuestionsList(props) {
  return (
    <div>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>
              Posted Questions{" "}
              <Badge variant="info">{props.database.length}</Badge>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.database.length === 0
            ? ""
            : props.database.map((questionItem) => {
                return (
                  <tr>
                    <td>
                      <QuestionItem
                        key={questionItem.question}
                        item={questionItem}
                        deleteQuestion={props.deleteQuestion}
                        addAnswer={props.addAnswer}
                        deleteAnswer={props.deleteAnswer}
                      />
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </div>
  );
}
