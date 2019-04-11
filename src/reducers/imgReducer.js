import { SET_IMAGES } from '../actions/types'
const initialState = []
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_IMAGES:
    const imagedata = action.payload.message
      return imagedata
      
    default:
      return state
  }
}