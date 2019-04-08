import React, {Component} from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux' 
import { getList } from '../actions/getList' 

export default class DogsListContainer extends Component {

  componentDidMount() {
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}