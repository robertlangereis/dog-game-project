// import { GET_LIST } from './types'

// export const getList = () => (dispatch) =>
//   fetch("https://dog.ceo/api/breeds/list/all")
//     .then((response) => response.json())
//     .then((response) => dispatch({
//       type: GET_LIST,
//       payload: response
//     })
//     )
//     .then((resp) => {
//       return console.log('response from getList.js:', resp.payload.message)
//     })
//     .catch(console.error)