import {Avatar, Button, Table} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {datasourceList} from "../../api/api";
import {AxiosResponse} from "axios";
import {format} from "date-fns";
import {PageRequest} from "../../models";


export interface UserState {
    token: string;
    avatar: string | undefined;
    name: string;
    phone: string;
    role: number;
    id: number;
}


export interface ListRequestState extends PageRequest {
    name: string;
}


function Datasource() {

    const [dataSource, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setPage] = useState(1);
    const [total, setTotal] = useState();

    useEffect(() => {
        datasourceList().then((response: AxiosResponse) => {
            console.log(response)
            setData(response.data)
        });

    }, [])

    const columns = [
        {
            title: '标题',
            dataIndex: 'name',
            width: 400,
            render: (text: string, record: any, index: number) => {
                return (
                    <div>
                        <Avatar size="small" shape="square" style={{marginRight: 12}}></Avatar>
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
            title: '大小',
            dataIndex: 'size',
            sorter: (a: any, b: any) => a.size - b.size > 0 ? 1 : -1,
            render: (text: string) => `${text} KB`
        },
        {
            title: '所有者',
            dataIndex: 'owner',
            render: (text: string, record: any, index: number) => {
                return (
                    <div>
                        <Avatar size="small" color={record.avatarBg}
                                style={{marginRight: 4}}>{typeof text === 'string' && text.slice(0, 1)}</Avatar>
                        {text}
                    </div>
                );
            }

        },
        {
            title: '更新日期',
            dataIndex: 'updateTime',
            sorter: (a: any, b: any) => a.updateTime - b.updateTime > 0 ? 1 : -1,
            render: (value: any) => {
                return format(new Date(value), 'yyyy-MM-dd');
            }
        }
    ];


    const handlePageChange = (page: any) => {
        console.log("分页参数请求修改")
    };

    return (
        <div>
            <h2>数据源管理</h2>
            <Button><Link to="edit">新增</Link></Button>
            <Table columns={columns} dataSource={dataSource} loading={loading} pagination={{
                currentPage,
                pageSize: 5,
                total: 100,
                onPageChange: handlePageChange
            }}></Table>

        </div>
    )
}

export default Datasource;