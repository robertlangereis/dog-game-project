import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'
import { getList } from '../../../actions/setList'

class DogsListContainer extends Component {
  componentDidMount() {
    this.props.getList()
  }

  render() {
    return <div>
      <DogsList dogBreeds={this.props.dogBreeds} />
    </div>
  }
}

const mapStateToProps = state => {
  return { dogBreeds: state.dogs.dogBreeds}
}

export default connect(mapStateToProps, { getList })(DogsListContainer)