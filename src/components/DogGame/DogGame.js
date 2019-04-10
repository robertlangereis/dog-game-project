import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogGame extends Component {


    render() {
        const { randomImage, randomBreed, randomBreed2 } = this.props

        return (
            <div className='dog-game'>
                <h1>Dog Game</h1>
        
                {!randomImage && 'Loading...'}
                {randomImage && <img src={randomImage.message} alt='RandomImage'></img>}
                {!randomBreed && 'Loading...'}
                {randomBreed &&
        <div>
            <button>{this.props.randomBreed}</button>
        </div>}
        {!randomBreed2 && 'Loading...'}
                {randomBreed2 &&
        <div>
            <button>{this.props.randomBreed2}</button>
        </div>}
        <Link to= "/">Go back to Homepage</Link>
        </div>
    )}
}