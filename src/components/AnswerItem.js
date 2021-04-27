import React from "react";

export const AnswerItem = (props) => {
  return (
    <div>
      <p>{props.answer}</p>
      <button
        className="btn btn-sm btn-danger float-right"
        onClick={() => {
          props.deleteAnswer(props.answer, props.item);
        }}
      >
        Delete
      </button>
    </div>
  );
};
