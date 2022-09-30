import {Toast, Space, Form, Button, Notification} from "@douyinfe/semi-ui";
import React, {useState} from "react";

function DatasourceEdit() {


    const handleSubmit = (values: any) => {
        console.log(values);
        Notification.info({content: '表单已提交'});

    };

    const [login, setLogin] = useState({})

    return (
        <Space align="start" wrap spacing={20}>
            <Form onSubmit={values => handleSubmit(values)} initValues={login}>
                {({formState, values, formApi}) => (
                    <>
                        <Form.Input field='name' label='名称' style={{width: '100%'}}></Form.Input>
                        <Form.TextArea field='desc' label='描述' style={{width: '100%'}}></Form.TextArea>
                        <Form.Input field='url' label='jdbcUrl链接' style={{width: '100%'}}></Form.Input>
                        <Form.Select field='dbType' label='dbType' style={{width: '100%'}}>
                            <Form.Select.Option label={"MySQL"} value={1}></Form.Select.Option>
                            <Form.Select.Option label={"PostgreSQL"} value={2}></Form.Select.Option>
                            <Form.Select.Option label={"Oracle"} value={3}></Form.Select.Option>
                        </Form.Select>
                        <Form.Input field='ip' label='ip' style={{width: '100%'}}></Form.Input>
                        <Form.InputNumber field='port' label='port' style={{width: '100%'}}
                                          hideButtons={true}></Form.InputNumber>
                        <Form.Input field='username' label='username' style={{width: '100%'}}></Form.Input>
                        <Form.Input field='password' label='password' style={{width: '100%'}}
                                    mode="password"></Form.Input>

                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Button htmlType='submit' type="tertiary">submit</Button>
                        </div>
                    </>
                )}
            </Form>
        </Space>
    );
}

export default DatasourceEdit;