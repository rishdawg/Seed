import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import Goal from './components/Goal.js';
import Numbers from './components/Numbers.js';
import Home from './components/Home.js';
import AboutUS from './components/AboutUS.js';
import Objectives from './components/Objectives.js';
import Curriculum from './components/Curriculum.js';
import Contact from './components/Contact.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './freelancer.min.css';
import './font-awesome.min.css';
class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Home/>
        <Goal/>
        <Numbers/>
        <AboutUS/>
        <Objectives/>
        <Curriculum/>
        <Contact/>
      </div>
    );
  }
}

export default App;
