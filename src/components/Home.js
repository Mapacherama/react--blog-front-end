import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-6 bg-blue-500 text-white text-center">
        <h1 className="text-3xl font-bold">Blog Homepage</h1>
      </header>
      <main className="container mx-auto py-10">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : ( 
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Latest 5 Blogs</h2> 
            <div className="flex flex-row flex-wrap !important">
              {blogs.map((blog) => (
                <div className="bg-white rounded shadow w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mb-4">
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-600">{blog.content}</p>
                  <p className="text-gray-600">{blog.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export { Home };
