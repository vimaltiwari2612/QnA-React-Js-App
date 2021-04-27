import React from 'react'
import Form from 'react-bootstrap/Form';
import  { useState } from 'react';
export const AddAnswer = (props) => {
    const [answer, setAnswer] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!answer) {
            alert("Answer cannot be blank!");
        }
        else {
            props.addAnswer(answer, props.item);
            setAnswer("");
        }
    }
    return (
        <div>
            <Form onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Answer</Form.Label>
                <Form.Control type="text" placeholder="Enter Answer" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
            </Form.Group>
            <button className="btn btn-sm btn-success" type="submit">Add Answer</button>
            </Form>
        </div>
    )
}
