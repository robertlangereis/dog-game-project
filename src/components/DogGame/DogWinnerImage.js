import React from 'react'

export default (props) => {
    const { image } = props
    return (
        <div className="dog-winner-image">        
            <div>
                {!image && 'Loading...'}
                {image && image}
            </div>
        </div>
    )
}
