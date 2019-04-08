import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages(props) {
    console.log('props test:', props)
    const { images } = props
    return (
        <div className="dog-breed-images">
            <h1>Dogs Breed Images</h1>

            This page will show images of the {props.breed} breed.

            <Link to="/">Go back to the index</Link>

            <div>
                {images &&
                    console.log('Logging the images: ', images.map(url => {
                        return {for (let i=0; i < 10; i++) {
                            return <img src={url} alt="Dog" />
                        }}}))}
                {!images && 'Loading...'}
            </div>
        </div>
    )
}