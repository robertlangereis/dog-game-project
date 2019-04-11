import { SET_IMAGES } from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case SET_IMAGES:
    const imagedata = action.payload.message
      return imagedata
      
    default:
      return state
  }
}