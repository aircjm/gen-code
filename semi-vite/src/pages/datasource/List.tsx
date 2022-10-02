import {Avatar, Button, Col, Row, Table} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {datasourceList} from "../../api/api";
import {AxiosResponse} from "axios";
import {format} from "date-fns";
import {PageRequest} from "../../models";
import {IconPlus} from "@douyinfe/semi-icons";


export interface ListRequestState extends PageRequest {
    name: string;
}


function Datasource() {

    const [dataSource, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setPage] = useState(1);
    const [total, setTotal] = useState();

    useEffect(() => {
        setLoading(true);
        datasourceList().then((response: AxiosResponse) => {
            setData(response.data)
            setLoading(false);
        });

    }, [])

    const columns = [
        {
            title: '数据库名称',
            dataIndex: 'dbName',
            width: 400,
            render: (text: string, record: any, index: number) => {
                return (
                    <div>
                        {text}
                    </div>
                );
            },
            filters: [
                {
                    text: 'Semi Design 设计稿',
                    value: 'Semi Design 设计稿',
                },
                {
                    text: 'Semi Pro 设计稿',
                    value: 'Semi Pro 设计稿',
                },
            ],
            onFilter: (value: any, record: any) => record.name.includes(value),
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
        // {
        //     title: '更新日期',
        //     dataIndex: 'updateTime',
        //     sorter: (a: any, b: any) => a.updateTime - b.updateTime > 0 ? 1 : -1,
        //     render: (value: any) => {
        //         return format(new Date(value), 'yyyy-MM-dd');
        //     }
        // }
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
                <Table columns={columns} dataSource={dataSource} loading={loading} pagination={{
                    currentPage,
                    pageSize: 5,
                    total: 100,
                    onPageChange: handlePageChange
                }}></Table>
            </Row>

        </div>
    )
}

export default Datasource;