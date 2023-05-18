// Home.js
import React, { useEffect } from 'react';
import BlogStore from '../store/BlogStore';

const Home = () => {
  const blogStore = BlogStore();

  useEffect(() => {
    blogStore.fetchBlogs();
  }, []);

  const { blogs, loading, error } = blogStore;

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

export { Home };
