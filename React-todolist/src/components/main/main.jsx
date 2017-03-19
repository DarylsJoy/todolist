import React, { Component } from 'react';
import App from '../app/App';
import TodoList from '../todolist/todolist';

class Main extends Component {
  render() {
    return (
      <div>
        <App />
        <TodoList />
      </div>
    );
  }
}

export default Main;