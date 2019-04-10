import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogGame extends Component {


    render() {
        const { randomImage, randomBreed, randomBreed2 } = this.props

        return (
            <div className='dog-game'>
                <header>
                    <h1> Dog Game</h1>
                </header>

                <div>
                    {!randomImage && 'Loading...'}
                    {randomImage && <img src={randomImage.message} alt='RandomImage'></img>}
                </div>

                <div class='random-alt'>
                    {!randomBreed && 'Loading...'}
                    {randomBreed &&
                        <div>
                            <button>{this.props.randomBreed}</button>
                        </div>}
                </div>

                <div class='random-alt'>
                    {!randomBreed2 && 'Loading...'}
                    {randomBreed2 &&
                        <div>
                            <button>{this.props.randomBreed2}</button>
                        </div>}
                </div>

                <Link to="/">Go back to Homepage</Link>
            </div>
        )
    }
}