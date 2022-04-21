import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import blogReducer from "redux/reducers/blogReducer"
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
    blog: blogReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
