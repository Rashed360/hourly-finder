import {
  CONTACT_QUERY_CREATE,
  CONTACT_QUERY_FAILED,
  CONTACT_QUERY_SUCCESS,
} from "../actionTypes/contactActionTypes"

const contactInitialState = {
  creatingContact: false,
  createContactSuccess: false,
  createContactFailed: false,
}

const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case CONTACT_QUERY_CREATE:
      return {
        ...state,
        creatingContact: true,
      }
    case CONTACT_QUERY_SUCCESS:
      return {
        ...state,
        createContactSuccess: true,
        creatingContact: false,
      }
    case CONTACT_QUERY_FAILED:
      return {
        ...state,
        createContactFailed: true,
        creatingContact: false,
      }
    default:
      return state
  }
}

export default contactReducer
