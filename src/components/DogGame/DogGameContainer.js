import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setImage } from '../../actions/gameOneActions'
import DogGame from './DogGame'

class DogGameContainer extends Component {

  componentDidMount() {
    this.props.setImage()
  }

  render() {
    return (
      <DogGame randomImage={this.props.randomImage}/>
    )
  }
}
const mapStateToProps = state => {
  return { randomImage: state.randomImage}
}

export default connect(mapStateToProps, { setImage })(DogGameContainer)