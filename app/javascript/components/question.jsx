import React from 'react'
import AllAnswers from './all_answers'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: false,
      answers: props.question.answers
    }
    this.editRef = React.createRef()
  }

  handleEdit () {
    if (this.state.editable) {
      var id = this.props.question.id
      const newText = this.editRef.current.value
      var question = { id: id, text: newText, answers_attributes: this.state.answers  }
      this.props.handleUpdate(question)
    }
    this.setState({ editable: !this.state.editable })
  }

  handleAnswerChange (event, oldAnswer) {
    const newAnswer = { id: oldAnswer.id, text: event.target.value, distractor: oldAnswer.distractor }
    this.setState((state) => ({
      answers: state.answers.map((answer) => answer.id === oldAnswer.id ? newAnswer : answer)
    }))
  }

  render () {
    const text = this.state.editable
      ? <input type='text' ref={this.editRef} defaultValue={this.props.question.text} />
      : <h3 style={{display: 'inline', marginRight: '10px'}}>{this.props.question.text}</h3>

    return (
      <>
        {text}
        <AllAnswers
          editable={this.state.editable}
          handleAnswerChange={(e, answer) => this.handleAnswerChange(e, answer)}
          answers={this.state.answers} />
        <button onClick={() => this.props.handleDelete()}>Delete</button>
        <button onClick={() => this.handleEdit()}>
          {' '}{this.state.editable ? 'Submit' : 'Edit'}{' '}
        </button>
      </>
    )
  }
}

export default Question
