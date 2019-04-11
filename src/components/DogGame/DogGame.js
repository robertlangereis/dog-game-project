import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'
import home from '../../img/baum-haus.png'
import list from '../../img/happy-dog.png'
import { rightAnswer, wrongAnswer, nextQuestion } from '../../actions/gameOneActions'
import { getList } from '../../actions/setList'
import { getWinner } from '../../actions/imageActions'
import { connect } from 'react-redux'


class DogGame extends Component {

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
                    <button onClick={key === this.props.dogWinner ? this.nextIfRight : this.nextIfWrong}>{key}</button>
                </div>}
        </div>)
    }

    render() {
        const valuePair = this.props.dogWinnerImage

        const { randomBreed, randomBreed2 } = this.props ? this.props : 'Loading...'

        const dogWinnerImage = valuePair.dogWinnerImage
        
        const dogWinner = valuePair.dogWinner ? valuePair.dogWinner : 'Loading...'

        console.log(dogWinner)
        const array = [dogWinner, randomBreed, randomBreed2]

        const newArray = array.sort((a, b) => 0.5 - Math.random())
        console.log(newArray)
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

const mapStateToProps = state => {
    console.log('DogGame state:', state.dogs)
    return {
        dogWinnerImage: state.dogs,
    }
}

export default connect(mapStateToProps, { getWinner })(DogGame)
