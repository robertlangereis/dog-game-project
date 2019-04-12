import { SET_PERFORMANCE_GUESSES } from "../actions/types";


export default function (state = 0, action) {
  switch (action.type) {
      case SET_PERFORMANCE_GUESSES:
        return state + 1
      default:
        return state
  }
}