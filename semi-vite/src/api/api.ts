import {request} from "./request";
import {DataSourceAddRequest, UserState} from "../models/DataSource";

export const APIURL = {
    datasource: {
        list: "/datasource/list",
        add: "/datasource/add",
        detail: "datasource/detail"
    }
}


export const datasourceList = () => request<UserState>({
    url: APIURL.datasource.list,
    method: "post",
    data: {}
})



export const datasourceAdd = (param: DataSourceAddRequest) => request({
    url: APIURL.datasource.add,
    method: "post",
    data: param
})

export const datasourceDetail = (id: any) => request({
    url: APIURL.datasource.detail,
    method: "get",
    params: {
        id: id
    }
})