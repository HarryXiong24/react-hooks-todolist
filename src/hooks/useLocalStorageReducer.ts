import { Todo } from '@/contexts/todo';
import { ACTION } from '@/redux/todo';
import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (
  key: string,
  reducer: React.Reducer<Todo[], ACTION>,
  defaultValue: Todo[]
) => {
  // 惰性初始化值
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch] as const;
};

export default useLocalStorageReducer;
