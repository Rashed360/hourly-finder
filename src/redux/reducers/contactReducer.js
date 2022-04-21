import {
  CONTACT_QUERY_CREATE,
  CONTACT_QUERY_FAILED,
  CONTACT_QUERY_SUCCESS,
  SUBSCRIBING_NEWSLETTER,
  SUBSCRIBING_NEWSLETTER_FAILED,
  SUBSCRIBING_NEWSLETTER_SUCCESS,
} from "../actionTypes/contactActionTypes"

const contactInitialState = {
  creatingContact: false,
  createContactSuccess: false,
  createContactFailed: false,
  subscribingNewsletter: false,
  subscribingNewsletterSucess: false,
  newsletterFailedMsg: null,
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
        creatingContact: false,
        createContactSuccess: true,
      }
    case CONTACT_QUERY_FAILED:
      return {
        ...state,
        creatingContact: false,
        createContactFailed: true,
      }
    case SUBSCRIBING_NEWSLETTER:
      return {
        ...state,
        subscribingNewsletter: true,
      }
    case SUBSCRIBING_NEWSLETTER_SUCCESS:
      return {
        ...state,
        subscribingNewsletter: false,
        subscribingNewsletterSucess: true,
      }
    case SUBSCRIBING_NEWSLETTER_FAILED:
      return {
        ...state,
        subscribingNewsletter: false,
        newsletterFailedMsg: action.payload,
      }
    default:
      return state
  }
}

export default contactReducer
