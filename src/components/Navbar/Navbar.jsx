import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src='https://m.media-amazon.com/images/I/31JfJ6dXD9L.png' alt='Netflix Logo'/>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/TVShows">TV Shows</Link>
          <Link to="/News&Popular">News & Popular</Link>
          <Link to="/MyList">My List</Link>
          <Link to="/BrowseByLanguages">Browse By Languages</Link>
        </ul>
      </div>
   </div>
  );
};

export default Navbar;
