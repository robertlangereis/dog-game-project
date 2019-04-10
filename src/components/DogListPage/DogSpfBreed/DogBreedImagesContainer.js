import React, { Component } from 'react'
import DogBreedImages from '../DogList/DogBreedImages'
import { connect } from 'react-redux'
import { getImages } from '../../../actions/imageActions'
import './DogsBreedImagesContainer.css'

class DogsBreedImagesContainer extends Component {

  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.getImages(breed)
  }

  render() {
    return <DogBreedImages images={ this.props.dogImage } breed={this.props.match.params.breed} />
  }
}

const mapStateToProps = state => {
  console.log ("state of dogimage ", state.dogImage)
  return { dogImage: state.dogImage }
}

export default connect(mapStateToProps, { getImages })(DogsBreedImagesContainer)