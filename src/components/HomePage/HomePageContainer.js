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
      <div className='height100'>
        <div className='navigation'>
          <h1>Dog Learning APP</h1>
        </div>
      
        <div>
          <Link to='/dog-list' className='links'>
          <div className='link-home'>Dog Wiki</div>
          </Link>

          <Link to='/dog-game' className='links'>
          <div className='link-home'>Dog Game</div>
          </Link>
  
        </div>
      </div>
    )
  }
}

export default connect(null, { getList })(HomePageContainer)
