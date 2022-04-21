import axios from "axios"
import {
  CONTACT_QUERY_CREATE,
  CONTACT_QUERY_FAILED,
  CONTACT_QUERY_SUCCESS,
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
