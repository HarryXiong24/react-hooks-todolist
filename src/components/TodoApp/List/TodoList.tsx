import { Todo, TodoContext } from '@/contexts/todo';
import React, { useContext } from 'react';
import './TodoList.scss';
import TodoItem from '../Item/TodoItem';
import { List } from 'antd';

const TodoList: React.FC = () => {
  const todo: Todo[] = useContext(TodoContext);

  return (
    <div className="todo-list">
      <List
        itemLayout="horizontal"
        dataSource={todo}
        renderItem={(item) => (
          <List.Item>
            <TodoItem item={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
