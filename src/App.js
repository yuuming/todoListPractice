import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [
        { title: 'Study React' },
        { title: 'Study Redux' },
        { title: 'Buy an apple' },
        { title: 'Eat chocolate' }
      ]
    };
  }
  render() {
    const todolist = this.state.todolist;
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <ol>
              {todolist.map(function(index) {
                return <li key={index.title}>{index.title}</li>;
              })}
            </ol>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
