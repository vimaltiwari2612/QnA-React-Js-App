import React from 'react'
import { Accordion, Badge } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { AddAnswer } from './AddAnswer'
import { AnswerItem } from './AnswerItem'

export default function QuestionItem({item,deleteQuestion,addAnswer}) {

    return (
        <div>
            <Accordion defaultActiveKey="1">
            <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                {item.question}  <br/>
                <Badge variant="primary">Answers <Badge variant="light">{item.answers.length}</Badge></Badge>
                <button className="btn btn-sm btn-danger float-right" onClick={()=>{deleteQuestion(item)}}>Delete</button> 
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body> 
                    {item.answers.length===0? "No Answers Present":  
                        item.answers.map((answer)=>{
                            return ( <AnswerItem key={answer} answer={answer}></AnswerItem>  )
                        })
                        }
                        <AddAnswer item={item} addAnswer={addAnswer}></AddAnswer>
                    </Card.Body>

            </Accordion.Collapse>
            </Card>
            <Card>
               
            </Card>
            </Accordion>
        </div>
    )

}
