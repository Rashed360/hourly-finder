import {
  BLOG_FETCH_ALL,
  BLOG_FETCH_ALL_FAILED,
  BLOG_FETCH_SINGLE,
  BLOG_FETCH_SINGLE_FAILED,
  BLOG_PAGINATION_FETCH_ALL,
} from "../actionTypes/blogActionTypes"

const blogInitialState = {
  allBlog: null,
  allBlogPagination: null,
  allBlogFailed: false,
  singleBlogLoading: false,
  singleBlogFailed: false,
  singleBlog: null,
}

const blogReducer = (state = blogInitialState, action) => {
  switch (action.type) {
    case BLOG_FETCH_ALL:
      return {
        ...state,
        allBlog: action.payload,
      }
    case BLOG_PAGINATION_FETCH_ALL:
      return {
        ...state,
      }
    case BLOG_FETCH_ALL_FAILED:
      return {
        ...state,
      }
    case BLOG_FETCH_SINGLE:
      return {
        ...state,
      }
    case BLOG_FETCH_SINGLE_FAILED:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default blogReducer
