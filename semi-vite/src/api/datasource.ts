import {request} from "./request";
import {DataSourceAddRequest, DataSourceDetail} from "../models/DataSource";
import {IdRequest, ResponseData} from "../models";

export const APIURL = {
    datasource: {
        list: "/datasource/list",
        save: "/datasource/save",
        delete: "/datasource/del",
        detail: "/datasource/detail"
    }
}


export const datasourceList = ():Promise<ResponseData<Array<DataSourceDetail>>> => request({
    url: APIURL.datasource.list,
    method: "post",
    data: {}
})


export const datasourceDelete = (param: IdRequest): Promise<ResponseData<void>> => request({
    url: APIURL.datasource.delete,
    method: "post",
    data: param
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
