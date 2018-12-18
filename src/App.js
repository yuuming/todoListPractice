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
        { title: 'Clean the room' },
        { title: 'Buy the text books' },
        { title: 'Eat chocolate' }
      ]
    };
  }

  addNewTodo = () => {
    this.state.todolist.push({
      title: this.refs.newTitle.value
    });
    
    this.setState({
      todolist : this.state.todolist
    });
    
    this.refs.newTitle.value='';
  }
  
  render() {
    const todolist = this.state.todolist;
    return (
      <div className="App">
        <header className="App-header">
        <h1>TODO APP</h1>
          <ul>
            <li>
              {todolist.map(function(index) {
                return <li key={index.title}><input type="button" value="☓" /> {index.title}</li>;
              })}
            </li>
          </ul>
          <input type="text" ref="newTitle"/>
        <input type="button" value="Add" />
        </header>
      </div>
    );
  }
}

export default App;
