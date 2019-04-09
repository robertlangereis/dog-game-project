import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/dog-list'>Link to the learning page</Link>
        </div>
        <div>
          <Link to='/dog-game'>Link to the game page</Link>
        </div>
      </div>
    )
  }
}