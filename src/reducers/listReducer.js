import { SET_LIST, SET_WINNER } from '../actions/types'

export default function (state = {}, action) {
  // console.log('action test:', action)
  switch (action.type) {
    case SET_LIST:
      // console.log('SET_LIST state test:', state)
      const data = action.payload.message
      const dogBreeds = Object.keys(data)
      return {
        ...state,
        dogBreeds
      }

    case SET_WINNER:
      // console.log('SET_WINNER state test:', state)
      // const randomIndex = Math.floor(Math.random() * state.dogBreeds.length)
      // const dogWinner = state.dogBreeds[randomIndex]
      // const dogWinnerImage = `https://dog.ceo/api/breed/${encodeURIComponent(dogWinner)}/images`
      const dogWinner = (dogBreeds) => {
        if (dogBreeds) {
          const randomIndex = Math.floor(Math.random() * state.dogBreeds.length)
          return state.dogBreeds[randomIndex]
        } else {
          console.log('No dogBreeds')
          return 'Loading...'
        }
      }

      const dogWinnerImage = () => {
        if (dogWinner) {
          return `https://dog.ceo/api/breed/${encodeURIComponent(dogWinner)}/images`
        } else {
          return 'Loading...'
        }
      }

      console.log('dogWinner from listReducer.js:', dogWinner())

      return {
        ...state,
        dogWinner,
        dogWinnerImage
      }

    default:
      return state
  }
}

