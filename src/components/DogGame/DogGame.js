import React from 'react'

export default (props) => {
    const { dogWinnerImage } = props
        return (
            <div className='dog-game'>
                <h1>Dog Game</h1>
                {!dogWinnerImage && 'Loading...'}

                {dogWinnerImage && <img src={dogWinnerImage} alt='RandomImage1'></img>}
            </div>
        )}