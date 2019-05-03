import React from 'react'

class AllQuestions extends React.Component {
  handleClick (id) {
    this.props.handleDelete(id)
  }

  render () {
    var questions = this.props.questions.map((question) => {
      return (
        <div key={question.id}>
          <h3>{question.text}</h3>
          <button onClick={() => this.handleClick(question.id)}>Delete</button>
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
