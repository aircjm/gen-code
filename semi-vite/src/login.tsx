import React, { useState } from 'react';
import { Button, Card, Form, Space, useFormApi, Avatar, Toast, Tooltip } from '@douyinfe/semi-ui';
import { IconLock, IconUser } from '@douyinfe/semi-icons';
import { Link, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import {FormattedMessage} from "./locale";


export default function Login() {


  const navigate = useNavigate();

  const [initValues] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react/no-unstable-nested-components
  function ComponentUsingFormApi() {
    const formApi = useFormApi();
    function onChange() {
      formApi.setValue('password', '123456');
    }
    return (
      <Space spacing={12}>
        <Button onClick={onChange}>Set Password</Button>
        <Link to="/register">
          <Button theme="borderless" type="primary">
            signUp
          </Button>
        </Link>
        <Tooltip>
          <Button theme="solid" type="primary" htmlType="submit" loading={loading}>
            <FormattedMessage id={"page.login.title"}/>
          </Button>
        </Tooltip>
      </Space>
    );
  }

  async function onSubmit(values: any) {
    setLoading(true);
    navigate("/contact")
    setLoading(false);
  }

  return (
    <div className="flex-1 flex justify-center items-center h-full">
      <Form initValues={initValues} onSubmit={onSubmit}>
        <Card
          style={{ width: 360 }}
          title={
            <Card.Meta
              title="title"
              description='desc'
              avatar={<Avatar color="red">An</Avatar>}
            />
          }
          footerLine
          footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
          footer={<ComponentUsingFormApi />}
        >
          <Form.Input
            field="username"
            label='username'
            placeholder='please input username'
            rules={[{ required: true, message: 'required' }]}
            prefix={<IconUser />}
          />
          <Form.Input
            field="password"
            label={"password"}
            placeholder='please input password'
            rules={[{ required: true, message: 'required' }]}
            mode="password"
            prefix={<IconLock />}
          />
        </Card>
      </Form>
    </div>
  );
}
