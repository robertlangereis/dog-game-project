import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'
import home from '../../img/baum-haus.png'
// import sample from '../../img/sample-image.jpg'
import {rightAnswer, wrongAnswer, nextQuestion} from '../../actions/gameOneActions'

export default class DogGame extends Component {

    nextIfRight = () => {
        rightAnswer();
        nextQuestion();
    }

    nextIfWrong = () => {
        wrongAnswer();
        nextQuestion()
    }

    renderButton = (type, key) => {
        const divClass = `${type}-alt content`
        return (<div className={divClass}>
            {!key && 'Loading...'}
            {key &&
                <div>
                    <button onClick={ key === 'winner' ? this.nextIfRight : this.nextIfWrong}>{key}</button>
                </div>}
        </div>)
    }

    render() {
        const {  randomBreed, randomBreed2 } = this.props
        const { dogWinnerImage } = this.props
        const array = ['winner', randomBreed, randomBreed2]
        const newArray = array.sort((a, b) => 0.5 - Math.random())
        return (
            <div className='dog-game'>
                <header>
                    <Link to="/"><img id="home" src={home} alt="home" /></Link>
                    <h1> Dog Game</h1>
                </header>

                <main>
                    <div className='winner-img'>
                        {!dogWinnerImage && 'Loading...'}
                        {dogWinnerImage && <img id='winner-img' src={dogWinnerImage} alt='RandomImage'></img>}
                    </div>
                    <div className='answers'>
                        {this.renderButton('button', newArray[0])}
                        {this.renderButton('button', newArray[1])}
                        {this.renderButton('button', newArray[2])}
                    </div>
                </main>
            </div>
        )
    }
}
