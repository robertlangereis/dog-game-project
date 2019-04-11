import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'
import home from '../../img/baum-haus.png'
import list from '../../img/happy-dog.png'
import {rightAnswer, wrongAnswer, nextQuestion} from '../../actions/gameOneActions'
import { setList, getList } from '../../actions/setList';


export default class DogGame extends Component {

    nextIfRight = () => {
        rightAnswer();
        nextQuestion();
    }

    nextIfWrong = () => {
        wrongAnswer();
        nextQuestion(getList())
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
                <header 
                className="navigation">
                    <Link to="/dog-list" className="link"><img id="list" src={list} alt="list" /></Link>
                    <h1> Dog Game </h1>
                    <Link to="/"><img id="home" src={home} alt="home" /></Link>
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
