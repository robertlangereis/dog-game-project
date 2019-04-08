import { GET_LIST } from './types'
import { request } from 'superagent'

export const getList = () => dispatch => {
  request
    .get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      const breeds = Object.keys(response.body.message)
      dispatch({
        type: GET_LIST,
        payload: breeds
      })
    })
    .catch(console.error)
}