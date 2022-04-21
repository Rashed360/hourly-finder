import axios from "axios"
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

const url = process.env.REACT_APP_BACKEND_SERVER

export const contactCreating = () => {
  return {
    type: CONTACT_QUERY_CREATE,
  }
}

export const contactSuccess = () => {
  return {
    type: CONTACT_QUERY_SUCCESS,
  }
}

export const contactFailed = () => {
  return {
    type: CONTACT_QUERY_FAILED,
  }
}

export const contactQueryCreate =
  (first_name, last_name, email, phone, profile_name, subject, message) => async (dispatch) => {
    dispatch(contactCreating())
    const contactQuery = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      profile_name: profile_name,
      subject: subject,
      message: message,
    }
    const config = {
      headers: {
        "content-type": "application/json",
      },
    }

    await axios
      .post(`${url}/contact/create`, contactQuery, config)
      .then((response) => {
        dispatch(contactSuccess())
      })
      .catch((error) => {
        dispatch(contactFailed())
      })
  }

export const clearContactErrors = () => {
  return {
    type: CLEAR_CONTACT_ERRORS,
  }
}

// Email Subscription Action Creators
export const subscribingNewsletter = () => {
  return {
    type: SUBSCRIBING_NEWSLETTER,
  }
}
export const subscribingNewsletterSucess = () => {
  return {
    type: SUBSCRIBING_NEWSLETTER_SUCCESS,
  }
}
export const subscribingNewsletterFailed = (error) => {
  return {
    type: SUBSCRIBING_NEWSLETTER_FAILED,
    payload: error,
  }
}

export const subscribeNewsletter = (email) => async (dispatch) => {
  dispatch(subscribingNewsletter())

  const data = {
    email: email,
  }

  await axios
    .post(`${url}/contact/newsletter`, data)
    .then((response) => {
      console.log(response)
      dispatch(subscribingNewsletterSucess())
    })
    .catch((error) => {
      const key = Object.keys(error.response.data)[0]
      dispatch(subscribingNewsletterFailed(error.response.data[key][0]))
    })
}

export const clearSubscribeErrors = () => {
  return {
    type: CLEAR_SUBSCRIBE_ERRORS,
  }
}
