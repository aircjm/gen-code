import {Button, Col, Row, Table} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {IconEdit, IconMore, IconPlus} from "@douyinfe/semi-icons";
import {projectList} from "../../api/project";
import {ResponseData} from "../../models";
import {ProjectDetail} from "../../models/Project";
import {FormattedMessage} from "../../locale";


function ProjectList() {


    const [dataSource, setData] = useState<Array<ProjectDetail>>([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        projectList().then((response: ResponseData<Array<ProjectDetail>>) => {
            setData(response.data)
            setLoading(false);
        });

    }, [])

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: 100
        },
        {
            title: '项目名称',
            dataIndex: 'name',
            width: 400
        },
        {
            title: '包名称',
            dataIndex: 'packageName'
        },
        {
            title: '',
            dataIndex: 'operate',
            render: (text:string, record: any) =>
                (
                    <div>
                        <Button icon={<IconEdit />} theme='borderless' onClick={() => {
                            navigate("/project/edit"+"?id=" +record.id)
                        }} />
                        <Button icon={<IconEdit />} theme='borderless' onClick={() => {
                            navigate("/project/generate"+"?id=" +record.id)
                        }}>生成</Button>
                        <Button icon={ <IconMore />} theme='borderless' onClick={() => alert(record.id)} />
                    </div>
                )
        }
    ];

    return (
        <div className="grid">
            <h2>项目管理</h2>
            <Row>
                <Col span={4} offset={20}>
                    <Button icon={<IconPlus />} type="tertiary" onClick={() => navigate("edit")}>
                        <FormattedMessage id={"add"}/>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Table columns={columns} dataSource={dataSource} loading={loading}></Table>
            </Row>

        </div>
    )
}

export default ProjectList;
