import React from 'react';
import logo from '@/assets/logo.svg';
import TodoApp from '@/components/TodoApp/index';
import './index.scss';

const Todo: React.FC = (): JSX.Element => {
  return (
    <div className="todo">
      <img src={logo} className="todo-logo" alt="logo" />
      <p className="todo-title">Xbear Todolist</p>
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
