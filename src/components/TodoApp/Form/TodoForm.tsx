import { DispatchContext } from '@/contexts/todo';
import { Input, Button, Row, Col, notification } from 'antd';
import React, { useContext, useState } from 'react';

const TodoForm: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useContext(DispatchContext);

  const submit = () => {
    if (value === '') {
      notification.warning({
        message: 'Tip',
        description: 'Please input task!',
      });
    } else {
      dispatch({
        type: 'ADD_TODO',
        task: value,
        completed: false,
      });
      setValue('');
    }
  };

  return (
    <>
      <Row justify="center" gutter={24}>
        <Col span={17}>
          <Input
            size="large"
            allowClear
            style={{ width: 'calc(100% - 200px)' }}
            placeholder="Add you task here"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onPressEnter={submit}
          />
          <Button size="large" type="primary" onClick={submit}>
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default TodoForm;
