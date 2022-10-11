import {request} from "./request";
import {DataSourceAddRequest, DataSourceDetail, UserState} from "../models/DataSource";
import {AxiosResponse} from "axios";
import {ResponseData} from "../models";

export const APIURL = {
    datasource: {
        list: "/datasource/list",
        save: "/datasource/save",
        detail: "/datasource/detail"
    }
}


export const datasourceList = ():Promise<ResponseData<Array<DataSourceDetail>>> => request<UserState>({
    url: APIURL.datasource.list,
    method: "post",
    data: {}
})



export const datasourceSave = (param: DataSourceAddRequest): Promise<ResponseData<void>> => request({
    url: APIURL.datasource.save,
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
