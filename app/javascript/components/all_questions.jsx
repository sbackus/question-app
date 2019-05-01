import React from 'react'

class AllQuestions extends React.Component {
  constructor (props) {
    super(props)
    this.state = { questions: [] }
  }

  componentDidMount () {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => this.setState({ questions: data }))
  }

  render () {
    var questions = this.state.questions.map((question) => {
      return (
        <div key={question.id}>
          <h3>{question.text}</h3>
        </div>
      )
    })

    return (
      <div>
        {questions}
      </div>
    )
  }
}

export default AllQuestions
