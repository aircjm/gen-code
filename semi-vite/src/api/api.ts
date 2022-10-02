import {request} from "./request";
import {DataSourceAddRequest, UserState} from "../models/DataSource";

export const APIURL = {
    datasource: {
        list: "/datasource/list",
        add: "/datasource/save"
    }
}


export const datasourceList = () => request<UserState>({
    url: APIURL.datasource.list,
    method: "post",
    data: {}
})



export const datasourceAdd = (param: DataSourceAddRequest) => request<UserState>({
    url: APIURL.datasource.add,
    method: "post",
    data: param
})