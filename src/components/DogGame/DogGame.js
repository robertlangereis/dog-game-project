import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogGame.css'
import home from '../../img/baum-haus.png'
import list from '../../img/happy-dog.png'
import { rightAnswer, wrongAnswer} from '../../actions/gameOneActions'
import { getList } from '../../actions/setList'
import { getWinner } from '../../actions/imageActions'
import { connect } from 'react-redux'
import { setPerformance } from '../../actions/setPerformance';

class DogGame extends Component {

    componentDidMount() {
        this.props.getList()
        this.props.getWinner()
    }


    nextIfRight = () => {
        rightAnswer();
        setPerformance();
        this.props.getList();
        this.props.getWinner();
    }

    nextIfWrong = () => {
        wrongAnswer(this.props.dogWinnerImage.dogWinner);
        this.props.getList();
        this.props.getWinner();
    }

    selectOption = (event) => {
        if (event.keyCode === 49 || event.key === 97) {
            console.log('you pressed 1')
            alert('you pressed one')
        } else if (event.keyCode === 50 || event.keyCode === 98) {
            alert('you pressed two')
        }


    }

    renderButton = (type, key) => {
        const divClass = `${type}-alt content`
        return (<div className={divClass}>
            {!key && 'Loading...'}
            {key &&
                <div>
                    <button onClick={key === this.props.dogWinnerImage.dogWinner
                        ? this.nextIfRight : this.nextIfWrong}
                        onKeyUp={this.selectOption}>{key}</
                    button>
                </div>}
        </div>)
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
    return {
        dogWinnerImage: state.dogs,
        dogBreeds: state.dogs.dogBreeds,
        performance: state.performance
    }
}

export default connect(mapStateToProps, { getWinner, getList, setPerformance, nextQuestion })(DogGame)
