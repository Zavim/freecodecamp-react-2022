import React from 'react';
import logo from '../images/logo192.png';

export default function Navbar() {
  return (
    <>
      <nav>
        <img
          src={logo}
          alt='react logo'
          className='nav--logo'
        />
        <h3 className='nav--facts'>ReactFacts</h3>
        <h4 className='nav--second-title'>
          React Course - Project 1
        </h4>
      </nav>
    </>
  );
}
