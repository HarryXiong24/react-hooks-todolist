import React from 'react';
import TodoForm from './Form/TodoForm';
import TodoList from './List/TodoList';
import TodoProvider from '@/contexts/todo';
import './index.scss';

const TodoApp: React.FC = () => {
  return (
    <div className="todo-container">
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default TodoApp;
