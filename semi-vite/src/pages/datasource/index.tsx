import {Button} from "@douyinfe/semi-ui";
import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {request} from "../../api/request";
import {APIURL, datasourceList} from "../../api/api";
import {AxiosResponse} from "axios";


export interface UserState {
    token: string;
    avatar: string | undefined;
    name: string;
    phone: string;
    role: number;
    id: number;
}


function Datasource() {

    const [str, setStr] = useState<any>()
    useEffect(() => {
        datasourceList().then((data: AxiosResponse) => {
            console.log(data)
            setStr(data)
        });
    }, [])

    return (
        <div>
            <h2>数据源管理</h2>
            <h2>{JSON.stringify(str)}</h2>
            <Button><Link to="edit">新增</Link></Button>
        </div>
    )
}

export default Datasource;