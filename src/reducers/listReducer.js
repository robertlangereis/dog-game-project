import { SET_LIST } from '../actions/types'

export default function (state = {dogBreeds: null}, action) {
  switch (action.type) {
    case SET_LIST:
      const data = action.payload.message
      const keys = Object.keys(data)
      return state = {dogBreeds: keys}

    default:
      return state
  }
}

