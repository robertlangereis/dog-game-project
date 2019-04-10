import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setWinner } from '../../actions/setList'
import DogWinnerContainer from './DogWinnerContainer'

class DogGame extends Component {

componentDidMount() {
    this.props.setWinner()
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
    console.log("container state",state)
    return {
      dogWinner: state.dogs.dogWinner
    }
}

export default connect(mapStateToProps, { setWinner })(DogGame)