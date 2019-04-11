import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getImages } from '../../actions/setList'
import DogWinnerImage from './DogWinnerImage';

class DogWinnerContainer extends Component {

  componentDidMount() {
    const winnerImage = this.props.dogWinner.match.params.breed
    this.props.getImages(winnerImage)
    console.log(winnerImage)
  }

  render() {
    return (
      <div>
        <h1>{this.props.dogWinner}</h1>
        <div images={this.props.dogImage}></div>
        <DogWinnerImage image={this.props.dogImage} class='dumb' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("container state", state)
  return {
    dogBreeds: state.dogs.dogBreeds,
    dogWinner: state.dogs.dogWinner,
    dogImage: state.dogImage
  }
}

export default connect(mapStateToProps)(DogWinnerContainer)