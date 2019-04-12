import { combineReducers } from 'redux'
import dogs from './listReducer'
import dogImage from './imgReducer'
import performance from './gameReducer'

export default combineReducers({
    dogs,
    dogImage, 
    performance
})