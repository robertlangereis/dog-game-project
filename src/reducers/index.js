import { combineReducers } from 'redux'
import randomImage from './gameReducer'
import dogs from './listReducer'
import dogImage from './imgReducer'

export default combineReducers({
    dogs,
    randomImage,
    dogImage, 
})