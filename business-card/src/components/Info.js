import React from 'react';
import zavier from '../images/zavier.png';
import email from '../images/mail_icon.png';

export default function Info() {
  return (
    <>
      <img
        className='zavier-image'
        src={zavier}
        alt='zavier headshot'
      />
      <nav className='card--info'>
        <h2>Zavier McLean</h2>
        <p>Software Engineer</p>
        <nav className='card--button-container'>
          <button className='info--button email'>
            email
          </button>
          <button className='info--button github'>
            github
          </button>
        </nav>
      </nav>
    </>
  );
}
