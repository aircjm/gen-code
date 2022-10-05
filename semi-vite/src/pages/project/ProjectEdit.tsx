import {Button, Form, Notification, Space} from "@douyinfe/semi-ui";
import React, {useEffect, useRef, useState} from "react";
import {FormattedMessage} from "../../locale";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {AxiosResponse} from "axios";
import {projectDetail, projectSave} from "../../api/project";

function ProjectEdit(props: any) {
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false)
    let [params, setParams] = useSearchParams();

    const formApi = useRef<any>();

    useEffect(() => {
        if (params.get("id")) {
            projectDetail(params.get("id")).then(result => {
                formApi.current.setValues(result.data)
            });
        }
    },[])


    const handleSubmit = (values: any) => {
        setLoading(true);
        if (params.get("id")) {
            values.id = params.get("id");
        }
        projectSave(values).then((response: AxiosResponse) => {
            // @ts-ignore
            if (parseInt(response.code) === 0) {
                navigate('/project');
                setLoading(false);
            }
        })

        Notification.info({content: '表单已提交'});
    };

    return (
        <Space align="start" wrap spacing={20}>
            <Form onSubmit={values => handleSubmit(values)} getFormApi={api => formApi.current = api}>
                <>
                    <Form.Input field='name' label='项目名称' style={{width: '100%'}}></Form.Input>
                    <Form.Input field='packageName' label='包名称' style={{width: '100%'}}></Form.Input>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Button htmlType='submit' type="tertiary" loading={loading}> <FormattedMessage id={"submit"}/></Button>
                    </div>
                </>
            </Form>
        </Space>
    );
}

export default ProjectEdit;
