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
          <Link to="/">About</Link>
          <Link to="/">TV Shows</Link>
          <Link to="/">News & Popular</Link>
          <Link to="/">My List</Link>
          <Link to="/">Browse By Languages</Link>
        </ul>
      </div>
   </div>
  );
};

export default Navbar;
