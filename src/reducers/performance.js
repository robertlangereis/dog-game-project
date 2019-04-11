import { SET_PERFORMANCE, CALC_PERFORMANCE } from '../actions/setPerformance'

export default function (state = null, action) {
  switch (action.type) {
    case SET_PERFORMANCE:
      return state = 0
      
    case CALC_PERFORMANCE:
      return state + 1

    default:
      return state
  }
}