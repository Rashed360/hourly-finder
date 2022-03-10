import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import jobReducer from '../reducers/jobReducer'

const store = createStore(
	combineReducers({
		auth: authReducer,
		job: jobReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk))
)

export default store
