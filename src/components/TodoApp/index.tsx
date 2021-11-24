import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './index.scss';

const TodoApp: React.FC = () => {
  return (
    <div className="todo-container">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
