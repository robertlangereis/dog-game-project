import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'
import { getList } from '../../actions/setList'


class DogsListContainer extends Component {
  componentDidMount() {
    this.props.getList()
  }

  render() {
    return <DogsList dogBreeds={this.props.dogBreeds} />
  }
}

const mapStateToProps = state => {
  return { dogBreeds: state.dogBreeds }
}

export default connect(mapStateToProps, { getList })(DogsListContainer)