import React from 'react';
import katie from './images/katie.png';
import star from './images/star.png';

export default function Card() {
  return (
    <div className='card'>
      <img
        className='katie'
        src={katie}
        alt='katie zaferes'
      />
      <div className='card--stats'>
        <img className='star' src={star} alt='star' />
        <span>5.0</span>
        <span className='gray'>(6)•</span>
        <span className='gray'>USA</span>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className='bold'>From $136</span> / person
        </p>
      </div>
    </div>
  );
}
