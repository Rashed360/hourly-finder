import axios from "axios"

const url = process.env.REACT_APP_BACKEND_SERVER

export const contactQueryCreate =
  (first_name, last_name, email, phone, profile_name, subject, message) => async (dispatch) => {
    const contactQuery = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      profile_name: profile_name,
      subject: subject,
      message: message,
    }

    await axios
      .post(url, contactQuery)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {})
  }
