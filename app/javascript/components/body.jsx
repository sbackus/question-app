import React from 'react'
import AllQuestions from './all_questions'
import NewQuestion from './new_question'

class Body extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: [],
      page: 1
    }
  }

  getQuestions () {
    fetch('/questions.json?page=' + this.state.page)
      .then(response => response.json())
      .then(data => this.setState({ questions: data }))
  }

  componentDidMount () {
    this.getQuestions()
  }

  getPage (increment) {
    let newState = Math.max(1, this.state.page + increment)
    this.setState({ page: newState }, () => this.getQuestions())
  }

  handleSubmit (question) {
    const newState = [question].concat(this.state.questions)
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
        <AllQuestions getPage={(i) => this.getPage(i)} questions={this.state.questions} handleDelete={(id) => this.handleDelete(id)} onUpdate={(question) => this.handleUpdate(question)} />
      </>
    )
  }
}

export default Body
