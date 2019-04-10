import { SET_LIST } from './types'
import { SET_WINNER } from './types'

export const setList = (list) => {
  return {
    type: SET_LIST,
    payload: list
  }
}

export const setWinner = (list) => {
  return {
    type: SET_WINNER,
    payload: list
  }
}

export const getList = () => (dispatch) =>
  {
    return fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((response) => dispatch({
        type: SET_LIST, 
        payload: response
      },{
        type: SET_WINNER, 
        payload: response
      }
      ))
      .catch(console.error);
  }