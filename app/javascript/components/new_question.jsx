import React from 'react'

class NewQuestion extends React.Component {
  constructor (props) {
    super(props)
    this.textInputRef = React.createRef()
  }

  handleClick () {
    var text = this.textInputRef.current.value
    this.textInputRef.current.value = ''
    console.log('The text value is ' + text)
    fetch('/questions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    })
  }

  render () {
    return (
      <>
        <input ref={this.textInputRef} placeholder='what is your question' />
        <button onClick={() => this.handleClick()}>Submit</button>
      </>
    )
  }
}

export default NewQuestion
