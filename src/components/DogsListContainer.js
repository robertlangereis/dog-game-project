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
    // return <h1>Hi</h1>
    return <DogsList dogBreeds={this.props.dogBreeds} />
  }
}

const mapStateToProps = state => {
  console.log(state)

  return { dogBreeds: state.dogBreeds }
}

console.log('mapStateToProps:',)
export default connect(mapStateToProps, { getList })(DogsListContainer)