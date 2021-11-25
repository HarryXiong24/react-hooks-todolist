import { DispatchContext, Todo } from '@/contexts/todo';
import React, { useContext, useState } from 'react';
import { Button, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  CheckSquareOutlined,
  RollbackOutlined,
} from '@ant-design/icons';
import './TodoItem.scss';
import TodoEdit from '../Edit/TodoEdit';

const TodoItem: React.FC<{
  item: Todo;
}> = ({ item }) => {
  const dispatch = useContext(DispatchContext);
  const [isEdit, setIsEdit] = useState<boolean>(false);

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

  if (isEdit == true) {
    return <TodoEdit item={item} setIsEdit={setIsEdit} />;
  }

  return (
    <>
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
              icon={<CheckSquareOutlined />}
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
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setIsEdit(true);
            }}
          />
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
    </>
  );
};

export default TodoItem;
