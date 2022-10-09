import {request} from "./request";
import {DataSourceAddRequest, ProjectAddRequest, UserState} from "../models/DataSource";

export const APIURL = {
    generate: {
        list: "/generate/list",
        save: "/generate/save",
        detail: "/generate/detail"
    }
}


export const generateList = () => request<UserState>({
    url: APIURL.generate.list,
    method: "post",
    data: {}
})



export const generate = (param: ProjectAddRequest) => request({
    url: APIURL.generate.save,
    method: "post",
    data: param
})

export const generateDetail = (id: any) => request({
    url: APIURL.generate.detail,
    method: "get",
    params: {
        id: id
    }
})
