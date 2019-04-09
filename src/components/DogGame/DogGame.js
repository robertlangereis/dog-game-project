import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogGame extends Component {


    render() {
        const { randomImage } = this.props

        return (
        <div className='dog-game'>
        <h1>Dog Game</h1>
        
        {!randomImage && 'Loading...'}
        {randomImage && <img src={this.props.randomImage.message} alt='RandomImage'></img>}
        <Link to= "/">Go back to Homepage</Link>
        </div>
    )}
}