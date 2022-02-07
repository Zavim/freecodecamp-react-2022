import React from 'react';
import airbnb_logo from './images/airbnb_logo.png';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <img
          className='navbar--logo'
          src={airbnb_logo}
          alt='airbnb logo'
        />
      </nav>
    </>
  );
}
