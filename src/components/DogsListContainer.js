import React, {Component} from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux' 
import { getList } from '../actions/getList' 

class DogsListContainer extends Component {

  componentDidMount() {
    this.props.getList()
  }

  render() {
    return <DogsList dogBreeds={this.props.dogBreeds} />
  }
}

const mapStateToProps = state => ({
  dogBreeds: state.listReducer
})

export default connect(mapStateToProps, { getList })(DogsListContainer)