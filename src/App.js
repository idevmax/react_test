import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Articles text={"Some text and more text"}/>
          </a>
        </header>
      </div>
    );
  }
}

class Articles extends Component {
  render(){
    return(
      <p>
        {this.props.text}
      </p>
    )
  }
}

export default App;
