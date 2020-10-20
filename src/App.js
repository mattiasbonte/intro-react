import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Todo App</h1>
      </header>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
