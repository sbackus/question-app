import React from 'react'

class AllQuestions extends React.Component {
  render () {
    var questions = this.props.questions.map((question) => {
      return (
        <div key={question.id}>
          <h3>{question.text}</h3>
        </div>
      )
    })

    return (
      <div>
        {questions}
      </div>
    )
  }
}

export default AllQuestions
