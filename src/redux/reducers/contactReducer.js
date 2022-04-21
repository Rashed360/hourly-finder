import {
  CLEAR_CONTACT_ERRORS,
  CLEAR_SUBSCRIBE_ERRORS,
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
    case CLEAR_CONTACT_ERRORS:
      return {
        ...state,
        creatingContact: false,
        createContactSuccess: false,
        createContactFailed: false,
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
        newsletterFailedMsg: null,
        subscribingNewsletterSucess: true,
      }
    case SUBSCRIBING_NEWSLETTER_FAILED:
      return {
        ...state,
        subscribingNewsletter: false,
        subscribingNewsletterSucess: false,
        newsletterFailedMsg: action.payload,
      }
    case CLEAR_SUBSCRIBE_ERRORS:
      return {
        ...state,
        subscribingNewsletter: false,
        subscribingNewsletterSucess: false,
        newsletterFailedMsg: null,
      }
    default:
      return state
  }
}

export default contactReducer
