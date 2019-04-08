import { GET_LIST } from '../actions/types'

const initialState = {
  dogBreeds: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      //might need to be:
      // return {
      //   ...state, 
      //   dogBreeds: action.payload
      // }
      return action.payload

    default:
      return state
  }
}