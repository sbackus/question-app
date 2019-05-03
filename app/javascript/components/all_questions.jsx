import React from 'react'
import Question from './question'

class AllQuestions extends React.Component {
  handleDelete (id) {
    this.props.handleDelete(id)
  }

  onUpdate (question) {
    this.props.onUpdate(question)
  }

  render () {
    const questions = this.props.questions.map((question) => {
      return (
        <div key={question.id}>
          <Question question={question}
            handleDelete={() => this.handleDelete(question.id)}
            handleUpdate={(question) => this.onUpdate(question)}
          />
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
