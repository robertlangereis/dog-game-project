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
    
    constructor (props) {
        super(props)
        this.state = { hint: "..." }
      }

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
                    <button id={"breed "+key} onClick={key === this.props.dogWinnerImage.dogWinner
                         ? this.nextIfRight : this.nextIfWrong}>{key}</button>
                </div>}
        </div>)
    }

    // getHint = () => {
    // const winner = this.props.dogWinner
    // const shuffled = winner.split('').sort(()=> {return 0.5-Math.random()}).join('').slice(0,2);
    // }
    
    render() {
        const valuePair = this.props.dogWinnerImage
        const dogBreeds = this.props.dogBreeds
        // Dog Winner and Dog Winner Image
        const dogWinner = valuePair.dogWinner ? valuePair.dogWinner : 'Loading...'
        const dogWinnerImage = valuePair.dogWinnerImage
        // const secondHint = dogWinner.split('').sort(()=> {return 0.5-Math.random()}).join('').slice(0,1)

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
                    <div className='hint'>
                    <h3 id="demo">{'Hint: it\'s not a '+test}</h3>
                    </div>
                    <div className='answers'>
                        {this.renderButton('button', newArray[0])}
                        {this.renderButton('button', newArray[1])}
                        {this.renderButton('button', newArray[2])}
                        <button onClick={() => { document.getElementById("demo").style.color = "black"}}>HINT</button>
                        {/* <h3>{'Hint: '+this.state.hint}</h3> */}
                        
                        {/* <button onClick="toggle_visibility">HINT</button> */}
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('DogGame state:', state)
    return {
        dogWinnerImage: state.dogs,
        dogWinner: state.dogs.dogWinner,
        dogBreeds: state.dogs.dogBreeds,
    }
}

export default connect(mapStateToProps, { getWinner, getList })(DogGame)
