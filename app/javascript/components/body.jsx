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
    const newState = this.state.questions.concat(question)
    this.setState({ questions: newState })
  }

  handleUpdate (question) {
    fetch(`/questions/${question.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: question })
    })
      .then((response) => { return response.json() })
      .then((data) => { this.updateQuestions(question) })
  }

  updateQuestions (question) {
    var questions = this.state.questions.filter((q) => { return q.id !== question.id })
    questions.push(question)

    this.setState({ questions: questions })
  }

  handleDelete (id) {
    fetch(`/questions/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => { this.removeQuestionClient(id) })
  }

  removeQuestionClient (id) {
    const newQuestions = this.state.questions.filter((question) => {
      return question.id !== id
    })

    this.setState({ questions: newQuestions })
  }

  render () {
    return (
      <>
        <NewQuestion handleSubmit={(question) => this.handleSubmit(question)} />
        <AllQuestions questions={this.state.questions} handleDelete={(id) => this.handleDelete(id)} onUpdate={(question) => this.handleUpdate(question)} />
      </>
    )
  }
}

export default Body
