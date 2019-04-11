import { SET_IMAGES, SET_WINNER } from './types'

export const setImages = (images) => {
  return {
    type: SET_IMAGES,
    payload: images
  }
}

export const getImages = (breed) => (dispatch) => {
  return fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
    .then((response) => response.json())
    .then((response) => dispatch({
      type: SET_IMAGES,
      payload: response
    }))
    .catch (console.error)
}

export const getWinnerImage = (breed) => (dispatch) => {
  return fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random`)
    .then((response) => response.json())
    .then((json) => {
      const imageUrl = json.message
      const winnerData = {
        dogWinner: breed,
        dogWinnerImage: imageUrl
      }
      dispatch({
        type: SET_WINNER,
        payload: winnerData
      })
    })
    .catch (console.error)
}

export const getWinner = () => (dispatch) => {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((response) => {
      const list = Object.keys(response.message)
      const randomIndex = Math.floor(Math.random() * list.length)
      const dogWinner = list[randomIndex]
      dispatch(getWinnerImage(dogWinner))
    })
}