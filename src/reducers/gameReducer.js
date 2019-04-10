import { RANDOM_IMAGE } from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        case RANDOM_IMAGE:
        return action.payload
        
      default:
        return state
    }
  }