import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src='https://m.media-amazon.com/images/I/31JfJ6dXD9L.png' alt='Netflix Logo'/>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>TV Shows</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
   </div>
  );
};

export default Navbar;
