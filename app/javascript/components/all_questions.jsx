import React from 'react'
import Question from './question'

class AllQuestions extends React.Component {
  handleDelete (id) {
    this.props.handleDelete(id)
  }

  handleEdit () {
  }

  render () {
    var questions = this.props.questions.map((question) => {
      return (
        <div key={question.id}>
          <Question question={question}
            handleDelete={() => this.handleDelete(question.id)}
            handleEdit={() => this.handleEdit()}
          />
          <h3>{question.text}</h3>
          <button onClick={() => this.handleDelete(question.id)}>Delete</button>
          <button onClick={() => this.handleEdit()}> Edit </button>
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
