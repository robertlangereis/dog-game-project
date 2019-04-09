import { combineReducers } from 'redux'
import randomImage from './gameReducer'
import dogBreeds from './listReducer'

export default combineReducers({
    dogBreeds,
    randomImage
})