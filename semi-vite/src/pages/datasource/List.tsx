import {Button, Col, Row, Table} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {datasourceList} from "../../api/datasource";
import {AxiosResponse} from "axios";
import {IconEdit, IconMore, IconPlus} from "@douyinfe/semi-icons";
import {DataSourceDetail} from "../../models/DataSource";
import {ResponseData} from "../../models";


function Datasource() {

    const [dataSource, setData] = useState<Array<DataSourceDetail>>([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        datasourceList().then((response: ResponseData<Array<DataSourceDetail>>) => {
            setData(response.data)
            setLoading(false);
        });

    }, [])

    const columns = [
        {
            title: '数据库名称',
            dataIndex: 'dbName',
            width: 400
        },
        {
            title: 'ip',
            dataIndex: 'host'
        },
        {
            title: '端口',
            dataIndex: 'port'
        },
        {
            title: 'JDBC驱动类',
            dataIndex: 'driverClass',
        },
        {
            title: '',
            dataIndex: 'operate',
            render: (text:string, record: any) =>
                (
                    <div>
                        <Button icon={<IconEdit />} theme='borderless' onClick={() => {
                            navigate("/datasource/edit"+"?id=" +record.id)
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
            <h2>数据源管理</h2>
            <Row>
                <Col span={4} offset={20}>
                    <Button icon={<IconPlus />} type={"primary"}><Link to="edit">新增</Link></Button></Col>
            </Row>
            <Row>
                <Table columns={columns} dataSource={dataSource} loading={loading}></Table>
            </Row>

        </div>
    )
}

export default Datasource;