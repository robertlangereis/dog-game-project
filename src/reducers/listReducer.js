import { SET_LIST, SET_WINNER} from '../actions/types'

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
      const randomIndex = Math.floor(Math.random() * state.dogBreeds.length)
      const dogWinner = state.dogBreeds[randomIndex]
      
      return {
        ...state,
        dogWinner,
      }

    default:
      return state
  }
}

