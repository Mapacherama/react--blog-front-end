const initialState = {
    blogs: [],
    loading: false,
    error: null,
  };
  
  const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
  const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';
  
  export const fetchBlogsSuccess = (blogs) => ({
    type: FETCH_BLOGS_SUCCESS,
    payload: blogs,
  });
  
  export const fetchBlogsFailure = (error) => ({
    type: FETCH_BLOGS_FAILURE,
    payload: error,
  });
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BLOGS_SUCCESS:        
        return {
          ...state,
          blogs: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_BLOGS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default blogReducer;
  