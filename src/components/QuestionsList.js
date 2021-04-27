import React from 'react'
import QuestionItem  from './QuestionItem';

export default function QuestionsList(props) {
    return (
        <div>
            <h4> Feeds </h4>
            {props.database.length===0? "No Questions to display":  
            props.database.map((questionItem)=>{
                return (<QuestionItem key={questionItem.question} item={questionItem} deleteQuestion={props.deleteQuestion} addAnswer={props.addAnswer}/>   
                )
            })
              }
        </div>
    )
}

