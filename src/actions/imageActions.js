import { SET_IMAGES } from './types'

export const setImages = (images) => {
  return {
    type: SET_IMAGES,
    payload: images
  }
}

export const getImages = (breed) => (dispatch) => {
  // console.log('breed test:', breed)
  return fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
    .then((response) => response.json())
    .then((response) => dispatch({
      type: SET_IMAGES,
      payload: response
    }))
    .catch (console.error)
}