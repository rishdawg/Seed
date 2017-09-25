import React from 'react';
import seed from '../images/logo.jpg';
const Home = (props) => {
  return (
  <header className="masthead">
  <div className="container">
    <img className="img-fluid" src={seed} alt=""/>
    <div className="intro-text">
      <span className="name">Seed Movement</span>
      <hr className="star-light"/>
      <span className="skills">Moving the needle on Financial Literacy</span>
    </div>
  </div>
</header>

  );
};

export default Home;
