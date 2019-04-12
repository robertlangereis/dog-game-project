import { SET_PERFORMANCE } from "../actions/types";


export default function (state = 0, action) {
  switch (action.type) {
      case SET_PERFORMANCE:
        return state + 1
      default:
        return state
  }
}