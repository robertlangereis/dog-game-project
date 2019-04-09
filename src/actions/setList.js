import { ADD_LIST, SET_LIST } from './types'
import { request } from 'superagent';

export const addList = (source, content) => {
  return {
    type: ADD_LIST,
    payload: {
      source,
      content
    }
  }
}

export const setList = (list) => {
  return {
    type: SET_LIST,
    payload: list
  }
}

export const getList = () => (dispatch) =>
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((response) => dispatch({
      type: SET_LIST,
      payload: response
    })
    )
    .then((response) => {
      return console.log('then response: ', response.payload.message)
    })
    .catch(console.error)














// export const getList = () => (dispatch) =>
//   request
//     .get("https://dog.ceo/api/breeds/list/all")
//     .then((response) => dispatch({
//       type: SET_LIST,
//       payload: response
//     })
//     )
//     .then((response) => {
//       return console.log(response.payload.message)
//     })
//     .catch(console.error)