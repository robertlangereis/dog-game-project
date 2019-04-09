import React, { Component } from 'react'
import request from 'superagent'
import DogsList from './DogsList'
import { connect } from 'react-redux'
import { getList } from '../actions/setList'


export default class DogsListContainer2 extends Component {
  state = { dogBreeds: null }

  componentDidMount() {
    request("https://dog.ceo/api/breeds/list/all")
      // .then((response) => response.json())
      .then(response => {
        const keys = response.body.message
        const breeds = Object.keys(keys)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    console.log('from render:', this.state)
    if (!this.state.dogBreeds) return 'Loading...'
    return <div>
      {this.state.dogBreeds.map(item => <ul key="">{item}</ul>)}
    </div>
  }


  // render() {
  //   // console.log('in the render:', this.props.getList())
  //   return <div className="dogs-list">
  //     <h1>Dogs List</h1>
  //     <li key={breed}>
  //       <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
  //     </li>
  //     <ul>{dogBreeds.map(answer => console.log(answer))}</ul>
  //   </div>
  //   // <DogsList dogBreeds={this.props.dogBreeds} />
  // }
}
