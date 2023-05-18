// BlogStore.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { errorHandler } from '../helpers/request';

const BlogStore = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get('admin/blogs/list');
      setBlogs(response.data);
    } catch (error) {
      setError(errorHandler(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

export default BlogStore;
