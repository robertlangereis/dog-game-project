import React, {Component} from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux' 
import { getList } from '../actions/getList' 

class DogsListContainer extends Component {

  componentDidMount() {
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}

export default connect()(DogsListContainer)