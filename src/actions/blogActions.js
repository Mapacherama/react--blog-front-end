
import { fetchBlogsSuccess, fetchBlogsFailure } from '../reducers/blogReducer';
import { getBlogs } from '../api/blogApi'; 

export const fetchBlogs = () => async (dispatch) => {
  try {
    // eslint-disable-next-line no-undef
    const blogs = await getBlogs();
    dispatch(fetchBlogsSuccess(blogs));
  } catch (error) {
    dispatch(fetchBlogsFailure(error));
  }
};
