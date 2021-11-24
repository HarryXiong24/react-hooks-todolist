import { RouteObject } from 'react-router';
import Todo from '@/pages/Todo/index';
import NoMatch from '@/pages/404/index';
import React from 'react';

const routes: RouteObject[] = [
  { path: '/', element: <Todo />, index: true },
  { path: '*', element: <NoMatch /> },
];

export default routes;
