import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'
import home from '../../img/baum-haus.png'
import sample from '../../img/sample-image.jpg'
import {rightAnswer, wrongAnswer} from '../../actions/gameOneActions'

export default class DogGame extends Component {

    renderButton = (type, key) => {
        const divClass = `${type}-alt content`
        return (<div className={divClass}>
            {!key && 'Loading...'}
            {key &&
                <div>
                    <button onClick={ key === 'winner' ? rightAnswer:wrongAnswer}>{key}</button>
                </div>}
        </div>)
    }

    render() {
        const { randomImage, randomBreed, randomBreed2 } = this.props
        const array = ['winner', randomBreed, randomBreed2]
        const newArray = array.sort((a, b) => 0.5 - Math.random())
        console.log(newArray)

        return (
            <div className='dog-game'>
                <header>
                    <Link to="/"><img id="home" src={home} alt="home" /></Link>
                    <h1> Dog Game</h1>
                </header>

                <main>
                    <div className='winner-img'>
                        {!sample && 'Loading...'}
                        {sample && <img id='winner-img' src={sample} alt='RandomImage'></img>}
                    </div>
                    <div className='answers'>
                        {this.renderButton('winner', newArray[0])}
                        {this.renderButton('winner', newArray[1])}
                        {this.renderButton('winner', newArray[2])}
                    </div>
                </main>
            </div>
        )
    }
}