import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { title: 'Study React' } ,
        { title: 'Study Redux' } ,
        { title: 'Buy an apple' } ,
        { title: 'Eat chocolate' }
       ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
