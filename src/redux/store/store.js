import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import jobReducer from '../reducers/jobReducer'

export const store = createStore(
	combineReducers({
		auth: authReducer,
		job: jobReducer,
	}),
	applyMiddleware(thunk)
)
