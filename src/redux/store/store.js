import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import jobReducer from '../reducers/jobReducer'
import userReducer from '../reducers/userReducer'
import utilsReducer from '../reducers/utilsReducer'

const store = createStore(
	combineReducers({
		auth: authReducer,
		job: jobReducer,
		user: userReducer,
		utils: utilsReducer,

	}),
	composeWithDevTools(applyMiddleware(thunk))
)

export default store
