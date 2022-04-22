import axios from "axios"
import { BLOG_FETCH_ALL } from "../actionTypes/blogActionTypes"
const url = process.env.REACT_APP_BACKEND_SERVER

export const fetchAllBlog = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  await axios
    .get(`${url}/blogs/?page_size=4`, config)
    .then((response) => {
      const data = response.data.results
      dispatch({
        type: BLOG_FETCH_ALL,
        payload: data,
      })
    })
    .catch((error) => {
      console.log(error.response)
    })
}
