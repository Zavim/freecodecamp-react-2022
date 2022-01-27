import React from 'react';
import About from './About';
import Interests from './Interests';

export default function Content() {
  return (
    <>
      <nav className='card--content'>
        <About />
        <Interests />
      </nav>
    </>
  );
}
