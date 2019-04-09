import { combineReducers } from 'redux'
// import reducer from './reducer'
import listReducer from './listReducer'

export default combineReducers({
    dogBreeds: listReducer    
})