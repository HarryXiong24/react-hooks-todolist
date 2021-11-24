import React from 'react';
import logo from '@/assets/logo.svg';
import './index.scss';

const Todo: React.FC = (): JSX.Element => {
  return (
    <div className="todo">
      <img src={logo} className="todo-logo" alt="logo" />
      <p className="todo-title">Xbear Todolist</p>
    </div>
  );
};

export default Todo;
