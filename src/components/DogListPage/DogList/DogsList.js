import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogsList.css'

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>
      <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
    </li>
  }

  render() {
    const { dogBreeds } = this.props
    console.log('from DogsList.js:', this.dogBreeds)
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        {!dogBreeds && 'Loading...'}

        {
          dogBreeds &&
          <ul>{dogBreeds.map(answer =>
            <li key={answer} className="dog-links">{this.renderDogBreed(answer)}</li>)}
          </ul>
        }

      </div>
    )
  }
}
