import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
// import VisibilityFilters from './components/VisibilityFilters';
import './styles.css';

export default function TodoApp() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      {/*      <VisibilityFilters /> */}
    </div>
  );
}
