import { DispatchContext, Todo, TodoContext } from '@/contexts/todo';
import { Button, List, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
  RollbackOutlined,
} from '@ant-design/icons';
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

  const finish = (id: string) => {
    dispatch({
      type: 'TOGGLE_TODO',
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
            <div
              className="todo-list-item-font"
              style={{
                textDecoration: item.completed ? 'line-through' : '',
                color: item.completed ? '#ffffff80' : 'white',
              }}
            >
              {item.task}
            </div>
            <div className="todo-list-item-operator">
              {item.completed === false ? (
                <Tooltip title="Done">
                  <Button
                    type="link"
                    icon={<CheckOutlined />}
                    onClick={() => {
                      finish(item.id);
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Undone">
                  <Button
                    type="link"
                    icon={<RollbackOutlined />}
                    onClick={() => {
                      finish(item.id);
                    }}
                  />
                </Tooltip>
              )}

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
