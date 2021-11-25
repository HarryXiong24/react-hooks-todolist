import { DispatchContext, Todo } from '@/contexts/todo';
import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Input, notification, Tooltip } from 'antd';
import React, { useContext, useState } from 'react';
import './TodoEdit.scss';

const TodoEdit: React.FC<{
  item: Todo;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ item, setIsEdit }) => {
  const dispatch = useContext(DispatchContext);
  const [value, setValue] = useState(item.task);

  const submit = (id: string, task: string) => {
    if (value === '') {
      notification.warning({
        message: 'Tip',
        description: 'Please input task!',
      });
    } else {
      dispatch({
        type: 'EDIT_TODO',
        id,
        task,
      });
      setIsEdit(false);
      setValue('');
    }
  };

  return (
    <>
      <Input
        allowClear
        placeholder="Add you task here"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onPressEnter={() => {
          submit(item.id, value);
        }}
        suffix={
          <Tooltip title="Confirm">
            <Button
              type="link"
              icon={<CheckCircleFilled />}
              onClick={() => {
                submit(item.id, value);
              }}
            />
          </Tooltip>
        }
      />
    </>
  );
};

export default TodoEdit;
