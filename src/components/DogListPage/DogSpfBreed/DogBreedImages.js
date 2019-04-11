import React from 'react'
import { Link } from 'react-router-dom'
import './DogBreedImages.css'
import home from '../../../img/baum-haus.png'
import list from '../../../img/happy-dog.png'


export default (props) => {
    const { images } = props
    return (
        <div className="dog-breed-images">
            <div className="navigation">
                <Link to="/dog-list" className="link"><img id="list" src={list} alt="list" /></Link>
                <h1>{props.breed} Images</h1>
                <Link to="/" className="link"><img id="home" src={home} alt="home" /></Link>
            </div>

            <div className='images'>
                <div className='image'>
                    {!images && 'Loading...'}
                    {images && images.slice(0, 10).map(url => <img className='dog-image' key={url} src={url} alt="Dog" />)}
                </div>
            </div>
        </div>
    )
}