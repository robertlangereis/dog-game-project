import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setWinner } from '../../actions/setList'
import { getImages } from '../../actions/imageActions'
// import DogWinnerContainer from './DogWinnerContainer'

class DogGame extends Component {

    componentDidMount() {
        console.log('DogGam this.props test:', this.props)

        // const { dogWinnerImage } = this.props

        // console.log('componentDidMount dogWinnerImage test:', dogWinnerImage)
        const list = this.props.dogBreeds
        this.props.setWinner(list)
        console.log('DOGWINNER GETIMAGE', this.props.dogWinnerImage)
        this.props.getImages(this.props.dogWinner)
        console.log('DOGWINNER BREED', this.props.dogWinner)
    }

    render() {
        // const { dogWinnerImage } = this.props.dogImage[1]
        console.log("image url", this.props.dogImage[1])

        return (
            <div className='dog-game'>
                <h1>Dog Game</h1>
                {/* {!dogWinnerImage && 'Loading...'} */}

                {<img src={this.props.dogImage[1]} alt='RandomImage1'></img>}

                <Link to= "/">Go back to Homepage</Link>
            </div>
        )}
}

const mapStateToProps = state => {
    console.log("DogGame.js state",state)

    const { dogWinnerImage } = state.dogs
    // console.log('mapStateToProps dogImage :', state.dogImage)

    return {
        dogBreeds: state.dogs.dogBreeds,
        dogWinnerImage,
        dogWinner: state.dogs.dogWinner,
        getImages: state.getImages,  
        dogImage: state.dogImage      
    }
}

export default connect(mapStateToProps, { setWinner, getImages })(DogGame)