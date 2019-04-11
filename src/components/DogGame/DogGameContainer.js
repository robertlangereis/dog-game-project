import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImages } from '../../actions/imageActions'
import DogGame from './DogGame'

class DogGameContainer extends Component {

  componentDidMount() {
    this.props.getImages(this.props.dogWinner)
  }

  render() {
   let test = this.props.dogBreeds.sort(() => .5 - Math.random()).slice(0, 1)
   let test2 = this.props.dogBreeds.sort(() => .5 - Math.random()).slice(0, 1)
  //  const dogWinnerImage = this.props.dogWinnerImage[1]
    return (
      <DogGame
        dogWinnerImage={this.props.dogImage[1]}
        class='container'
        randomBreed={test}
        randomBreed2={test2}
        dogWinner={this.props.dogWinner}
      />  
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
