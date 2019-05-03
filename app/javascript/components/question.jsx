import React from 'react'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editable: false }
  }

  handleEdit () {
    this.setState({ editable: !this.state.editable })
  }

  render () {
    const text = this.state.editable
      ? <input type='text' defaultValue={this.props.question.text} />
      : <h3>{this.props.question.text}</h3>

    return (
      <div>
        <h3>{text}</h3>
        <button onClick={() => this.props.handleDelete()}>Delete</button>
        <button onClick={() => this.handleEdit()}> Edit </button>
      </div>
    )
  }
}

export default Question
