import React from 'react'
import { Link } from 'react-router-dom'
import './DogBreedImages.css'
import logo from '../../../img/baum-haus.png'


export default (props) => {
    const { images } = props
    return (
        <div className="dog-breed-images">
            <h1>Dogs Breed Images</h1>

            This page will show images of the {props.breed} breed.

            <Link to="/"><img></img>/img></Link>

            <Link to="/dog-list">Go back to the list</Link>

            <div class='images'>
                <div class='image'>
                    {!images && 'Loading...'}
                    {images && images.slice(0, 10).map(url => <img key={url} src={url} alt="Dog" />)}
                </div>
            </div>
        </div>
    )
}
