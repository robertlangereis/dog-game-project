import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImages } from '../../actions/imageActions'
import DogGame from './DogGame'
import './DogGameContainer.css'

class DogGameContainer extends Component {

  componentDidMount() {
    // console.log('props',this.props)    
    }

  render() {
    return (
      <div><DogGame dogWinnerImage={this.props.dogWinnerImage} class='container'/></div>
      // ,<div><DogGameContainer/></div>
    )
  }
}
const mapStateToProps = state => {
  // console.log('state check DogGameContainer',state)
  return { 
    randomImage: state.randomImage,
    dogWinner: state.dogs.dogWinner,
    dogWinnerImage: state.dogs.dogWinnerImage
    }
}

export default connect(mapStateToProps, { getImages })(DogGameContainer)