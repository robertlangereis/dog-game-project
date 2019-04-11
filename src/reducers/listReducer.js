import { SET_LIST, SET_WINNER } from '../actions/types'
import { getWinnerImage } from '../actions/imageActions'


export default function (state = [], action) {
  switch (action.type) {
    case SET_LIST:
      const data = action.payload.message
      const dogBreeds = Object.keys(data)
      return {
        ...state,
        dogBreeds
      }

    case SET_WINNER:
      const dogWinner = action.payload.dogWinner
      const dogWinnerImage = action.payload.dogWinnerImage
      return {
        ...state,
        dogWinner,
        dogWinnerImage
      }
      
    default:
      return state
  }
}

