import { combineReducers } from 'redux'
import dogBreeds from './listReducer'
import dogImage from './imgReducer'

export default combineReducers({
    dogBreeds,
    randomImage,
    dogImage
})