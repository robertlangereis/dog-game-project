import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'

export default class DogGame extends Component {


    render() {
        const { randomImage, randomBreed, randomBreed2 } = this.props

        return (
            <div className='dog-game'>
                <header>
                    <Link to="/">Go back to Homepage</Link>
                    <h1> Dog Game</h1>
                </header>

                <main>
                    <div class='winner-img'>
                        {!randomImage && 'Loading...'}
                        {randomImage && <img id='winner-img' src={randomImage.message} alt='RandomImage'></img>}
                    </div>

                    <div class='answers'>
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
                    </div>
                </main>
            </div>
        )
    }
}