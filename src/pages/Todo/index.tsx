import React from 'react';
import logo from '@/assets/logo.svg';
import TodoApp from '@/components/TodoApp/index';
import './index.scss';

const Todo: React.FC = (): JSX.Element => {
  return (
    <div className="todo">
      <img src={logo} className="todo-logo" alt="logo" />
      <div className="todo-header">
        <p className="todo-header-title">
          <span>X</span>bear todo<span>list</span>
        </p>
        <p className="todo-header-intro">
          A Todolist App built with React Hooks & Typescript.
        </p>
      </div>
      <TodoApp />
      <a
        href="https://github.com/HarryXiong24/react-hooks-todolist"
        className="todo-footer"
      >
        <strong>Copyright (c) 2021 Harry Xiong</strong>
      </a>
    </div>
  );
};

export default Todo;
