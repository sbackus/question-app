import React from 'react'
import Question from './question'

const allQuestionStyle = {
  margin: '15px'
}

const pageButtonStyle = {
  color: 'blue',
  margin: '10px'
}

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
        <div style={allQuestionStyle} key={question.id}>
          <Question question={question}
            handleDelete={() => this.handleDelete(question.id)}
            handleUpdate={(question) => this.onUpdate(question)}
          />
        </div>
      )
    })

    return (
      <>
        <h2> All Questions: </h2>
        {questions}
        <a style={pageButtonStyle} onClick={() => this.props.getPage(-1)} > Previous </a>
        <a style={pageButtonStyle} onClick={() => this.props.getPage(1)} > Next </a>
      </>
    )
  }
}

export default AllQuestions
