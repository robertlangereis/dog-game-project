import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImages } from '../../actions/imageActions'
import DogGame from './DogGame'
import './DogGameContainer.css'

class DogGameContainer extends Component {

  componentDidMount() {
    const winnerImage = this.props.dogWinner.match.params.breed
    this.props.getImages(winnerImage)
    console.log(winnerImage)
  }

  render() {
    return (
      <div><DogGame randomImage={this.props.randomImage} class='container'/></div>
      // ,<div><DogGameContainer/></div>
    )
  }
}
const mapStateToProps = state => {
  return { 
    randomImage: state.randomImage,
    dogBreeds: state.dogs.dogBreeds,
    dogWinner: state.dogs.dogWinner,
    }
}

export default connect(mapStateToProps, { getImages })(DogGameContainer)