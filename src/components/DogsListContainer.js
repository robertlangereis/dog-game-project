import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'
import { getList } from '../actions/setList'
import { getImages } from '../actions/imageActions'


class DogsListContainer extends Component {
  componentDidMount() {
    this.props.getList()
    this.props.getImages()
  }

  render() {
    return <DogsList dogBreeds={this.props.dogBreeds} />
  }
}

const mapStateToProps = state => {
  return { 
    dogBreeds: state.dogBreeds
  }
}

export default connect(mapStateToProps, { getList, getImages })(DogsListContainer)