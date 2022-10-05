import {Button, Col, Row, Table} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AxiosResponse} from "axios";
import {IconEdit, IconMore, IconPlus} from "@douyinfe/semi-icons";
import {projectList} from "../../api/project";


function ProjectList() {

    const [dataSource, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        projectList().then((response: AxiosResponse) => {
            setData(response.data)
            setLoading(false);
        });

    }, [])

    const columns = [
        {
            title: '项目名称',
            dataIndex: 'dbName',
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
                        <Button icon={ <IconMore />} theme='borderless' onClick={() => alert(record.id)} />
                    </div>
                )
        }
    ];


    const handlePageChange = (page: any) => {
        console.log("分页参数请求修改")
    };

    return (
        <div className="grid">
            <h2>项目管理</h2>
            <Row>
                <Col span={4} offset={20}>
                    <Button icon={<IconPlus />} type={"primary"}><Link to="edit">新增</Link></Button>
                </Col>
            </Row>
            <Row>
                <Table columns={columns} dataSource={dataSource} loading={loading}></Table>
            </Row>

        </div>
    )
}

export default ProjectList;