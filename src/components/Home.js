import React from 'react';

const Home = () => {
  // Sample data for featured blog posts
  const featuredPosts = [
    { id: 1, title: 'Title of Featured Post 1', date: 'May 1, 2023' },
    { id: 2, title: 'Title of Featured Post 2', date: 'May 5, 2023' },
    { id: 3, title: 'Title of Featured Post 3', date: 'May 10, 2023' },
  ];

  return (
    <div>
      <h1>Welcome to Our Blog</h1>
      <h2>Featured Posts</h2>
      <ul>
        {featuredPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>Published on {post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {Home};
