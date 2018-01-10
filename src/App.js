import React, { Component } from 'react';
import logo from './cryptobox.svg';
import './App.css';

import RegistrationPage from './components/registration-page.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CryptoBox</h1>
        </header>
        <p className="App-intro">
          <div className="home">
            <RegistrationPage />

          </div>
        </p>
      </div>
    );
  }
}

export default App;
