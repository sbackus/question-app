import React from 'react'
import Answer from './answer'

function AllAnswers (props) {
  const answers = (props.answers || []).map((answer) => {
    return (
      <Answer handleAnswerChange={(e, a) => props.handleAnswerChange(e, a)} key={answer.id} editable={props.editable} answer={answer} />
    )
  })

  return (
    <>
      {answers}
    </>
  )
}
export default AllAnswers
