import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setWinner } from '../../actions/setList'
import { getImages } from '../../actions/imageActions'
// import DogWinnerContainer from './DogWinnerContainer'

class DogGame extends Component {

    componentDidMount() {
        console.log('DogGam this.props test:', this.props)

        const { dogWinnerImage } = this.props

        console.log('componentDidMount dogWinnerImage test:', dogWinnerImage)
        const list = this.props.dogBreeds
        this.props.setWinner(list)
        this.props.getImages(dogWinnerImage)
        console.log('this props', this.props)
    }

    render() {
        const { dogWinnerImage } = this.props.getImages
        console.log("image url", dogWinnerImage)

        return (
            <div className='dog-game'>
                <h1>Dog Game</h1>
                {!dogWinnerImage && 'Loading...'}

                {dogWinnerImage && <img src={dogWinnerImage} alt='RandomImage1'></img>}

                <Link to= "/">Go back to Homepage</Link>
            </div>
        )}
}

const mapStateToProps = state => {
    console.log("DogGame.js state",state)

    const { dogWinnerImage } = state.dogs
    console.log('mapStateToProps dogWinnerImage test:', dogWinnerImage)

    return {
        dogBreeds: state.dogs.dogBreeds,
        dogWinnerImage,
        // dogWinner: state.dogs.dogWinner,
        getImages: state.getImages        
    }
}

export default connect(mapStateToProps, { setWinner, getImages })(DogGame)