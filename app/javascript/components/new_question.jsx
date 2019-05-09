import React from 'react'

class NewQuestion extends React.Component {
  constructor (props) {
    super(props)
    this.questionTextInputRef = React.createRef()
    this.state = { answers: [] }
  }

  handleClick () {
    const text = this.questionTextInputRef.current.value
    this.questionTextInputRef.current.value = ''
    this.setState(() => ({ answers: [] }))
    fetch('/questions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text,
        answers_attributes: this.state.answers
      })
    })
      .then((response) => { return response.json() })
      .then((data) => { this.props.handleSubmit(data) })
  }

  handleEnter (event) {
    if (event.key === 'Enter') {
      this.handleClick()
    }
  }

  addAnswer () {
    this.setState({ answers: this.state.answers.concat({}) })
  }

  handleAnswerChange (event, index) {
    const newAnswer = { text: event.target.value, distractor: index !== 0 }
    this.setState((state) => ({
      answers: state.answers.map((answer, i) => index === i ? newAnswer : answer)
    }))
  }

  render () {
    let answers = this.state.answers.map((answer, index) => {
      return (
        <input key={index} onChange={(e) => this.handleAnswerChange(e, index)}
          ref={this.answerTextInputRef}
          placeholder={index === 0 ? 'correct answer' : 'distractor'} />
      )
    })

    return (
      <>
        <h2> Add a Question: </h2>
        <input onKeyDown={(e) => this.handleEnter(e)}
          ref={this.questionTextInputRef}
          placeholder='what is your question?' />
        {answers}
        <button onClick={() => this.addAnswer()}>Add Answer</button>
        <button onClick={() => this.handleClick()}>Submit</button>
      </>
    )
  }
}

export default NewQuestion
