import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a new context for the blog store
export const BlogContext = createContext();

// Create a BlogStore component
export const BlogStore = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/blogs');
      const { posts } = response.data;
      setBlogs(posts);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Provide the state and actions to the child components
  return (
    <BlogContext.Provider value={{ blogs, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};
