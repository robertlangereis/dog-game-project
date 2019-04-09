import { RANDOM_IMAGE } from './types'

export const randomImage = (image) => {
    return {
        type: RANDOM_IMAGE,
        payload: image
    }
}

export const setImage = () => (dispatch) => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((response) => dispatch({
      type: RANDOM_IMAGE,
      payload: response
    }))
}