import React from 'react'

const answerStyle = {
  display: 'inline-flex',
  margin: '5px'
}

const trueAnswerStyle = {
  color: 'green'
}

const distractorStyle = {
  color: 'grey'
}

function Answer (props) {
  return (
    <div style={{ ...answerStyle, ...(props.answer.distractor ? distractorStyle : trueAnswerStyle) }} >
      <p> {props.answer.text} </p>
    </div>
  )
}

export default Answer
