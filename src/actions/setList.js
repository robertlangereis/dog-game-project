import { ADD_LIST, SET_LIST } from './types'

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
  {
    return fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then(response => { 
        console.log('response test:', response)

        dispatch({ type: SET_LIST, payload: response
        })
      })
      .catch(console.error);
  }