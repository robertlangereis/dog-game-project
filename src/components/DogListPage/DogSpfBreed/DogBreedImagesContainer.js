import React, { Component } from 'react'
import DogBreedImages from '../DogSpfBreed/DogBreedImages'
import { connect } from 'react-redux'
import { getWinner } from '../../../actions/imageActions'

class DogsBreedImagesContainer extends Component {

  componentDidMount() {
    console.log('DogBreedImagesContainer componentDidMount test!')
    const breed = this.props.match.params.breed
    this.props.getWinner(breed)
  }

  render() {
    return <DogBreedImages images={ this.props.dogImage } breed={this.props.match.params.breed} />
  }
}

const mapStateToProps = state => {
  return { dogImage: state.dogImage }
}

export default connect(mapStateToProps, { getWinner })(DogsBreedImagesContainer)