// Run this example by adding <%= javascript_pack_tag 'main' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Main = props => (
  <div>Greetings {props.name}!</div>
)

Main.defaultProps = {
  name: 'David'
}

Main.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
