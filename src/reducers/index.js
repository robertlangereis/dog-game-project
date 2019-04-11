import { combineReducers } from 'redux'
import dogs from './listReducer'
import dogImage from './imgReducer'
import performance from './performance'

export default combineReducers({
    dogs,
    dogImage, 
    performance
})