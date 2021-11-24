import todoReducer, { ACTION } from '@/redux/todo';
import React, { createContext } from 'react';
import useLocalStorageReducer from '@/hooks/useLocalStorageReducer';

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

const defaultTodoList: Todo[] = [
  { id: '0', task: 'Read a book', completed: false },
  { id: '1', task: 'Jog in a playground', completed: true },
  { id: '2', task: 'Write articles', completed: false },
];

export const TodoContext = createContext<Todo[]>([]);
export const DispatchContext = createContext<React.Dispatch<ACTION>>(
  () => null
);

const TodoProvider: React.FC = (props) => {
  const [todoList, dispatch] = useLocalStorageReducer(
    'todoList',
    todoReducer,
    defaultTodoList
  );

  return (
    <TodoContext.Provider value={todoList}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
