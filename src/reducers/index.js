import { combineReducers } from 'redux'
// import reducer from './reducer'
import dogBreeds from './listReducer'
import dogImage from './imgReducer'

export default combineReducers({
    dogBreeds, dogImage
})