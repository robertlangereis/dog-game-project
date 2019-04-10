import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'
import home from '../../img/baum-haus.png'
import sample from '../../img/sample-image.jpg'

export default class DogGame extends Component {
    renderButton = (type, key) => {
        const divClass = `${type}-alt`
        return (<div class={divClass}>
            {!key && 'Loading...'}
            {key &&
                <div>
                    <button>{key}</button>
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
                        {this.renderButton('winner', 'Winner')}
                        {this.renderButton('random', randomBreed)}
                        {this.renderButton('random', randomBreed2)}
                    </div>
                </main>
            </div>
        )
    }
}