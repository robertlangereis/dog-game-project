import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImages } from '../../actions/imageActions'
import { getList } from '../../actions/setList'
import DogGame from './DogGame'

class DogGameContainer extends Component {

  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.getImages(breed)       
    this.props.getList()
  }

  render() {
   let test = this.props.dogBreeds.sort(() => .5 - Math.random()).slice(0, 1)
   let test2 = this.props.dogBreeds.sort(() => .5 - Math.random()).slice(0, 1)
    return (
      <DogGame
        randomImage={this.props.dogImage}
        class='container'
        randomBreed={test}
        randomBreed2={test2}
      />  
    )
  }
}
const mapStateToProps = state => {
  return {
    dogImage: state.dogImage,
    dogBreeds: state.dogBreeds
  }
}

export default connect(mapStateToProps, { getImages, getList })(DogGameContainer)