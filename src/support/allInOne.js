import React, { Component } from 'react'
import request from 'superagent'

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