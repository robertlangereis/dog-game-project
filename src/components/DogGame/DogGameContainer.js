import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImages } from '../../actions/imageActions'
import DogGame from './DogGame'
import { getWinner } from '../../actions/imageActions'

export default class DogGameContainer extends Component {
  render() {
    // let test = this.props.dogBreeds ? this.props.dogBreeds.sort(() => .5 - Math.random()).slice(0, 1) : 'Loading...'
    // let test2 = this.props.dogBreeds ? this.props.dogBreeds.sort(() => .5 - Math.random()).slice(0, 1) : 'Loading...'
    return (
      <div>
        {/* <DogGame /> */}
        <DogGame
          // class='container'
          // randomBreed={test}
          // randomBreed2={test2}
        />
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   // console.log('DogGameContainer state:', state.dogs)
//   return {
//     dogBreeds: state.dogs.dogBreeds,
//     dogWinnerImage: state.dogs,
//     dogWinner: state.dogs.dogWinner,
//     getImages: state.getImages,
//     dogImage: state.dogImage
//   }
// }

// export default connect(mapStateToProps, { getImages, getWinner })(DogGameContainer)
