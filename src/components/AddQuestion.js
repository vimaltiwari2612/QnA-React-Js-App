import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
function AddQuestion(props) {
    const [question, setQuestion] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!question) {
            alert("Question cannot be blank!");
        }
        else {
            props.addQuestion(question);
            setQuestion("");
        }
    }
    return (
        <div>
            <Form onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Question</Form.Label>
                <Form.Control type="text" placeholder="Enter Question" value={question} onChange={(e) => setQuestion(e.target.value)}/>
                <Form.Text className="text-muted" >
                    Submit your question here...
                </Form.Text>
            </Form.Group>
            <button type="submit" className="btn btn-sm btn-success">Post</button>
            </Form>
        </div>
    )
}

export default AddQuestion;