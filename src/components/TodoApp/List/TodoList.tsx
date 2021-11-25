import { DispatchContext, Todo, TodoContext } from '@/contexts/todo';
import { Button, List, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import './TodoList.scss';

const TodoList: React.FC = () => {
  const todo: Todo[] = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);

  const remove = (id: string) => {
    dispatch({
      type: 'REMOVE_TODO',
      id,
    });
  };

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
              <Tooltip title="Remove">
                <Button
                  type="link"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    remove(item.id);
                  }}
                />
              </Tooltip>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
