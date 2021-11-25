import { Todo, TodoContext } from '@/contexts/todo';
import { Button, List, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import './TodoList.scss';

const TodoList: React.FC = () => {
  const todo: Todo[] = useContext(TodoContext);

  return (
    <div className="todo-list">
      <List
        itemLayout="horizontal"
        dataSource={todo}
        renderItem={(item) => (
          <List.Item>
            <div className="todo-list-item-font">{item.task}</div>
            <div className="todo-list-item-operator">
              <Tooltip title="Completed">
                <Button type="link" icon={<CheckOutlined />} />
              </Tooltip>
              <Tooltip title="Edit">
                <Button type="link" icon={<EditOutlined />} />
              </Tooltip>
              <Tooltip title="Delete">
                <Button type="link" danger icon={<DeleteOutlined />} />
              </Tooltip>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
