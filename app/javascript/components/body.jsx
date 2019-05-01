import React from 'react'
import AllQuestions from './all_questions'
import NewQuestion from './new_question'

class Body extends React.Component {
  render () {
    return (
      <>
        <NewQuestion />
        <AllQuestions />
      </>
    )
  }
}

export default Body
