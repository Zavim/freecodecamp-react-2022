import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
