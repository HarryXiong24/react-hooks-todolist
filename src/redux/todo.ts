import { Todo } from '@/contexts/todo';
import { v4 as uuidv4 } from 'uuid';

export interface ACTION {
  type: string;
  [property: string]: any;
}

const todoReducer = (state: Todo[], action: ACTION) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.task } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
