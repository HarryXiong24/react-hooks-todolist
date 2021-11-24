import { Todo, TodoContext } from '@/contexts/todo';
import { Button, List } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import './TodoList.scss';

const TodoList: React.FC = () => {
  const todo: Todo[] = useContext(TodoContext);

  // const Title: React.FC<{ title: string }> = ({ title }) => {
  //   return <p>{title}</p>;
  // };

  // const Description: React.FC<{ description: string }> = ({ description }) => {
  //   return <p>{description}</p>;
  // };

  return (
    <div className="todo-list">
      <List
        itemLayout="horizontal"
        dataSource={todo}
        renderItem={(item) => (
          <List.Item>
            <div className="todo-list-item-font">{item.task}</div>
            <div className="todo-list-item-operator">
              <Button type="link" icon={<EditOutlined />} />
              <Button type="link" icon={<DeleteOutlined />} />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
