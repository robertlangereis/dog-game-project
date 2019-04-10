import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setWinner } from '../../actions/setList'
import DogWinnerContainer from './DogWinnerContainer'

class DogGame extends Component {

componentDidMount() {
    const list = this.props.dogBreeds
    this.props.setWinner(list)
    }

    render() {
        const { randomImage } = this.props

        return (
        <div className='dog-game'>
        <h1>Dog Game</h1>
        <DogWinnerContainer/>
        {!randomImage && 'Loading...'}
        {randomImage && <img src={this.props.randomImage.message} alt='RandomImage'></img>}
        <Link to= "/">Go back to Homepage</Link>
        </div>
    )}
}
const mapStateToProps = state => {
    console.log("DogGame.js state",state)
    return {
      dogWinner: state.dogs.dogWinner,
      dogBreeds: state.dogs.dogBreeds
    }
}

export default connect(mapStateToProps, { setWinner })(DogGame)