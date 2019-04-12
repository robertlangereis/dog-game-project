import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'
import home from '../../img/baum-haus.png'
import list from '../../img/happy-dog.png'
import { rightAnswer, wrongAnswer } from '../../actions/gameOneActions'
import { getList } from '../../actions/setList'
import { getWinner } from '../../actions/imageActions'
import { connect } from 'react-redux'
import { setPerformance } from '../../actions/setPerformance';

class DogGame extends Component {
//local state required for the storing of the "hidden" link
    constructor(props) {
        super(props)
        this.state = { hint: "..." }
    }

    locState = []

    componentDidMount() {
        this.props.getList()
        this.props.getWinner()
        document.addEventListener('keyup', this.selectOption)
    }

    componentWillUnmount() {
        document.addEventListener('keyup', this.selectOption)
    }

    nextIfRight = () => {
        rightAnswer();
        this.props.setPerformance();
        this.props.getList();
        this.props.getWinner();
    }

    nextIfWrong = () => {
        wrongAnswer(this.props.dogWinnerImage.dogWinner);
        this.props.getList();
        this.props.getWinner();
    }

//the various keycode options for when a key is pressed, corresponding to the answers
    selectOption = (event) => {
        if (event.keyCode === 49 || event.keyCode === 97) {
            const key = this.locState[0]
            key === this.props.dogWinnerImage.dogWinner ? this.nextIfRight() : this.nextIfWrong()
        } else if (event.keyCode === 50 || event.keyCode === 98) {
            const key = this.locState[1]
            key === this.props.dogWinnerImage.dogWinner ? this.nextIfRight() : this.nextIfWrong()
        } else if (event.keyCode === 51 || event.keyCode === 99) {
            const key = this.locState[2]
            key === this.props.dogWinnerImage.dogWinner ? this.nextIfRight() : this.nextIfWrong()
        }
    }

//call for rendering the buttons for the answers: one winner, two random generated breeds
    renderButton = (type, key) => {
        const divClass = `${type}-alt content`
        return (<div className={divClass}>
            {!key && 'Loading...'}
            {key &&
                <div>
                    <button id="button-div" onClick={key === this.props.dogWinnerImage.dogWinner
                        ? this.nextIfRight : this.nextIfWrong} onKeyUp={this.selectOption}>{key}</button>
                </div>}
        </div>)
    }

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
                    <Link to="/">
                        <img id="home" src={home} alt="home" />
                    </Link>
                    <h1> Dog Game </h1>
                    <Link to="/dog-list" className="link">
                        <img id="list" src={list} alt="list" />
                    </Link>
                </header>

                <main>
                    <div className='winner-img'>
                        <img id='winner-img' src={dogWinnerImage} alt='RandomImage' />
                    </div>
                    <div className='hint'>
                    {/* hidden Hint showing underneath dog-image */}
                        <h3 id="demo">{'Hint: it\'s not a ' + test}</h3>
                    </div>
                    <div className='answers'>
                    {/* div with the answers, with a call on the rendering of three buttons */}
                        <div>
                            {this.renderButton('button', newArray[0])}
                            <h3 class='button-num'>1</h3>
                        </div>
                        <div >
                            {this.renderButton('button', newArray[1])}
                            <h3 class='button-num'>2</h3>
                        </div>
                        <div>
                            {this.renderButton('button', newArray[2])}
                            <h3 class='button-num'>3</h3>
                        </div>
                        {/* button for getting a hint*/}
                        <button id="button-hint" onClick={() => { document.getElementById("demo").style.color = "black" }}>HINT</button>
                    </div>
                    <div>
                    {/*counter for the number of correct answers, converted to a percentage*/}
                        <h1 id='performance-counter'>CORRECTOS:{this.props.performance}</h1>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dogWinnerImage: state.dogs,
        dogWinner: state.dogs.dogWinner,
        dogBreeds: state.dogs.dogBreeds,
        performance: state.performance
    }
}

export default connect(mapStateToProps, { getWinner, getList, setPerformance })(DogGame)
