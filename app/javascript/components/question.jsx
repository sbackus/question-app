import React from 'react'
import AllAnswers from './all_answers'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editable: false }
    this.editRef = React.createRef()
  }

  handleEdit () {
    if (this.state.editable) {
      var id = this.props.question.id
      const newText = this.editRef.current.value
      var question = { id: id, text: newText }
      this.props.handleUpdate(question)
    }
    this.setState({ editable: !this.state.editable })
  }

  render () {
    const text = this.state.editable
      ? <input type='text' ref={this.editRef} defaultValue={this.props.question.text} />
      : <h3 style={{display: 'inline', marginRight: '10px'}}>{this.props.question.text}</h3>

    return (
      <>
        {text}
        <AllAnswers answers={this.props.question.answers} />
        <button onClick={() => this.props.handleDelete()}>Delete</button>
        <button onClick={() => this.handleEdit()}>
          {' '}{this.state.editable ? 'Submit' : 'Edit'}{' '}
        </button>
      </>
    )
  }
}

export default Question
