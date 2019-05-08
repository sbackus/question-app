import React from 'react'
import Answer from './answer'

function AllAnswers (props) {
  const answers = props.answers.map((answer) => {
    return (
      <Answer answer={answer} />
    )
  })

  return (
    <>
      {answers}
    </>
  )
}
export default AllAnswers
