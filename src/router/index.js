import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './components/About';
import Blog from './components/Blog';
import Category from './components/Category';
import Contact from './components/Contact';
import Home from './components/Home';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/category" component={Category} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>,
  document.getElementById('root')
);


// Home page: This page will display a list of blog posts or featured content.
// Blog post page: This page will display the full content of a specific blog post.
// Category page: This page will show a list of blog posts belonging to a specific category.
// Author page: This page will display information about a specific author, along with their published blog posts.
// About page: This page will provide information about the blog or the website.
// Contact page: This page will allow users to contact the blog owner or administrators.