import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImages } from '../../actions/imageActions'
import DogGame from './DogGame'
import './DogGameContainer.css'

class DogGameContainer extends Component {

  componentDidMount() {
    this.props.getImages(this.props.dogWinner)
  }

  render() {
    return (
      <div><DogGame dogWinnerImage={this.props.dogImage[1]} class='container'/></div>
    )
  }
}
const mapStateToProps = state => {
  const { dogWinnerImage } = state.dogs
  return { 
    dogBreeds: state.dogs.dogBreeds,
    dogWinnerImage,
    dogWinner: state.dogs.dogWinner,
    getImages: state.getImages,  
    dogImage: state.dogImage   
    }
}

export default connect(mapStateToProps, { getImages })(DogGameContainer)