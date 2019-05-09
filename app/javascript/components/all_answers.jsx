import React from 'react'
import Answer from './answer'

function AllAnswers (props) {
  const answers = (props.answers.reverse() || []).map((answer) => {
    return (
      <Answer key={answer.id} answer={answer} />
    )
  })

  return (
    <>
      {answers}
    </>
  )
}
export default AllAnswers
