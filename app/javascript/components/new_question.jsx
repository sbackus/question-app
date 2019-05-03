import React from 'react'

class NewQuestion extends React.Component {
  constructor (props) {
    super(props)
    this.textInputRef = React.createRef()
  }

  handleClick () {
    const text = this.textInputRef.current.value
    this.textInputRef.current.value = ''
    fetch('/questions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    })
      .then((response) => { return response.json() })
      .then((data) => { this.props.handleSubmit(data) })
  }

  handleEnter (event) {
    if (event.key === 'Enter') {
      this.handleClick()
    }
  }

  render () {
    return (
      <>
        <h2> Add a question: </h2>
        <input onKeyDown={(e) => this.handleEnter(e)} ref={this.textInputRef} placeholder='what is your question' />
        <button onClick={() => this.handleClick()}>Submit</button>
      </>
    )
  }
}

export default NewQuestion
