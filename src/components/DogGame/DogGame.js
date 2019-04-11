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

    state = {
        isHidden: true}

    componentDidMount() {
        this.props.getList()
        this.props.getWinner()
    }

    nextIfRight = () => {
        rightAnswer();
        nextQuestion();
    }

    nextIfWrong = () => {
        wrongAnswer(this.props.dogWinnerImage.dogWinner);
        nextQuestion()
    }

    renderButton = (type, key) => {
        const divClass = `${type}-alt content`
        return (<div className={divClass}>
            {!key && 'Loading...'}
            {key &&
                <div>
                    <button onClick={key === this.props.dogWinnerImage.dogWinner
                         ? this.nextIfRight : this.nextIfWrong}>{key}</button>
                </div>}
        </div>)
    }


    toggleHidden = () => {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
    
    render() {
        const valuePair = this.props.dogWinnerImage
        const dogBreeds = this.props.dogBreeds

        // Dog Winner and Dog Winner Image
        const dogWinner = valuePair.dogWinner ? valuePair.dogWinner : 'Loading...'
        const dogWinnerImage = valuePair.dogWinnerImage

        // Get two random dogs
        const test = dogBreeds ? dogBreeds.sort(() => .5 - Math.random()).slice(0, 1) : 'Loading...'
        const test2 = dogBreeds ? dogBreeds.sort(() => .5 - Math.random()).slice(0, 1) : 'Loading...'

        // Randomise the buttons order
        const newArray = [dogWinner, test, test2].sort((a, b) => 0.5 - Math.random())

        return (
            <div className='dog-game'>
                <header
                    className="navigation">
                    <Link to="/dog-list" className="link">
                        <img id="list" src={list} alt="list" />
                    </Link>
                    <h1> Dog Game </h1>
                    <Link to="/">
                        <img id="home" src={home} alt="home" />
                    </Link>
                </header>

                <main>
                    <div className='winner-img'>
                        <img id='winner-img' src={dogWinnerImage} alt='RandomImage' />}
                    </div>
                    <div className='answers'>
                        {this.renderButton('button', newArray[0])}
                        {this.renderButton('button', newArray[1])}
                        {this.renderButton('button', newArray[2])}
                        <h3>{this.newHintArray}</h3>
                        <button onClick={this.toggleHidden}>HINT</button>
                        <div>{!this.state.isHidden && <Child/>}</div>
                    </div>
                </main>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        const shuffled = this.props.dogWinner.split('').sort(function(){return 0.5-Math.random()}).join('').slice(0,1);
        const newHintArray = []
      return (
          (<div>{newHintArray.push(shuffled)}</div>)
      )}
  }

const mapStateToProps = state => {
    console.log('DogGame state:', state)
    return {
        dogWinnerImage: state.dogs,
        dogWinner: state.dogs.dogWinner,
        dogBreeds: state.dogs.dogBreeds,
    }
}

export default connect(mapStateToProps, { getWinner, getList })(DogGame, Child)
