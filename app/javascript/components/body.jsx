import React from 'react'
import AllQuestions from './all_questions'
import NewQuestion from './new_question'

class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = { questions: [] }
  }

  componentDidMount () {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => this.setState({ questions: data }))
  }

  handleSubmit (question) {
    var newState = this.state.questions.concat(question)
    this.setState({ questions: newState })
  }

  render () {
    return (
      <>
        <NewQuestion handleSubmit={(question) => this.handleSubmit(question)} />
        <AllQuestions questions={this.state.questions} />
      </>
    )
  }
}

export default Body
