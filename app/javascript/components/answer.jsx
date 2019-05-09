import React from 'react'

const style = {
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
  const answerStyle = { ...style, ...(props.answer.distractor ? distractorStyle : trueAnswerStyle) }
  const answerText = props.editable
    ? <input style={answerStyle} type='text' onChange={(e, answer) => props.handleAnswerChange(e, props.answer)} defaultValue={props.answer.text} />
    : <div style={answerStyle} > <p> {props.answer.text} </p> </div>

  return (
    <>
      { answerText }
    </>
  )
}

export default Answer
