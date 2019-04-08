import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogGame extends Component {
  render() {
    return (
      <div>
        <h1>Dog Game</h1>
        <h1>Hello</h1>
        <Link to="/">Go back to the index</Link>
      </div>
    )
  }
}
