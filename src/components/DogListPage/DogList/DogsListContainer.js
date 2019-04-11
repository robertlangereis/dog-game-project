import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'
import { getList } from '../../../actions/setList'
import { Link } from 'react-router-dom'

class DogsListContainer extends Component {
  componentDidMount() {
    this.props.getList()
  }

  render() {
    return <div>
      <Link to="/">Go back to the index</Link>
      <DogsList dogBreeds={this.props.dogBreeds} />
    </div>
  }
}

const mapStateToProps = state => {
  return { 
    dogBreeds: state.dogBreeds,
  }
}

export default connect(mapStateToProps, { getList })(DogsListContainer)