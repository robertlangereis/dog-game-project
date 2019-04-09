import React, { Component } from 'react'
// import request from 'superagent'
import DogsList from './DogsList'
import { connect } from 'react-redux'
import { getList } from '../actions/setList'


class DogsListContainer extends Component {
  // state = { dogBreeds: null }

  componentDidMount() {
    this.props.getList()
  }

  render() {
    // console.log('in the render:', this.props.getList())
    return <h1>Hi</h1>
    // <DogsList dogBreeds={this.props.dogBreeds} />
  }
}

const mapStateToProps = state => {
  return { dogBreeds: state.dogBreeds }
}

console.log('mapStateToProps:', mapStateToProps())
export default connect(mapStateToProps, { getList })(DogsListContainer)