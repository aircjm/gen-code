import { Toast, Space, Form, Button } from "@douyinfe/semi-ui";
import React, { useState } from "react";

function DatasourceEdit() {


  const handleSubmit = (values: any) => {
    console.log(values);
    Toast.info('表单已提交');
  };

  const [login, setLogin] = useState({phone: '', password: '', agree: false})


  return (
    <Space align="start" wrap spacing={20}>
      新增修改
      <Form onSubmit={values => handleSubmit(values)} initValues={login}>
        {({formState, values, formApi}) => (
          <>
            <Form.Input field='phone' label='PhoneNumber' style={{width: '100%'}} placeholder='Enter your phone number'></Form.Input>
            <Form.Input field='password' label='Password' style={{width: '100%'}} placeholder='Enter your password'></Form.Input>
            <Form.Checkbox field='agree' noLabel>I have read and agree to the terms of service</Form.Checkbox>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p>
                <span>Or</span><Button theme='borderless' style={{color: 'var(--semi-color-primary)', marginLeft: 10, cursor: 'pointer'}}>Sign up</Button>
              </p>
              <Button disabled={!values.agree} htmlType='submit' type="tertiary">Log in</Button>
            </div>
          </>
        )}
      </Form>
    </Space>
  );
}

export default DatasourceEdit;