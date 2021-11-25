import { Input, Button, Row, Col } from 'antd';
import React from 'react';

const TodoForm: React.FC = () => {
  return (
    <>
      <Row justify="center" gutter={24}>
        <Col span={17}>
          <Input
            size="large"
            allowClear
            style={{ width: 'calc(100% - 200px)' }}
            placeholder="Add you task here"
          />
          <Button size="large" type="primary">
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default TodoForm;
