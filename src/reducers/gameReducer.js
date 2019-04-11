import { SET_PERFORMANCE } from "../actions/types";

const initialState = 0
export default function (state = initialState, action) {
  switch (action.type) {
      case SET_PERFORMANCE:
        return state + 1
      default:
        return state
  }
}