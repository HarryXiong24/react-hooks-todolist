import { Todo, TodoContext } from '@/contexts/todo';
import { Button, List } from 'antd';
import React, { useContext } from 'react';
import './TodoList.scss';

const TodoList: React.FC = () => {
  const todo: Todo[] = useContext(TodoContext);

  const Title: React.FC<{ title: string }> = ({ title }) => {
    return <p>{title}</p>;
  };

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
            <List.Item.Meta title={<Title title={item.task} />} />
            <Button size="large" type="primary">
              Submit
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
