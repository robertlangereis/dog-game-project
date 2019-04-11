import { SET_LIST } from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case SET_LIST:
      const data = action.payload.message
      const keys = Object.keys(data)
      return keys
      
    default:
      return state
  }
}

