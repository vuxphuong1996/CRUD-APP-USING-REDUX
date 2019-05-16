import { combineReducers } from 'redux'
import data from './data'
import { reducer as formReducer } from 'redux-form'

const myReducers = combineReducers({
    data,
    form: formReducer
})

export default myReducers