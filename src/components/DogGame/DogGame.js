import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'
import home from '../../img/baum-haus.png'
import sample from '../../img/sample-image.jpg'

export default class DogGame extends Component {
    renderButton = (type, content) => {
        const divClass = `${type}-alt`
        return (<div class={divClass}>
            {!content && 'Loading...'}
            {content &&
                <div>
                    <button>{content}</button>
                </div>}
        </div>)
    }

    render() {
        const { randomImage, randomBreed, randomBreed2 } = this.props

        return (
            <div className='dog-game'>
                <header>
                    <Link to="/"><img id="home" src={home} alt="home" /></Link>
                    <h1> Dog Game</h1>
                </header>

                <main>
                    <div class='winner-img'>
                        {!sample && 'Loading...'}
                        {sample && <img id='winner-img' src={sample} alt='RandomImage'></img>}
                    </div>

                    <div class='answers'>
                        <div class='winner-alt'>
                            {!randomBreed && 'Loading...'}
                            {randomBreed &&
                                <div>
                                    <button>Winner</button>
                                </div>}
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
                    </div>
                </main>
            </div>
        )
    }
}