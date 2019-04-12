import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import home from '../../../img/baum-haus.png'
import list from '../../../img/happy-dog.png'

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>
      <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
    </li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <div className="navigation">
          <Link to="/" className="link"><img id="home" src={home} alt="home" /></Link>
          <h1>Dogs List</h1>
          <Link to="/dog-list" className="link"><img id="list" src={list} alt="list" /></Link>
        </div>
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
