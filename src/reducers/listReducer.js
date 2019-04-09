import { GET_LIST } from '../actions/types'

export default function test(state = {dogBreeds: null}, action) {
  switch (action.type) {
    case GET_LIST:
      // might need to be:
      // return [...state, action.payload]
      // console.log(action.payload)
      return {dogBreeds: action.payload}

    default:
      return state
  }
}

