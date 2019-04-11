import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getImages } from '../../actions/imageActions'

class DogGame extends Component {

    componentDidMount() {
        this.props.getImages(this.props.dogWinner)
    }

    render() {
        const dogWinnerImage = this.props.dogImage[1]
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
    const { dogWinnerImage } = state.dogs
    return {
        dogBreeds: state.dogs.dogBreeds,
        dogWinnerImage,
        dogWinner: state.dogs.dogWinner,
        getImages: state.getImages,  
        dogImage: state.dogImage      
    }
}

export default connect(mapStateToProps, { getImages })(DogGame)