import {Button, Form, Notification, Space} from "@douyinfe/semi-ui";
import React, {useEffect, useRef, useState} from "react";
import {FormattedMessage} from "../../locale";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {datasourceAdd, datasourceDetail} from "../../api/api";
import {AxiosResponse} from "axios";

function DatasourceEdit(props: any) {
    const navigate = useNavigate();


    const [loading, setLoading] = useState<boolean>(false)
    const [initValues, setInitValues] = useState({})
    let [params, setParams] = useSearchParams();

    const formApi = useRef<any>();

    useEffect(() => {
        if (params.get("id")) {
            datasourceDetail(params.get("id")).then(result => {
                formApi.current.setValues(result.data)
            });
        }
    },[])


    const handleSubmit = (values: any) => {
        setLoading(true);
        datasourceAdd(values).then((response: AxiosResponse) => {
            // @ts-ignore
            if (parseInt(response.code) === 0) {
                navigate('/datasource');
                setLoading(false);
            }
        })

        Notification.info({content: '表单已提交'});
    };

    return (
        <Space align="start" wrap spacing={20}>
            <Form onSubmit={values => handleSubmit(values)} getFormApi={api => formApi.current = api}>
                <>
                    <Form.Input field='dbName' label='名称' style={{width: '100%'}}></Form.Input>
                    <Form.TextArea field='desc' label='描述' style={{width: '100%'}}></Form.TextArea>
                    <Form.Input field='url' label='jdbcUrl链接' style={{width: '100%'}}></Form.Input>
                    <Form.Select field='dbType' label='dbType' style={{width: '100%'}}>
                        <Form.Select.Option label={"MySQL"} value={1}></Form.Select.Option>
                        <Form.Select.Option label={"Oracle"} value={2}></Form.Select.Option>
                        <Form.Select.Option label={"SQL Server"} value={3}></Form.Select.Option>
                        <Form.Select.Option label={"PostgreSQL"} value={4}></Form.Select.Option>
                    </Form.Select>
                    <Form.Input field='host' label='host' style={{width: '100%'}}></Form.Input>
                    <Form.InputNumber field='port' label='port' style={{width: '100%'}}
                                      hideButtons={true}></Form.InputNumber>
                    <Form.Input field='username' label='username' style={{width: '100%'}}></Form.Input>
                    <Form.Input field='password' label='password' style={{width: '100%'}}
                                mode="password"></Form.Input>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Button htmlType='submit' type="tertiary" loading={loading}> <FormattedMessage id={"submit"}/></Button>
                    </div>
                </>
            </Form>
        </Space>
    );
}

export default DatasourceEdit;