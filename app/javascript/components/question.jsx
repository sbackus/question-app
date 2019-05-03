import React from 'react'

class Question extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.question.text}</h3>
        <button onClick={() => this.props.handleDelete()}>Delete</button>
        <button onClick={() => this.props.handleEdit()}> Edit </button>
      </div>
    )
  }
}

export default Question
