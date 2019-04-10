import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePageContainer.css'

export default class HomePageContainer extends Component {
  render() {
    return (
      <div class='main'>
        <div class='navegation'>
          <Link to='/dog-list' class='link'>Link to the learning page</Link>
        </div>
        <div class='navegation'>
          <Link to='/dog-game' class='link'>Link to the game page</Link>
        </div>
      </div>
    )
  }
}
