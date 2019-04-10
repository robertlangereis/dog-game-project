import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImages } from '../../actions/imageActions'
import DogGame from './DogGame'
import './DogGameContainer.css'

class DogGameContainer extends Component {

  componentDidMount() {
    // console.log('props',this.props)    
    const winnerParams = !this.props.dogWinner && this.props.dogWinner.match.params.breed
    this.props.getImages(winnerParams)
  }

  render() {
    return (
      <div><DogGame randomImage={this.props.randomImage} class='container'/></div>
      // ,<div><DogGameContainer/></div>
    )
  }
}
const mapStateToProps = state => {
  console.log('state check DogGameContainer',state)
  return { 
    randomImage: state.randomImage,
    dogWinner: state.dogs.dogWinner
    }
}

export default connect(mapStateToProps, { getImages })(DogGameContainer)