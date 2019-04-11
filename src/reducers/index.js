import { combineReducers } from 'redux'
import dogs from './listReducer'
import dogImage from './imgReducer'

export default combineReducers({
    dogs,
    dogImage, 
})