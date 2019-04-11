import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getList } from '../../actions/setList'

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.getList()
  }

  render() {
    return (
      <div class='height100'>
        <div className='navigation'>
          <h1>Dog Learning APP</h1>
        </div>
        <div class='height100'>
          <div className='links'>
            <Link to='/dog-list' className='link-home'>Dog Wiki</Link>
          </div>
          <div className='links'>
            <Link to='/dog-game' className='link-home'>Dog Game</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { getList })(HomePageContainer)
