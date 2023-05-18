import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../actions/blogActions';


const Home = () => {
  const dispatch = useDispatch();
  console.log(dispatch)

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Access the blogs state from the Redux store
  const blogs = useSelector((state) => state.blogReducer.blogs);
  const loading = useSelector((state) => state.blogReducer.loading);
  const error = useSelector((state) => state.blogReducer.error);

  // Render the blogs data or loading/error messages
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id}>{blog.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export  { Home };
