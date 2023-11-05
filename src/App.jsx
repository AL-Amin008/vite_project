import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css'; 

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/project">Project</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/about" component={About} />
      <Route path="/project" component={Project} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
