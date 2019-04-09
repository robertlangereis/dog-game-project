import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    const { images } = props
    return (
        <div className="dog-breed-images">
            <h1>Dogs Breed Images</h1>

            This page will show images of the {props.breed} breed.

            <Link to="/">Go back to the index</Link>
            
            <div>
                {!images && 'Loading...'}
                {images && images.slice(0, 10).map(url => <img key={url} src={url} alt="Dog" />)}
            </div>
        </div>
    )
}
