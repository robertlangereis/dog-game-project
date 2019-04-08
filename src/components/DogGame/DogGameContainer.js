import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogGameContainer extends Component {
  render() {
    return (
      <div>
        <h1>Dog Game</h1>
        <Link to="/">Go back to the index</Link>
      </div>
    )
  }
}
