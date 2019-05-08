import React from 'react'

const trueAnswerStyle = {
  color: 'green'
}

const distractorStyle = {
  color: 'grey'
}

function Answer (props) {
  return (
    <div style={props.answer.distractor ? distractorStyle : trueAnswerStyle} key={props.answer.id}>
      <p> {props.answer.text} </p>
    </div>
  )
}

export default Answer
