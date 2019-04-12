import { combineReducers } from 'redux'
import dogs from './listReducer'
import dogImage from './imgReducer'
import performance from './gameReducer'
import percentage from './percentageReducer'

export default combineReducers({
    dogs,
    dogImage, 
    performance,
    percentage,
})