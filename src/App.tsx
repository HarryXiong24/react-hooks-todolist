import React from 'react';
import routers from '@/router/index';
import { useRoutes } from 'react-router-dom';
import './App.scss';

const App = () => {
  const Element = () => useRoutes(routers);
  return (
    <div className="App">
      <Element />
    </div>
  );
};

export default App;
