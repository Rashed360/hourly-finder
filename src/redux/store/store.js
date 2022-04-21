import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import contactReducer from "redux/reducers/contactReducer"
import authReducer from "../reducers/authReducer"
import jobReducer from "../reducers/jobReducer"
import userReducer from "../reducers/userReducer"

const store = createStore(
  combineReducers({
    auth: authReducer,
    job: jobReducer,
    user: userReducer,
    contact: contactReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
